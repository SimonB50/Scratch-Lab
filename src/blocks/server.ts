import * as Blockly from "blockly/core";

// Values
const getServerAddress = {
  type: "get_server_address",
  message0: "Server address",
  output: "String",
  colour: 347,
  tooltip: "Get the server address",
};
const getServerPort = {
  type: "get_server_port",
  message0: "Server port",
  output: "String",
  colour: 347,
  tooltip: "Get the server port",
};
const getServerPlayers = {
  type: "get_server_players",
  message0: "Server online players count",
  output: "Number",
  colour: 347,
  tooltip: "Get the server online players count",
};
const getServerSlots = {
  type: "get_server_slots",
  message0: "Server player limit",
  output: "Number",
  colour: 347,
  tooltip: "Get the server player limit",
};
const getServerReservedSlots = {
  type: "get_server_reserved_slots",
  message0: "Server reserved slots",
  output: "Number",
  colour: 347,
  tooltip: "Get the server reserved slots",
};
const getServerTps = {
  type: "get_server_tps",
  message0: "Server TPS",
  output: "Number",
  colour: 347,
  tooltip: "Get the server TPS",
};
const getServerFriendlyFire = {
  type: "get_server_friendly_fire",
  message0: "Server friendly fire status",
  output: "Boolean",
  colour: 347,
  tooltip: "Get the server friendly fire status",
};

// Actions
const setServerFriendlyFire = {
  type: "set_server_friendly_fire",
  message0: "Set server friendly fire to %1",
  args0: [
    {
      type: "input_value",
      name: "VALUE",
      check: "Boolean",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 347,
  tooltip: "Set the server friendly fire status",
};

// Create the block definitions for the JSON-only blocks.
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Values
  getServerAddress,
  getServerPort,
  getServerPlayers,
  getServerSlots,
  getServerReservedSlots,
  getServerTps,
  getServerFriendlyFire,
  // Actions
  setServerFriendlyFire,
]);
