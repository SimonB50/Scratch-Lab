import * as Blockly from "blockly/core";

// Getters
const getCurrentItem = {
  type: "get_current_item",
  message0: "Current item of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "ItemBase",
  colour: 36,
  tooltip: "Get item that the player is currently holding",
};
const getAllItems = {
  type: "get_all_items",
  message0: "All items of %1",
  args0: [
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Array",
  colour: 36,
  tooltip: "Get items that the player has in their inventory",
};
const getItem = {
  type: "get_item",
  message0: "Item at position %1 in inventory of (player) %2",
  args0: [
    {
      type: "input_value",
      name: "POSITION",
      check: "Number",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "ItemBase",
  colour: 36,
  tooltip: "Get an item at a specific position in a player's inventory",
};
const getItems = {
  type: "get_items",
  message0: "Items of type %1 in inventory of (player) %2",
  args0: [
    {
      type: "input_value",
      name: "ITEM_TYPE",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Array",
  colour: 36,
  tooltip: "Get all items of a specific type in a player's inventory",
};
const getAmmo = {
  type: "get_ammo",
  message0: "Ammo of type %1 in inventory of (player) %2",
  args0: [
    {
      type: "input_value",
      name: "AMMO_TYPE",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  output: "Number",
  colour: 36,
  tooltip: "Get the amount of ammo of a specific type in a player's inventory",
};

// Values
const getItemType = {
  type: "get_item_type",
  message0: "Item type of %1",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      text: "ItemBase",
    },
  ],
  output: "ItemType",
  colour: 36,
  tooltip: "Type of provided item",
};
const getItemCategory = {
  type: "get_item_category",
  message0: "Category of %1",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      text: "ItemBase",
    },
  ],
  output: "ItemCategory",
  colour: 36,
  tooltip: "Category of provided item",
};
const getItemSerial = {
  type: "get_item_serial",
  message0: "Serial of %1",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      text: "ItemBase",
    },
  ],
  output: "Number",
  colour: 36,
  tooltip: "Serial of provided item",
};
const getItemWeight = {
  type: "get_item_weight",
  message0: "Weight of %1",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      text: "ItemBase",
    },
  ],
  output: "Number",
  colour: 36,
  tooltip: "Weight of provided item",
};
const getItemOwner = {
  type: "get_item_owner",
  message0: "Owner of %1",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      text: "ItemBase",
    },
  ],
  output: "Player",
  colour: 36,
  tooltip: "Owner of provided item",
};

// Actions
const giveItem = {
  type: "give_item",
  message0: "Give %1 to (player) %2",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Give an item to a player",
};
const removeItemByType = {
  type: "remove_item_by_type",
  message0: "Remove %1 from (player) %2",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Remove first instance of an item from a player's inventory",
};
const removeItem = {
  type: "remove_item",
  message0: "Remove (item) %1 from (player) %2",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      check: "ItemBase",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Remove an item from player's inventory",
};
const dropItemByType = {
  type: "drop_item_by_type",
  message0: "Drop %1 from (player) %2",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Drop first instance of an item from a player's inventory",
};
const dropItem = {
  type: "drop_item",
  message0: "Drop (item) %1 from (player) %2",
  args0: [
    {
      type: "input_value",
      name: "ITEM",
      check: "ItemBase",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Drop an item from player's inventory",
};
const giveAmmo = {
  type: "give_ammo",
  message0: "Give %1 ammo of type %2 to (player) %3",
  args0: [
    {
      type: "input_value",
      name: "AMOUNT",
      check: "Number",
    },
    {
      type: "input_value",
      name: "AMMO_TYPE",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Give ammo to a player",
};
const setAmmo = {
  type: "set_ammo",
  message0: "Set ammo of type %1 to %2 for (player) %3",
  args0: [
    {
      type: "input_value",
      name: "AMMO_TYPE",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "AMOUNT",
      check: "Number",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Set the amount of ammo of a specific type in a player's inventory",
};
const dropAmmo = {
  type: "drop_ammo",
  message0: "Drop %1 ammo of type %2 from (player) %3",
  args0: [
    {
      type: "input_value",
      name: "AMOUNT",
      check: "Number",
    },
    {
      type: "input_value",
      name: "AMMO_TYPE",
      check: "ItemType",
    },
    {
      type: "input_value",
      name: "PLAYER",
      check: "Player",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 36,
  tooltip: "Drop ammo from a player",
};

// Create the block definitions for the JSON-only blocks.
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Getters
  getCurrentItem,
  getAllItems,
  getItem,
  getItems,
  getAmmo,
  // Values
  getItemType,
  getItemCategory,
  getItemSerial,
  getItemWeight,
  getItemOwner,
  // Actions
  giveItem,
  removeItemByType,
  removeItem,
  dropItemByType,
  dropItem,
  giveAmmo,
  setAmmo,
  dropAmmo,
]);
