import * as Blockly from "blockly/core";

const roleTypeId = {
  type: "role_type_id",
  message0: "%1 role",
  args0: [
    {
      type: "field_dropdown",
      name: "ROLE",
      check: "String",
      options: [
        ["None", "None"],
        ["Scp173", "Scp173"],
        ["ClassD", "ClassD"],
        ["Spectator", "Spectator"],
        ["Scp106", "Scp106"],
        ["NtfSpecialist", "NtfSpecialist"],
        ["Scp049", "Scp049"],
        ["Scientist", "Scientist"],
        ["Scp079", "Scp079"],
        ["ChaosConscript", "ChaosConscript"],
        ["Scp096", "Scp096"],
        ["Scp0492", "Scp0492"],
        ["NtfSergeant", "NtfSergeant"],
        ["NtfCaptain", "NtfCaptain"],
        ["NtfLieutenant", "NtfLieutenant"],
        ["Tutorial", "Tutorial"],
        ["FacilityGuard", "FacilityGuard"],
        ["Scp939", "Scp939"],
        ["CustomRole", "CustomRole"],
        ["ChaosRifleman", "ChaosRifleman"],
        ["ChaosMarauder", "ChaosMarauder"],
        ["ChaosRepressor", "ChaosRepressor"],
        ["Overwatch", "Overwatch"],
        ["Filmmaker", "Filmmaker"],
        ["Scp3114", "Scp3114"],
      ],
    },
  ],
  output: "RoleTypeId",
  colour: 48,
};
const team = {
  type: "team",
  message0: "%1 team",
  args0: [
    {
      type: "field_dropdown",
      name: "TEAM",
      check: "String",
      options: [
        ["SCPs", "SCPs"],
        ["FoundationForces", "FoundationForces"],
        ["ChaosInsurgency", "ChaosInsurgency"],
        ["Scientists", "Scientists"],
        ["ClassD", "ClassD"],
        ["Dead", "Dead"],
        ["OtherAlive", "OtherAlive"],
      ],
    },
  ],
  output: "Team",
  colour: 48,
};
const itemType = {
    type: "item_type",
    message0: "%1 item",
    args0: [
        {
            type: "field_dropdown",
            name: "ITEM",
            check: "String",
            options: [
                ["None", "None"],
                ["KeycardJanitor", "KeycardJanitor"],
                ["KeycardScientist", "KeycardScientist"],
                ["KeycardResearchCoordinator", "KeycardResearchCoordinator"],
                ["KeycardZoneManager", "KeycardZoneManager"],
                ["KeycardGuard", "KeycardGuard"],
                ["KeycardMTFPrivate", "KeycardMTFPrivate"],
                ["KeycardContainmentEngineer", "KeycardContainmentEngineer"],
                ["KeycardMTFOperative", "KeycardMTFOperative"],
                ["KeycardMTFCaptain", "KeycardMTFCaptain"],
                ["KeycardFacilityManager", "KeycardFacilityManager"],
                ["KeycardChaosInsurgency", "KeycardChaosInsurgency"],
                ["KeycardO5", "KeycardO5"],
                ["Radio", "Radio"],
                ["GunCOM15", "GunCOM15"],
                ["Medkit", "Medkit"],
                ["Flashlight", "Flashlight"],
                ["MicroHID", "MicroHID"],
                ["SCP500", "SCP500"],
                ["SCP207", "SCP207"],
                ["Ammo12gauge", "Ammo12gauge"],
                ["GunE11SR", "GunE11SR"],
                ["GunCrossvec", "GunCrossvec"],
                ["Ammo556x45", "Ammo556x45"],
                ["GunFSP9", "GunFSP9"],
                ["GunLogicer", "GunLogicer"],
                ["GrenadeHE", "GrenadeHE"],
                ["GrenadeFlash", "GrenadeFlash"],
                ["Ammo44cal", "Ammo44cal"],
                ["Ammo762x39", "Ammo762x39"],
                ["Ammo9x19", "Ammo9x19"],
                ["GunCOM18", "GunCOM18"],
                ["SCP018", "SCP018"],
                ["SCP268", "SCP268"],
                ["Adrenaline", "Adrenaline"],
                ["Painkillers", "Painkillers"],
                ["Coin", "Coin"],
                ["ArmorLight", "ArmorLight"],
                ["ArmorCombat", "ArmorCombat"],
                ["ArmorHeavy", "ArmorHeavy"],
                ["GunRevolver", "GunRevolver"],
                ["GunAK", "GunAK"],
                ["GunShotgun", "GunShotgun"],
                ["SCP330", "SCP330"],
                ["SCP2176", "SCP2176"],
                ["SCP244a", "SCP244a"],
                ["SCP244b", "SCP244b"],
                ["SCP1853", "SCP1853"],
                ["ParticleDisruptor", "ParticleDisruptor"],
                ["GunCom45", "GunCom45"],
                ["SCP1576", "SCP1576"],
                ["Jailbird", "Jailbird"],
                ["AntiSCP207", "AntiSCP207"],
                ["GunFRMG0", "GunFRMG0"],
                ["GunA7", "GunA7"],
                ["Lantern", "Lantern"],
            ],
        }
    ],
    output: "ItemType",
    colour: 48,
}

const itemCategory = {
  type: "item_category",
  message0: "%1 item category",
  args0: [
    {
      type: "field_dropdown",
      name: "CATEGORY",
      check: "String",
      options: [
        ["None", "None"],
        ["Keycard", "Keycard"],
        ["Medical", "Medical"],
        ["Radio", "Radio"],
        ["Firearm", "Firearm"],
        ["Grenade", "Grenade"],
        ["SCPItem", "SCPItem"],
        ["MicroHID", "MicroHID"],
        ["Ammo", "Ammo"],
        ["Armor", "Armor"],
      ],
    },
  ],
  output: "ItemCategory",
  colour: 48,
};

// Create the block definitions for the JSON-only blocks.
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  roleTypeId,
  team,
  itemType,
  itemCategory,
]);
