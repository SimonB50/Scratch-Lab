import { Order } from "blockly/lua";
import * as Blockly from "blockly/core";

export const forBlock = Object.create(null);

//////////////////////
// Cassie Functions //
//////////////////////

// Values
forBlock["is_cassie_speaking"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return ["Cassie.IsSpeaking", Order.NONE];
};
forBlock["cassie_message_duration"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const content = generator.valueToCode(block, "CONTENT", Order.NONE) || "''";
  return [`Cassie.CalculateDuration(${content})`, Order.NONE];
};
forBlock["convert_team_to_cassie"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const team = generator.valueToCode(block, "TEAM", Order.NONE) || "''";
  const unitName =
    generator.valueToCode(block, "UNIT_NAME", Order.NONE) || "''";
  return [`Cassie.ConvertTeam(${team}, ${unitName})`, Order.NONE];
};
forBlock["convert_number_to_cassie"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const number = generator.valueToCode(block, "NUMBER", Order.NONE) || "0";
  return [`Cassie.ConvertNumber(${number})`, Order.NONE];
};
forBlock["validate_cassie_word"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const word = generator.valueToCode(block, "WORD", Order.NONE) || "''";
  return [`Cassie.IsValid(${word})`, Order.NONE];
};

// Actions
forBlock["send_cassie_message"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const content = generator.valueToCode(block, "CONTENT", Order.NONE) || "''";
  const isHeld = generator.valueToCode(block, "HELD", Order.NONE) || "false";
  const isNoise = generator.valueToCode(block, "NOISE", Order.NONE) || "false";
  const isSubtitles =
    generator.valueToCode(block, "SUBTITLES", Order.NONE) || "false";
  return `Cassie.Message(${content}, ${isHeld}, ${isNoise}, ${isSubtitles})\n`;
};
forBlock["send_glitchy_cassie_message"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const content = generator.valueToCode(block, "CONTENT", Order.NONE) || "''";
  const glitchChance =
    generator.valueToCode(block, "GLITCH_CHANCE", Order.NONE) || "0";
  const jamChance =
    generator.valueToCode(block, "JAM_CHANCE", Order.NONE) || "0";
  return `Cassie.GlitchyMessage(${content}, ${glitchChance}, ${jamChance})\n`;
};
forBlock["clear_cassie"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return `Cassie.Clear()\n`;
};
