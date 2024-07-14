import { Order } from "blockly/lua";
import * as Blockly from "blockly/core";

export const forBlock = Object.create(null);

//////////////////////
// Player Functions //
//////////////////////

// Getters
forBlock["all_players"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return [`Players.AllPlayers`, Order.NONE];
};
forBlock["find_player"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`Players[${player}]`, Order.NONE];
};
forBlock["find_players_by_role"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const role = generator.valueToCode(block, "ROLE", Order.NONE);
  return [`Players[${role}]`, Order.NONE];
};
forBlock["find_players_by_team"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const team = generator.valueToCode(block, "TEAM", Order.NONE);
  return [`Players[${team}]`, Order.NONE];
};

// Values
forBlock["get_player_role"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.PlayerRole.RoleType`, Order.NONE];
}
forBlock["get_player_username"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Username`, Order.NONE];
};
forBlock["get_player_nickname"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Nickname`, Order.NONE];
};
forBlock["get_player_custom_info"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.CustomInfo`, Order.NONE];
};
forBlock["get_player_user_id"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.UserId`, Order.NONE];
};
forBlock["get_player_stamina"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Stamina`, Order.NONE];
};
forBlock["get_player_health"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Health`, Order.NONE];
};
forBlock["get_player_shield"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Shield`, Order.NONE];
};
forBlock["get_player_id"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.PlayerId`, Order.NONE];
};
forBlock["get_player_dnt"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.DoNotTrack`, Order.NONE];
};
forBlock["get_player_muted"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.Muted`, Order.NONE];
};
forBlock["get_player_intercom_muted"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.IntercomMuted`, Order.NONE];
};
forBlock["get_player_disarmed"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  return [`${player}.IsDisarmed`, Order.NONE];
}
forBlock["get_player_alive"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE);
  return [`${player}.IsAlive`, Order.NONE];
}

// Actions
forBlock["set_player_role"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const role = generator.valueToCode(block, "ROLE", Order.NONE);
  return `${player}.PlayerRole.RoleType = ${role};\n`;
};
forBlock["set_player_fake_role"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const role = generator.valueToCode(block, "ROLE", Order.NONE);
  return `${player}.PlayerRole.SetFakeRole(${role});\n`;
};
forBlock["set_player_nickname"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const nickname = generator.valueToCode(block, "NICKNAME", Order.NONE) || "''";
  return `${player}.DisplayUsername = ${nickname};\n`;
};
forBlock["set_player_stamina"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const stamina = generator.valueToCode(block, "STAMINA", Order.NONE) || "''";
  return `${player}.Stamina = ${stamina};\n`;
};
forBlock["set_player_health"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const health = generator.valueToCode(block, "HEALTH", Order.NONE);
  return `${player}.Health = ${health};\n`;
};
forBlock["set_player_shield"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const shield = generator.valueToCode(block, "SHIELD", Order.NONE);
  return `${player}.Shield = ${shield};\n`;
};
forBlock["set_player_mute"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const mute = generator.valueToCode(block, "MUTED", Order.NONE);
  return `${player}.Muted = ${mute};\n`;
};
forBlock["set_player_intercom_mute"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const mute = generator.valueToCode(block, "MUTED", Order.NONE);
  return `${player}.IntercomMuted = ${mute};\n`;
};
forBlock["set_player_disarmed"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const disarmed = generator.valueToCode(block, "DISARMED", Order.NONE);
  return `${player}.IsDisarmed = ${disarmed};\n`;
}
forBlock["player_kill"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.valueToCode(block, "PLAYER", Order.NONE);
  return `${player}.IsAlive = false;\n`;
}
forBlock["broadcast_message"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const message = generator.valueToCode(block, "MESSAGE", Order.NONE);
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const duration = generator.valueToCode(block, "DURATION", Order.NONE);
  const clear = generator.valueToCode(block, "CLEAR", Order.NONE);
  return `${player}.Broadcast(${message}, ${duration}, ${clear});\n`;
}
forBlock["send_hint"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const message = generator.valueToCode(block, "MESSAGE", Order.NONE);
  const player = generator.valueToCode(block, "PLAYER", Order.NONE) || "''";
  const duration = generator.valueToCode(block, "DURATION", Order.NONE);
  return `${player}.Hint(${message}, ${duration});\n`;
}