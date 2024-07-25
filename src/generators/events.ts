import * as Blockly from "blockly/core";

export const forBlock = Object.create(null);

//////////////////////
// Event Functions  //
//////////////////////

forBlock["event_player_joined"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerJoined.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_left"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerLeft.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_died"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const attacker = generator.getVariableName(block.getFieldValue('ATTACKER'));
  const damageHandler = generator.getVariableName(block.getFieldValue('DAMAGE_HANDLER'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${attacker} = args.Attacker;\n`;
  statements += `  local ${damageHandler} = args.DamageHandler;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerDying.add(function(args)\n${statements}end)\n`;
}
forBlock["event_lcz_decontamination"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  let statements = "";
  statements += generator.statementToCode(block, "DO");
  return `Events.LczDecontaminationStart.add(function()\n${statements}end)\n`;
}
forBlock["event_lcz_decontamination_info"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const id = generator.getVariableName(block.getFieldValue('ANNOUNCEMENT'));
  let statements = "";
  statements += `  local ${id} = args.Id;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.LczDecontaminationInfo.add(function(args)\n${statements}end)\n`;
}
forBlock["event_map_generated"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  let statements = "";
  statements += generator.statementToCode(block, "DO");
  return `Events.MapGenerated.add(function()\n${statements}end)\n`;
}
forBlock["event_granade_exploded"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const grenade = generator.getVariableName(block.getFieldValue('GRENADE'));
  const thrower = generator.getVariableName(block.getFieldValue('THROWER'));
  const position = generator.getVariableName(block.getFieldValue('POSITION'));
  let statements = "";
  statements += `  local ${grenade} = args.Grenade;\n`;
  statements += `  local ${thrower} = args.Thrower;\n`;
  statements += `  local ${position} = args.Position;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.GrenadeExploded.add(function(args)\n${statements}end)\n`;
}
forBlock["event_item_spawned"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const item = generator.getVariableName(block.getFieldValue('ITEM'));
  const position = generator.getVariableName(block.getFieldValue('POSITION'));
  let statements = "";
  statements += `  local ${item} = args.Item;\n`;
  statements += `  local ${position} = args.Position;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.ItemSpawned.add(function(args)\n${statements}end)\n`;
}
forBlock["event_generator_activated"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const gameGenerator = generator.getVariableName(block.getFieldValue('GENERATOR'));
  let statements = "";
  statements += `  local ${gameGenerator} = args.Generator;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.GeneratorActivated.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_activate_generator"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const gameGenerator = generator.getVariableName(block.getFieldValue('GENERATOR'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${gameGenerator} = args.Generator;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerActivateGenerator.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_banned"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const issuer = generator.getVariableName(block.getFieldValue('ISSUER'));
  const duration = generator.getVariableName(block.getFieldValue('DURATION'));
  const reason = generator.getVariableName(block.getFieldValue('REASON'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${issuer} = args.Issuer;\n`;
  statements += `  local ${duration} = args.Duration;\n`;
  statements += `  local ${reason} = args.Reason;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerBanned.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_cancel_using_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const item = generator.getVariableName(block.getFieldValue('ITEM'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${item} = args.Item;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerCancelUsingItem.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_change_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const oldItem = generator.getVariableName(block.getFieldValue('OLD_ITEM'));
  const newItem = generator.getVariableName(block.getFieldValue('NEW_ITEM'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${oldItem} = args.OldItem;\n`;
  statements += `  local ${newItem} = args.NewItem;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerChangeItem.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_change_radio_range"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const radio = generator.getVariableName(block.getFieldValue('RADIO'));
  const range = generator.getVariableName(block.getFieldValue('RANGE'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${radio} = args.Radio;\n`;
  statements += `  local ${range} = args.Range;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerChangeRadioRange.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_change_spectator"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const oldSpectator = generator.getVariableName(block.getFieldValue('OLD_SPECTATOR'));
  const newSpectator = generator.getVariableName(block.getFieldValue('NEW_SPECTATOR'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${oldSpectator} = args.OldTarget;\n`;
  statements += `  local ${newSpectator} = args.NewTarget;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerChangeSpectator.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_deactivate_generator"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const gameGenerator = generator.getVariableName(block.getFieldValue('GENERATOR'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${gameGenerator} = args.Generator;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerDeactivatedGenerator.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_drop_ammo"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const amount = generator.getVariableName(block.getFieldValue('AMOUNT'));
  const ammo = generator.getVariableName(block.getFieldValue('AMMO'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${ammo} = args.Item;\n`;
  statements += `  local ${amount} = args.Amount;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerDropAmmo.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_drop_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const item = generator.getVariableName(block.getFieldValue('ITEM'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${item} = args.Item;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerDropItem.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_escape"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const role = generator.getVariableName(block.getFieldValue('ROLE'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${role} = args.NewRole;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerEscape.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_damage"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const attacker = generator.getVariableName(block.getFieldValue('ATTACKER'));
  const damageType = generator.getVariableName(block.getFieldValue('DAMAGE_HANDLER'));
  let statements = "";
  statements += `  local ${player} = args.Target;\n`;
  statements += `  local ${attacker} = args.Player;\n`;
  statements += `  local ${damageType} = args.DamageHandler;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerDamage.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_change_role"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const oldRole = generator.getVariableName(block.getFieldValue('OLD_ROLE'));
  const newRole = generator.getVariableName(block.getFieldValue('NEW_ROLE'));
  const reason = generator.getVariableName(block.getFieldValue('REASON'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${oldRole} = args.OldRole;\n`;
  statements += `  local ${newRole} = args.NewRole;\n`;
  statements += `  local ${reason} = args.ChangeReason;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerChangeRole.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_spawn"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const role = generator.getVariableName(block.getFieldValue('ROLE'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${role} = args.Role;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerSpawn.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_used_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const item = generator.getVariableName(block.getFieldValue('ITEM'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${item} = args.Item;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerUsedItem.add(function(args)\n${statements}end)\n`;
}
forBlock["event_player_use_item"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const player = generator.getVariableName(block.getFieldValue('PLAYER'));
  const item = generator.getVariableName(block.getFieldValue('ITEM'));
  let statements = "";
  statements += `  local ${player} = args.Player;\n`;
  statements += `  local ${item} = args.Item;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.PlayerUseItem.add(function(args)\n${statements}end)\n`;
}
forBlock["event_round_end"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const team = generator.getVariableName(block.getFieldValue('TEAM'));
  let statements = "";
  statements += `  local ${team} = args.LeadingTeam;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.RoundEnd.add(function()\n${statements}end)\n`;
}
forBlock["event_round_restart"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  let statements = "";
  statements += generator.statementToCode(block, "DO");
  return `Events.RoundRestart.add(function()\n${statements}end)\n`;
}
forBlock["event_round_start"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  let statements = "";
  statements += generator.statementToCode(block, "DO");
  return `Events.RoundStart.add(function()\n${statements}end)\n`;
}
forBlock["event_waiting_for_players"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  let statements = "";
  statements += generator.statementToCode(block, "DO");
  return `Events.WaitingForPlayers.add(function()\n${statements}end)\n`;
}
forBlock["event_team_respawn_select"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const team = generator.getVariableName(block.getFieldValue('TEAM'));
  let statements = "";
  statements += `  local ${team} = args.Team;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.TeamRespawnSelected.add(function(args)\n${statements}end)\n`;
}
forBlock["event_team_spawn"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const team = generator.getVariableName(block.getFieldValue('TEAM'));
  const players = generator.getVariableName(block.getFieldValue('PLAYERS'));
  const maxSize = generator.getVariableName(block.getFieldValue('NEXT_MAX_SIZE'));
  let statements = "";
  statements += `  local ${team} = args.Team;\n`;
  statements += `  local ${players} = args.Players;\n`;
  statements += `  local ${maxSize} = args.NextWaveMaxSize;\n`;
  statements += generator.statementToCode(block, "DO");
  return `Events.TeamRespawn.add(function(args)\n${statements}end)\n`;
}

// Event tools
forBlock["event_continue"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return `return true;\n`;
}
forBlock["event_cancel"] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  return `return false;\n`;
}