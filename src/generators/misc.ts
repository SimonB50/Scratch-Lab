import { Order } from "blockly/lua";
import * as Blockly from "blockly/core";

export const forBlock = Object.create(null);

//////////////////////
// Misc Functions   //
//////////////////////

forBlock["misc_print"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text = generator.valueToCode(block, "TEXT", Order.NONE) || "''";
  return `print(${text})\n`;
};
forBlock["misc_call_delayed"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const delay = generator.valueToCode(block, "DELAY", Order.NONE) || 0;
  const doBlock = generator.statementToCode(block, "DO") || "";
  return `doAfter(${delay}, function()\n${doBlock}end)\n`;
};
