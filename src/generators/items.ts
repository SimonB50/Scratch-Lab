import { Order } from "blockly/lua";
import * as Blockly from "blockly/core";

export const forBlock = Object.create(null);

//////////////////////
// Item Functions   //
//////////////////////

// Getters
forBlock["get_current_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Inventory.CurrentItem`, Order.NONE];
};
forBlock["get_all_items"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Inventory.AllItems`, Order.NONE];
};
forBlock["get_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const position = generator.valueToCode(block, "POSITION", Order.NONE) || 0;
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Inventory.GetItem(${position})`, Order.NONE];
};
forBlock["get_items"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM_TYPE", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return `${player}.Inventory.GetItems(${item})\n`;
};
forBlock["get_ammo"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "AMMO_TYPE", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return `${player}.Inventory.GetAmmo(${item})\n`;
};

// Values
forBlock["get_item_type"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  return [`${item}.ItemType`, Order.NONE];
};
forBlock["get_item_category"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  return [`${item}.ItemCategory`, Order.NONE];
};
forBlock["get_item_serial"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  return [`${item}.Serial`, Order.NONE];
};
forBlock["get_item_weight"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  return [`${item}.Weight`, Order.NONE];
};
forBlock["get_item_owner"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  return [`${item}.Owner`, Order.NONE];
};

// Actions
forBlock["give_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return `${player}.Inventory.GiveItem(${item})\n`;
};
forBlock["remove_item_by_type"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return `${player}.Inventory.RemoveItem(${item})\n`;
};
forBlock["remove_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return `${player}.Inventory.RemoveItem(${item})\n`;
};
forBlock["drop_item_by_type"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return `${player}.Inventory.DropItem(${item})\n`;
};
forBlock["drop_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "ITEM", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return `${player}.Inventory.DropItem(${item})\n`;
};
forBlock["give_ammo"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "AMMO_TYPE", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const amount = generator.valueToCode(block, "AMOUNT", Order.NONE) || 0;
  return `${player}.Inventory.GiveAmmo(${item}, ${amount})\n`;
};
forBlock["set_ammo"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "AMMO_TYPE", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const amount = generator.valueToCode(block, "AMOUNT", Order.NONE) || 0;
  return `${player}.Inventory.SetAmmo(${item}, ${amount})\n`;
};
forBlock["drop_ammo"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.valueToCode(block, "AMMO_TYPE", Order.NONE) || "''";
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const amount = generator.valueToCode(block, "AMOUNT", Order.NONE) || 0;
  return `${player}.Inventory.DropAmmo(${item}, ${amount})\n`;
};
