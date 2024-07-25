import * as Blockly from "blockly/core";

// Values
const isCassieSpeaking = {
  type: "is_cassie_speaking",
  message0: "Cassie speaking status",
  output: "Boolean",
  tooltip: "Whenever Cassie is currently speaking",
  colour: 315,
};
const cassieMessageDuration = {
  type: "cassie_message_duration",
  message0: "Duration of Cassie message with content %1",
  args0: [
    {
      type: "input_value",
      name: "CONTENT",
      check: "String",
    },
  ],
  output: "Number",
  colour: 315,
  tooltip: "Calculate the duration of a Cassie message",
};
const convertTeamToCassie = {
  type: "convert_team_to_cassie",
  message0: "Cassie words for %1",
  args0: [
    {
      type: "input_value",
      name: "TEAM",
      check: "Team",
    },
  ],
  message1: "and unit name of %1",
  args1: [
    {
      type: "input_value",
      name: "UNIT_NAME",
      check: "String",
    },
  ],
  output: "String",
  colour: 315,
  tooltip: "Convert a team to a Cassie word",
};
const convertNumberToCassie = {
  type: "convert_number_to_cassie",
  message0: "Cassie words for %1",
  args0: [
    {
      type: "input_value",
      name: "NUMBER",
      check: "Number",
    },
  ],
  output: "String",
  colour: 315,
  tooltip: "Convert a number to Cassie words",
};
const validateCassieWord = {
  type: "validate_cassie_word",
  message0: "Validate Cassie word %1",
  args0: [
    {
      type: "input_value",
      name: "WORD",
      check: "String",
    },
  ],
  output: "Boolean",
  colour: 315,
  tooltip: "Check if a word is valid for Cassie",
};

// Actions
const sendCassieMessage = {
  type: "send_cassie_message",
  message0: "Send Cassie message with content %1",
  args0: [
    {
      type: "input_value",
      name: "CONTENT",
      check: "String",
    },
  ],
  message1: "with held set to %1",
  args1: [
    {
      type: "input_value",
      name: "HELD",
      check: "Boolean",
    },
  ],
  message2: "with noise set to %1",
  args2: [
    {
      type: "input_value",
      name: "NOISE",
      check: "Boolean",
    },
  ],
  message3: "and subtitles set to %1",
  args3: [
    {
      type: "input_value",
      name: "SUBTITLES",
      check: "Boolean",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 315,
  tooltip: "Send a message to Cassie",
};
const sendGlitchyCassieMessage = {
  type: "send_glitchy_cassie_message",
  message0: "Send glitchy Cassie message with content %1",
  args0: [
    {
      type: "input_value",
      name: "CONTENT",
      check: "String",
    },
  ],
  message1: "with glitch chance set to %1",
  args1: [
    {
      type: "input_value",
      name: "GLITCH_CHANCE",
      check: "Number",
    },
  ],
  message2: "and jam chance set to %1",
  args2: [
    {
      type: "input_value",
      name: "JAM_CHANCE",
      check: "Number",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 315,
  tooltip: "Send a glitchy message to Cassie",
};
const clearCassie = {
  type: "clear_cassie",
  message0: "Clear Cassie message queue",
  previousStatement: null,
  nextStatement: null,
  colour: 315,
  tooltip: "Clear Cassie's message queue",
};

// Create the block definitions for the JSON-only blocks.
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Values
  isCassieSpeaking,
  cassieMessageDuration,
  convertTeamToCassie,
  convertNumberToCassie,
  validateCassieWord,
  // Actions
  sendCassieMessage,
  sendGlitchyCassieMessage,
  clearCassie,
]);
