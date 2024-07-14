import * as Blockly from "blockly/core";

// Events
const playerJoinedEvent = {
  type: "event_player_joined",
  message0: "When %1 joins",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player"
    },
  ],
  message1: "do %1",
  args1: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
const playerLeftEvent = {
  type: "event_player_left",
  message0: "When %1 leaves",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player"
    },
  ],
  message1: "do %1",
  args1: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
const playerDiedEvent = {
  type: "event_player_died",
  message0: "When %1",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player",
    },
  ],
  message1: "dies from %1",
  args1: [
    {
      type: "field_variable",
      name: "ATTACKER",
      variable: "attacker",
    },
  ],
  message2: "because of %1",
  args2: [
    {
      type: "field_variable",
      name: "DAMAGE_HANDLER",
      variable: "damage",
    },
  ],
  message3: "do %1",
  args3: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
const lczDecontaminationEvent = {
    type: "event_lcz_decontamination",
    message0: "When LCZ decontamination starts",
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const lczDecontaminationInfoEvent = {
    type: "event_lcz_decontamination_info",
    message0: "When LCZ decontamination annoucement with %1 plays",
    args0: [
        {
            type: "field_variable",
            name: "ANNOUNCEMENT",
            variable: "id",
        },
    ],
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const mapGeneratedEvent = {
    type: "event_map_generated",
    message0: "When the map is generated",
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const grenadeExplodedEvent = {
    type: "event_granade_exploded",
    message0: "When a %1",
    args0: [
        {
            type: "field_variable",
            name: "GRENADE",
            variable: "grenade",
        },
    ],
    message1: "thrown by %1",
    args1: [
        {
            type: "field_variable",
            name: "THROWER",
            variable: "thrower",
        },
    ],
    message2: "at %1",
    args2: [
        {
            type: "field_variable",
            name: "POSITION",
            variable: "position",
        },
    ],
    message3: "explodes",
    message4: "do %1",
    args4: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const itemSpawnedEvent = {
    type: "event_item_spawned",
    message0: "When %1 spawns",
    args0: [
        {
            type: "field_variable",
            name: "ITEM",
            variable: "item",
        },
    ],
    message1: "at %1",
    args1: [
        {
            type: "field_variable",
            name: "POSITION",
            variable: "position",
        },
    ],
    message2: "do %1",
    args2: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const generatorActivatedEvent = {
    type: "event_generator_activated",
    message0: "When %1 is activated",
    args0: [
        {
            type: "field_variable",
            name: "GENERATOR",
            variable: "generator",
        },
    ],
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlaceBlood
// TODO: Implement PlaceBulletHole
// TODO: Implement PlayerActivateGenerator
// TODO: Implement PlayerAimWeapon
const playerBannedEvent = {
    type: "event_player_banned",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "is banned by %1",
    args1: [
        {
            type: "field_variable",
            name: "ISSUER",
            variable: "issuer",
        },
    ],
    message2: "for %1",
    args2: [
        {
            type: "field_variable",
            name: "DURATION",
            variable: "duration",
        },
    ],
    message3: "because %1",
    args3: [
        {
            type: "field_variable",
            name: "REASON",
            variable: "reason",
        },
    ],
    message4: "do %1",
    args4: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlayerCancelUsingItem
const playerChangeItemEvent = {
    type: "event_player_change_item",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "changes item from %1",
    args1: [
        {
            type: "field_variable",
            name: "OLD_ITEM",
            variable: "oldItem",
        },
    ],
    message2: "to %1",
    args2: [
        {
            type: "field_variable",
            name: "NEW_ITEM",
            variable: "newItem",
        },
    ],
    message3: "do %1",
    args3: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlayerChangeRadioRange
const playerChangeSpectatorEvent = {
    type: "event_player_change_spectator",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "chnages spectator from %1",
    args1: [
        {
            type: "field_variable",
            name: "OLD_SPECTATOR",
            variable: "oldSpectator",
        },
    ],
    message2: "to %1",
    args2: [
        {
            type: "field_variable",
            name: "NEW_SPECTATOR",
            variable: "newSpectator",
        },
    ],
    message3: "do %1",
    args3: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlayerCloseGenerator
const playerDeactivateGeneratorEvent = {
    type: "event_player_deactivate_generator",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "deactivates %1",
    args1: [
        {
            type: "field_variable",
            name: "GENERATOR",
            variable: "generator",
        },
    ],
    message2: "do %1",
    args2: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const playerDropAmmoEvent = {
    type: "event_player_drop_ammo",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "drops %1x %2",
    args1: [
        {
            type: "field_variable",
            name: "AMOUNT",
            variable: "amount",
        },
        {
            type: "field_variable",
            name: "AMMO",
            variable: "ammo",
        },
    ],
    message2: "do %1",
    args2: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const playerDropItemEvent = {
    type: "event_player_drop_item",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "drops %1",
    args1: [
        {
            type: "field_variable",
            name: "ITEM",
            variable: "item",
        },
    ],
    message2: "do %1",
    args2: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlayerDryfireWeapon
const playerEscapeEvent = {
    type: "event_player_escape",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "escapes to %1",
    args1: [
        {
            type: "field_variable",
            name: "ROLE",
            variable: "role",
        },
    ],
    message2: "do %1",
    args2: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const playerDamageEvent = {
    type: "event_player_damage",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "is damaged by %1",
    args1: [
        {
            type: "field_variable",
            name: "ATTACKER",
            variable: "attacker",
        },
    ],
    message2: "with %1",
    args2: [
        {
            type: "field_variable",
            name: "DAMAGE_HANDLER",
            variable: "damageHandler",
        },
    ],
    message3: "do %1",
    args3: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlayerInteractScp330
// TODO: Implement PlayerKicked
// TODO: Implement PlayerMakeNoise
// TODO: Implement PlayerOpenGenerator
// TODO: Implement PlayerPickupAmmo
// TODO: Implement PlayerPickupArmor
// TODO: Implement PlayerPickupScp330
// TODO: Implement PlayerPreauth
// TODO: Implement PlayerReceiveEffect
// TODO: Implement PlayerReloadWeapon
const playerChangeRoleEvent = {
    type: "event_player_change_role",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "changes role from %1",
    args1: [
        {
            type: "field_variable",
            name: "OLD_ROLE",
            variable: "oldRole",
        },
    ],
    message2: "to %1",
    args2: [
        {
            type: "field_variable",
            name: "NEW_ROLE",
            variable: "newRole",
        },
    ],
    message3: "because %1",
    args3: [
        {
            type: "field_variable",
            name: "REASON",
            variable: "reason",
        },
    ],
    message4: "do %1",
    args4: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlayerSearchPickup
// TODO: Implement PlayerSearchedPickup
// TODO: Implement PlayerShotWeapon
const playerSpawnEvent = {
    type: "event_player_spawn",
    message0: "When %1",
    args0: [
        {
            type: "field_variable",
            name: "PLAYER",
            variable: "player",
        },
    ],
    message1: "spawns as %1",
    args1: [
        {
            type: "field_variable",
            name: "ROLE",
            variable: "role",
        },
    ],
    message2: "do %1",
    args2: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement PlayerToggleFlashlight
// TODO: Implement PlayerUnloadWeapon
// TODO: Implement PlayerUnlockGenerator
// TODO: Implement PlayerUsedItem
// TODO: Implement PlayerUseItem
// TODO: Implement PlayerReport
// TODO: Implement PlayerCheaterReport
const roundEndEvent = {
    type: "event_round_end",
    message0: "When the round ends with success of %1",
    args0: [
        {
            type: "field_variable",
            name: "TEAM",
            variable: "team",
        },
    ],
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const roundRestartEvent = {
    type: "event_round_restart",
    message0: "When the round restarts",
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const roundStartEvent = {
    type: "event_round_start",
    message0: "When the round starts",
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
const waitingForPlayersEvent = {
    type: "event_waiting_for_players",
    message0: "When waiting for players",
    message1: "do %1",
    args1: [{ type: "input_statement", name: "DO" }],
    colour: 120,
}
// TODO: Implement remaining events

// Event tools
const continueEvent = {
    type: "event_continue",
    message0: "Continue event",
    previousStatement: null,
    nextStatement: null,
    colour: 120,
}
const cancelEvent = {
    type: "event_cancel",
    message0: "Cancel event",
    previousStatement: null,
    nextStatement: null,
    colour: 120,
}


// Create the block definitions for the JSON-only blocks.
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  playerJoinedEvent,
  playerLeftEvent,
  playerDiedEvent,
  lczDecontaminationEvent,
  lczDecontaminationInfoEvent,
  mapGeneratedEvent,
  grenadeExplodedEvent,
  itemSpawnedEvent,
  generatorActivatedEvent,
  playerBannedEvent,
  playerChangeItemEvent,
  playerChangeSpectatorEvent,
  playerDeactivateGeneratorEvent,
  playerDropAmmoEvent,
  playerDropItemEvent,
  playerEscapeEvent,
  playerDamageEvent,
  playerChangeRoleEvent,
  playerSpawnEvent,
  roundEndEvent,
  roundRestartEvent,
  roundStartEvent,
  waitingForPlayersEvent,
  // Event tools
  continueEvent,
  cancelEvent,
]);
