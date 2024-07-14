import { Order } from "blockly/lua";
import * as Blockly from "blockly/core";

export const forBlock = Object.create(null);

//////////////////////
// Enum Functions   //
//////////////////////

forBlock["role_type_id"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const role = block.getFieldValue("ROLE");
  return [`RoleTypeId.${role}`, Order.NONE];
}
forBlock["team"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const team = block.getFieldValue("TEAM");
  return [`Team.${team}`, Order.NONE];
}
forBlock["item_type"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = block.getFieldValue("ITEM");
  return [`ItemType.${item}`, Order.NONE];
}
forBlock["item_category"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const category = block.getFieldValue("CATEGORY");
  return [`ItemCategory.${category}`, Order.NONE];
}