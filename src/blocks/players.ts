import * as Blockly from "blockly/core";

// Getters
const allPlayers = {
  type: "all_players",
  message0: "All players",
  output: "Array",
  tooltip: "Get all online players",
  colour: 250,
};
const findPlayer = {
  type: "find_player",
  message0: "Unique player by %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: ["String", "Number"],
    },
  ],
  output: "Player",
  tooltip: "Find a player by their unique identifier or nickname",
  colour: 250,
};
const findPlayersByRole = {
  type: "find_players_by_role",
  message0: "Players with (role) %1",
  args0: [
    {
      type: "input_value",
      name: "ROLE",
      check: "RoleTypeId",
    },
  ],
  output: "Array",
  tooltip: "Find all players with a specific role",
  colour: 250,
};
const findPlayersByTeam = {
  type: "find_players_by_team",
  message0: "Players in (team) %1",
  args0: [
    {
      type: "input_value",
      name: "TEAM",
      check: "Team",
    },
  ],
  output: "Array",
  tooltip: "Find all players in a specific team",
  colour: 250,
};

// Values
const getPlayerRole = {
  type: "get_player_role",
  message0: "Role of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "RoleTypeId",
  colour: 250,
  tooltip: "Get the role of a player",
};
const getPlayerUsername = {
  type: "get_player_username",
  message0: "Username of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "String",
  colour: 250,
  tooltip: "Get the username of a player",
};
const getPlayerNickname = {
  type: "get_player_nickname",
  message0: "Nickname of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "String",
  colour: 250,
  tooltip: "Get the nickname of a player",
};
// TODO: Implement InfoArea
const getPlayerCustomInfo = {
  type: "get_player_custom_info",
  message0: "Custom info of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "String",
  colour: 250,
  tooltip: "Get the custom info of a player",
};
// TODO: Implement InfoViewRange
// TODO: Implement IsOffline
const getPlayerUserId = {
  type: "get_player_user_id",
  message0: "User ID of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "String",
  colour: 250,
  tooltip: "Get the user ID of a player",
};
const getPlayerStamina = {
  type: "get_player_stamina",
  message0: "Stamina of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Number",
  colour: 250,
  tooltip: "Get the stamina of a player",
};
const getPlayerHealth = {
  type: "get_player_health",
  message0: "Health of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Number",
  colour: 250,
  tooltip: "Get the health of a player",
};
const getPlayerShield = {
  type: "get_player_shield",
  message0: "Shield of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Number",
  colour: 250,
  tooltip: "Get the shield of a player",
};
const getPlayerId = {
  type: "get_player_id",
  message0: "Player ID of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "String",
  colour: 250,
  tooltip: "Get the ID of a player",
};
const getPlayerDnt = {
  type: "get_player_dnt",
  message0: "Is DNT enabled for %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "String",
  colour: 250,
  tooltip: "Get the DNT status of a player",
};
// TODO: Implement CurrentZone
// TODO: Implement CurrentRoom
const getPlayerMuted = {
  type: "get_player_muted",
  message0: "Mute status of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Boolean",
  colour: 250,
  tooltip: "Get the mute status of a player",
};
const getPlayerIntercomMuted = {
  type: "get_player_intercom_muted",
  message0: "Intercom mute status of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Boolean",
  colour: 250,
  tooltip: "Get the intercom mute status of a player",
};
// TODO: Implement Vector3 (Position, Rotation, Scale, AimingPoint)
// TODO: Implement SessionVariables
const getPlayerDisarmed = {
  type: "get_player_disarmed",
  message0: "Disarm status of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Boolean",
  colour: 250,
  tooltip: "Get the disarm status of a player",
};
const getPlayerAlive = {
  type: "get_player_alive",
  message0: "Whenever %1 is alive",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Boolean",
  colour: 250,
  tooltip: "Get the alive status of a player",
};

// Actions
const setPlayerRole = {
  type: "set_player_role",
  message0: "Set (player) %1 role to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "ROLE",
      check: "RoleTypeId",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set the role of a player",
};
const setPlayerFakeRole = {
  type: "set_player_fake_role",
  message0: "Set (player) %1 fake role to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "ROLE",
      check: "RoleTypeId",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set the fake role of a player",
};
const setPlayerNickname = {
  type: "set_player_nickname",
  message0: "Set %1 nickname to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "NICKNAME",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set the nickname of a player",
};
// TODO: Implement setting player's CustomInfo
const setPlayerStamina = {
  type: "set_player_stamina",
  message0: "Set %1 stamina to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "STAMINA",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set the stamina of a player",
};
const setPlayerHealth = {
  type: "set_player_health",
  message0: "Set %1 health to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "HEALTH",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set the health of a player",
};
const setPlayerShield = {
  type: "set_player_shield",
  message0: "Set %1 shield to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "SHIELD",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set the shield of a player",
};
const setPlayerMute = {
  type: "set_player_mute",
  message0: "Set muted status for %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "MUTED",
      check: "Boolean",
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set mute status for player",
};
const setPlayerIntercomMute = {
  type: "set_player_intercom_mute",
  message0: "Set intercom muted status for %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "MUTED",
      check: "Boolean",
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set intercom mute status for player",
};
// TODO: Implement Vector3 (Position, Rotation, Scale, AimingPoint)
// TODO: Implement SessionVariables
const setPlayerDisarmed = {
  type: "set_player_disarmed",
  message0: "Set disarm status for %1 to %2",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "DISARMED",
      check: "Boolean",
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Set disarmed status for player",
};
const killPlayer = {
  type: "player_kill",
  message0: "Kill %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Kill a player",
};
const broadcastMessage = {
  type: "broadcast_message",
  message0: "Broadcast %1 to %2 for (seconds) %3 with clearing set to %4",
  args0: [
    {
      type: "input_value",
      name: "MESSAGE",
      check: "String",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "DURATION",
      check: "Number",
    },
    {
      type: "input_value",
      name: "CLEAR",
      check: "Boolean",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Broadcast a message to player",
};
const sendHint = {
  type: "send_hint",
  message0: "Send hint %1 to %2 for (seconds) %3",
  args0: [
    {
      type: "input_value",
      name: "MESSAGE",
      check: "String",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
    {
      type: "input_value",
      name: "DURATION",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 250,
  tooltip: "Send a hint to player",
};

// Create the block definitions for the JSON-only blocks.
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Getters
  allPlayers,
  findPlayer,
  findPlayersByRole,
  findPlayersByTeam,
  // Values
  getPlayerRole,
  getPlayerUsername,
  getPlayerNickname,
  getPlayerCustomInfo,
  getPlayerUserId,
  getPlayerStamina,
  getPlayerHealth,
  getPlayerShield,
  getPlayerId,
  getPlayerDnt,
  getPlayerMuted,
  getPlayerIntercomMuted,
  getPlayerDisarmed,
  getPlayerAlive,
  // Actions
  setPlayerRole,
  setPlayerFakeRole,
  setPlayerNickname,
  setPlayerStamina,
  setPlayerHealth,
  setPlayerShield,
  setPlayerMute,
  setPlayerIntercomMute,
  setPlayerDisarmed,
  killPlayer,
  broadcastMessage,
  sendHint,
]);
