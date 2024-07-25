import * as Blockly from "blockly";
import { luaGenerator } from "blockly/lua";
import { save, load } from "./serialization";
import { toolbox } from "./toolbox";
import "./index.css";

// Blockly plugins
import { textMultiline } from "@blockly/field-multilineinput";
import { Backpack } from "@blockly/workspace-backpack";

// Import blocks
import { blocks as eventBlocks } from "./blocks/events";
import { blocks as enumBlocks } from "./blocks/enums";
import { blocks as playerBlocks } from "./blocks/players";
import { blocks as itemBlocks } from "./blocks/items";
import { blocks as serverBlocks } from "./blocks/server";
import { blocks as cassieBlocks } from "./blocks/cassie";
import { blocks as miscBlocks } from "./blocks/misc";

// Import generators
import { forBlock as forEventBlocks } from "./generators/events";
import { forBlock as forEnumBlocks } from "./generators/enums";
import { forBlock as forPlayerBlocks } from "./generators/players";
import { forBlock as forItemBlocks } from "./generators/items";
import { forBlock as forServerBlocks } from "./generators/server";
import { forBlock as forCassieBlocks } from "./generators/cassie";
import { forBlock as forMiscBlocks } from "./generators/misc";

// Register the blocks and generator with Blockly
textMultiline.installBlock({ lua: luaGenerator });
Blockly.common.defineBlocks(eventBlocks);
Blockly.common.defineBlocks(enumBlocks);
Blockly.common.defineBlocks(playerBlocks);
Blockly.common.defineBlocks(itemBlocks);
Blockly.common.defineBlocks(serverBlocks);
Blockly.common.defineBlocks(cassieBlocks);
Blockly.common.defineBlocks(miscBlocks);

// Register custom lua generators
Object.assign(luaGenerator.forBlock, forEventBlocks);
Object.assign(luaGenerator.forBlock, forEnumBlocks);
Object.assign(luaGenerator.forBlock, forPlayerBlocks);
Object.assign(luaGenerator.forBlock, forItemBlocks);
Object.assign(luaGenerator.forBlock, forServerBlocks);
Object.assign(luaGenerator.forBlock, forCassieBlocks);
Object.assign(luaGenerator.forBlock, forMiscBlocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById("generatedCode")?.firstChild;
const blocklyDiv = document.getElementById("blocklyDiv");

if (!blocklyDiv) {
  throw new Error(`div with id 'blocklyDiv' not found`);
}
const ws = Blockly.inject(blocklyDiv, { toolbox });

// Initialize backpack plugin.
const backpack = new Backpack(ws);
backpack.init();

// Generate code from the workspace
const generateCode = () => {
  const code = luaGenerator.workspaceToCode(ws as Blockly.Workspace);
  if (codeDiv) codeDiv.textContent = code;
};

if (ws) {
  // Load the initial state from storage and run the code.
  load(ws);
  generateCode();

  // Every time the workspace changes state, save the changes to storage.
  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    // UI events are things like scrolling, zooming, etc.
    // No need to save after one of these.
    if (e.isUiEvent) return;
    save(ws);
  });

  // Whenever the workspace changes meaningfully, run the code again.
  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    // Don't run the code when the workspace finishes loading; we're
    // already running it once when the application starts.
    // Don't run the code during drags; we might have invalid state.
    if (
      e.isUiEvent ||
      e.type == Blockly.Events.FINISHED_LOADING ||
      ws.isDragging()
    ) {
      return;
    }
    generateCode();
  });
}
