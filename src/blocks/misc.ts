import * as Blockly from "blockly/core";

// Misc blocks
const print = {
  type: "misc_print",
  message0: "print %1",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 156,
  tooltip: "Print a message to the console",
};
const callDelayed = {
  type: "misc_call_delayed",
  message0: "after (seconds) %1",
  args0: [
    {
      type: "input_value",
      name: "DELAY",
      check: "Number",
    },
  ],
  message1: "do %1",
  args1: [
    {
      type: "input_statement",
      name: "DO",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 156,
  tooltip: "Call a function after a delay",
};

// Create the block definitions for the JSON-only blocks.
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  print,
  callDelayed,
]);
