import * as Blockly from "blockly/core";

// Events
const playerJoinedEvent = {
  type: "event_player_joined",
  message0: "When %1 joins",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player",
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
      variable: "player",
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
};
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
};
const mapGeneratedEvent = {
  type: "event_map_generated",
  message0: "When the map is generated",
  message1: "do %1",
  args1: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
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
};
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
};
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
};
// TODO: Implement PlaceBlood
// TODO: Implement PlaceBulletHole
const playerActivateGeneratorEvent = {
  type: "event_player_activate_generator",
  message0: "When %1",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player",
    },
  ],
  message1: "activates %1",
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
};
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
};
const playerCancelUsingItem = {
  type: "event_player_cancel_using_item",
  message0: "When %1",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player",
    },
  ],
  message1: "cancels usage of %1",
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
};
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
};
const playerChangeRadioRange = {
  type: "event_player_change_radio_range",
  message0: "When %1",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player",
    },
  ],
  message1: "changes range of %1",
  args1: [
    {
      type: "field_variable",
      name: "RADIO",
      variable: "radio",
    },
  ],
  message2: "to %1",
  args2: [
    {
      type: "field_variable",
      name: "RANGE",
      variable: "range",
    },
  ],
  message3: "do %1",
  args3: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
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
};
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
};
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
};
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
};
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
};
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
};
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
};
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
};
// TODO: Implement PlayerToggleFlashlight
// TODO: Implement PlayerUnloadWeapon
// TODO: Implement PlayerUnlockGenerator
const playerUsedItemEvent = {
  type: "event_player_used_item",
  message0: "When %1",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player",
    },
  ],
  message1: "uses %1",
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
};
const playerUseItemEvent = {
  type: "event_player_use_item",
  message0: "When %1",
  args0: [
    {
      type: "field_variable",
      name: "PLAYER",
      variable: "player",
    },
  ],
  message1: "is going to use %1",
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
};
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
};
const roundRestartEvent = {
  type: "event_round_restart",
  message0: "When the round restarts",
  message1: "do %1",
  args1: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
const roundStartEvent = {
  type: "event_round_start",
  message0: "When the round starts",
  message1: "do %1",
  args1: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
const waitingForPlayersEvent = {
  type: "event_waiting_for_players",
  message0: "When waiting for players",
  message1: "do %1",
  args1: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
// TODO: Implement WarheadStart
// TODO: Implement WarheadStop
// TODO: Implement WarheadDetonation
// TODO: Implement PlayerMuted
// TODO: Implement PlayerUnmuted
// TODO: Implement PlayerCheckReservedSlot
// TODO: Implement RemoteAdminCommand
// TODO: Implement PlayerGameConsoleCommand
// TODO: Implement ConsoleCommand
const teamRespawnSelectEvent = {
  type: "event_team_respawn_select",
  message0: "When %1 is selected to respawn",
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
};
const teamSpawnEvent = {
  type: "event_team_spawn",
  message0: "When %1",
  args0: [
    {
      type: "field_variable",
      name: "TEAM",
      variable: "team",
    },
  ],
  message1: "spawns (player list) %1",
  args1: [
    {
      type: "field_variable",
      name: "PLAYERS",
      variable: "players",
    },
  ],
  message2: "and next wave max size is %1",
  args2: [
    {
      type: "field_variable",
      name: "NEXT_MAX_SIZE",
      variable: "maxSize",
    },
  ],
  message3: "do %1",
  args3: [{ type: "input_statement", name: "DO" }],
  colour: 120,
};
// TODO: Implement Scp106Stalking
// TODO: Implement PlayerEnterPocketDimension
// TODO: Implement PlayerExitPocketDimension
// TODO: Implement Scp106TeleportPlayer
// TODO: Implement Scp173PlaySound
// TODO: Implement Scp173CreateTantrum
// TODO: Implement Scp173BreakneckSpeeds
// TODO: Implement Scp173NewObserver
// TODO: Implement Scp939CreateAmnesticCloud
// TODO: Implement Scp939Lunge
// TODO: Implement Scp939Attack
// TODO: Implement Scp079GainExperience
// TODO: Implement Scp079LevelUpTier
// TODO: Implement Scp079UseTesla
// TODO: Implement Scp079LockdownRoom
// TODO: Implement Scp079LockDoor
// TODO: Implement Scp079UnlockDoor
// TODO: Implement Scp079BlackoutZone
// TODO: Implement Scp079BlackoutRoom
// TODO: Implement Scp049ResurrectBody
// TODO: Implement PlayerInteractDoor
// TODO: Implement Scp173SnapPlayer
// TODO: Implement Scp079CancelRoomLockdown
// TODO: Implement BanRevoked
// TODO: Implement PlayerPreCoinFlip
// TODO: Implement PlayerCoinFlip
// TODO: Implement PlayerInteractGenerator
// TODO: Implement Scp096AddingTarget
// TODO: Implement Scp096Enraging
// TODO: Implement Scp096ChangeState
// TODO: Implement Scp096Charging
// TODO: Implement Scp096PryingGate
// TODO: Implement Scp096TryNotCry
// TODO: Implement Scp096StartCrying
// TODO: Implement CassieAnnouncesScpTermination
// TODO: Implement PlayerUsingIntercom
// TODO: Implement PlayerDeath
// TODO: Implement PlayerDroppedAmmo

// Event tools
const continueEvent = {
  type: "event_continue",
  message0: "Continue event",
  previousStatement: null,
  nextStatement: null,
  colour: 120,
};
const cancelEvent = {
  type: "event_cancel",
  message0: "Cancel event",
  previousStatement: null,
  nextStatement: null,
  colour: 120,
};

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
  playerActivateGeneratorEvent,
  playerBannedEvent,
  playerCancelUsingItem,
  playerChangeItemEvent,
  playerChangeRadioRange,
  playerChangeSpectatorEvent,
  playerDeactivateGeneratorEvent,
  playerDropAmmoEvent,
  playerDropItemEvent,
  playerEscapeEvent,
  playerDamageEvent,
  playerChangeRoleEvent,
  playerSpawnEvent,
  playerUsedItemEvent,
  playerUseItemEvent,
  roundEndEvent,
  roundRestartEvent,
  roundStartEvent,
  waitingForPlayersEvent,
  teamRespawnSelectEvent,
  teamSpawnEvent,
  // Event tools
  continueEvent,
  cancelEvent,
]);
