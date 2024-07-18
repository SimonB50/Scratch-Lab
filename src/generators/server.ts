import { Order } from "blockly/lua";
import * as Blockly from "blockly/core";

export const forBlock = Object.create(null);

//////////////////////
// Server Functions //
//////////////////////

// Values
forBlock["get_server_address"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Server.Address`, Order.NONE];
};
forBlock["get_server_port"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Server.Port`, Order.NONE];
};
forBlock["get_server_players"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Server.PlayerCount`, Order.NONE];
};
forBlock["get_server_slots"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Server.MaxPlayerCount`, Order.NONE];
};
forBlock["get_server_reserved_slots"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Server.ReservedSlots`, Order.NONE];
};
forBlock["get_server_tps"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Server.TPS`, Order.NONE];
};
forBlock["get_server_friendly_fire"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Server.FriendlyFire`, Order.NONE];
};

// Actions
forBlock["set_server_friendly_fire"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const friendlyFire =
    generator.valueToCode(block, "VALUE", Order.NONE) || "false";
  return `Server.FriendlyFire = ${friendlyFire}`;
};
