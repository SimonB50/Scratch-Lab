import { inputs } from "blockly";

// Define the toolbox for the blockly editor
export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: 123,
          },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          inputs: {
            A: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_single",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_trig",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_round",
          fields: {
            OP: "ROUND",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_on_list",
          fields: {
            OP: "SUM",
          },
        },
        {
          kind: "block",
          type: "math_modulo",
          inputs: {
            DIVIDEND: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "block",
          type: "math_atan2",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Text",
      categorystyle: "text_category",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "text_multiline",
        },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_append",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_length",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_isEmpty",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
            FIND: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_charAt",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_getSubstring",
          inputs: {
            STRING: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_changeCase",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_trim",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_count",
          inputs: {
            SUB: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_replace",
          inputs: {
            FROM: {
              shadow: {
                type: "text",
              },
            },
            TO: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_reverse",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      categorystyle: "list_category",
      contents: [
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getIndex",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_setIndex",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getSublist",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_split",
          inputs: {
            DELIM: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: ",",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_sort",
        },
        {
          kind: "block",
          type: "lists_reverse",
        },
      ],
    },
    {
      kind: "category",
      name: "Events",
      categorystyle: "event_category",
      contents: [
        // Event tools
        {
          kind: "block",
          type: "event_continue",
        },
        {
          kind: "block",
          type: "event_cancel",
        },
        // Events
        {
          kind: "block",
          type: "event_player_joined",
        },
        {
          kind: "block",
          type: "event_player_left",
        },
        {
          kind: "block",
          type: "event_player_died",
        },
        {
          kind: "block",
          type: "event_lcz_decontamination",
        },
        {
          kind: "block",
          type: "event_lcz_decontamination_info",
        },
        {
          kind: "block",
          type: "event_map_generated",
        },
        {
          kind: "block",
          type: "event_granade_exploded",
        },
        {
          kind: "block",
          type: "event_item_spawned",
        },
        {
          kind: "block",
          type: "event_generator_activated",
        },
        {
          kind: "block",
          type: "event_player_activate_generator",
        },
        {
          kind: "block",
          type: "event_player_banned",
        },
        {
          kind: "block",
          type: "event_player_cancel_using_item",
        },
        {
          kind: "block",
          type: "event_player_change_item",
        },
        {
          kind: "block",
          type: "event_player_change_radio_range",
        },
        {
          kind: "block",
          type: "event_player_change_spectator",
        },
        {
          kind: "block",
          type: "event_player_deactivate_generator",
        },
        {
          kind: "block",
          type: "event_player_drop_ammo",
        },
        {
          kind: "block",
          type: "event_player_drop_item",
        },
        {
          kind: "block",
          type: "event_player_escape",
        },
        {
          kind: "block",
          type: "event_player_damage",
        },
        {
          kind: "block",
          type: "event_player_change_role",
        },
        {
          kind: "block",
          type: "event_player_spawn",
        },
        {
          kind: "block",
          type: "event_player_used_item",
        },
        {
          kind: "block",
          type: "event_player_use_item",
        },
        {
          kind: "block",
          type: "event_round_end",
        },
        {
          kind: "block",
          type: "event_round_restart",
        },
        {
          kind: "block",
          type: "event_round_start",
        },
        {
          kind: "block",
          type: "event_waiting_for_players",
        },
        {
          kind: "block",
          type: "event_team_respawn_select",
        },
        {
          kind: "block",
          type: "event_team_spawn",
        },
      ],
    },
    {
      kind: "category",
      name: "Enums",
      categorystyle: "enums_category",
      contents: [
        {
          kind: "block",
          type: "role_type_id",
        },
        {
          kind: "block",
          type: "team",
        },
        {
          kind: "block",
          type: "item_type",
        },
        {
          kind: "block",
          type: "item_category",
        },
      ],
    },
    {
      kind: "category",
      name: "Players",
      categorystyle: "player_category",
      contents: [
        // Getters
        {
          kind: "block",
          type: "all_players",
        },
        {
          kind: "block",
          type: "find_player",
          inputs: {
            PLAYER: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Nickname",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "find_players_by_role",
          inputs: {
            ROLE: {
              shadow: {
                type: "role_type_id",
              },
            },
          },
        },
        {
          kind: "block",
          type: "find_players_by_team",
          inputs: {
            TEAM: {
              shadow: {
                type: "team",
              },
            },
          },
        },
        // Values
        {
          kind: "block",
          type: "get_player_role",
        },
        {
          kind: "block",
          type: "get_player_username",
        },
        {
          kind: "block",
          type: "get_player_nickname",
        },
        {
          kind: "block",
          type: "get_player_custom_info",
        },
        {
          kind: "block",
          type: "get_player_user_id",
        },
        {
          kind: "block",
          type: "get_player_stamina",
        },
        {
          kind: "block",
          type: "get_player_health",
        },
        {
          kind: "block",
          type: "get_player_shield",
        },
        {
          kind: "block",
          type: "get_player_id",
        },
        {
          kind: "block",
          type: "get_player_dnt",
        },
        {
          kind: "block",
          type: "get_player_muted",
        },
        {
          kind: "block",
          type: "get_player_intercom_muted",
        },
        {
          kind: "block",
          type: "get_player_disarmed",
        },
        {
          kind: "block",
          type: "get_player_alive",
        },
        // Actions
        {
          kind: "block",
          type: "set_player_role",
          inputs: {
            ROLE: {
              shadow: {
                type: "role_type_id",
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_fake_role",
          inputs: {
            ROLE: {
              shadow: {
                type: "role_type_id",
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_nickname",
          inputs: {
            NICKNAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Nickname",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_stamina",
          inputs: {
            STAMINA: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_health",
          inputs: {
            HEALTH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_shield",
          inputs: {
            SHIELD: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_mute",
          inputs: {
            MUTED: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_intercom_mute",
          inputs: {
            MUTED: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_player_disarmed",
          inputs: {
            DISARMED: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "player_kill",
        },
        {
          kind: "block",
          type: "broadcast_message",
          inputs: {
            MESSAGE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Message",
                },
              },
            },
            DURATION: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
            CLEAR: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "send_hint",
          inputs: {
            MESSAGE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Message",
                },
              },
            },
            DURATION: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Items",
      categorystyle: "item_category",
      contents: [
        // Getters
        {
          kind: "block",
          type: "get_current_item",
        },
        {
          kind: "block",
          type: "get_all_items",
        },
        {
          kind: "block",
          type: "get_item",
          inputs: {
            POSITION: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "get_items",
          inputs: {
            ITEM_TYPE: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
        {
          kind: "block",
          type: "get_ammo",
          inputs: {
            AMMO_TYPE: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
        // Values
        {
          kind: "block",
          type: "get_item_type",
        },
        {
          kind: "block",
          type: "get_item_category",
        },
        {
          kind: "block",
          type: "get_item_serial",
        },
        {
          kind: "block",
          type: "get_item_weight",
        },
        {
          kind: "block",
          type: "get_item_owner",
        },
        // Actions
        {
          kind: "block",
          type: "give_item",
          inputs: {
            ITEM: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
        {
          kind: "block",
          type: "remove_item_by_type",
          inputs: {
            ITEM: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
        {
          kind: "block",
          type: "remove_item",
        },
        {
          kind: "block",
          type: "drop_item_by_type",
          inputs: {
            ITEM: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
        {
          kind: "block",
          type: "drop_item",
        },
        {
          kind: "block",
          type: "give_ammo",
          inputs: {
            AMOUNT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            AMMO_TYPE: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
        {
          kind: "block",
          type: "set_ammo",
          inputs: {
            AMOUNT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            AMMO_TYPE: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
        {
          kind: "block",
          type: "drop_ammo",
          inputs: {
            AMOUNT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            AMMO_TYPE: {
              shadow: {
                type: "item_type",
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Server",
      categorystyle: "server_category",
      contents: [
        // Values
        {
          kind: "block",
          type: "get_server_address",
        },
        {
          kind: "block",
          type: "get_server_port",
        },
        {
          kind: "block",
          type: "get_server_players",
        },
        {
          kind: "block",
          type: "get_server_slots",
        },
        {
          kind: "block",
          type: "get_server_reserved_slots",
        },
        {
          kind: "block",
          type: "get_server_tps",
        },
        {
          kind: "block",
          type: "get_server_friendly_fire",
        },
        // Actions
        {
          kind: "block",
          type: "set_server_friendly_fire",
          inputs: {
            VALUE: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Cassie",
      categorystyle: "cassie_category",
      contents: [
        // Values
        {
          kind: "block",
          type: "is_cassie_speaking",
        },
        {
          kind: "block",
          type: "cassie_message_duration",
          inputs: {
            CONTENT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Hello, world!",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "convert_team_to_cassie",
          inputs: {
            TEAM: {
              shadow: {
                type: "team",
              },
            },
            UNIT_NAME: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Unit name",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "convert_number_to_cassie",
          inputs: {
            NUMBER: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "validate_cassie_word",
          inputs: {
            WORD: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Word",
                },
              },
            },
          },
        },
        // Actions
        {
          kind: "block",
          type: "send_cassie_message",
          inputs: {
            CONTENT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Hello, world!",
                },
              },
            },
            HELD: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
            NOISE: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
            SUBTITLES: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "send_glitchy_cassie_message",
          inputs: {
            CONTENT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Hello, world!",
                },
              },
            },
            GLITCH_CHANCE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0.5,
                },
              },
            },
            JAM_CHANCE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0.5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "clear_cassie",
        },
      ],
    },
    {
      kind: "category",
      name: "Utils",
      categorystyle: "misc_category",
      contents: [
        {
          kind: "block",
          type: "misc_print",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Hello, world!",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "misc_call_delayed",
          inputs: {
            DELAY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0.1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Functions",
      categorystyle: "procedure_category",
      custom: "PROCEDURE",
    },
  ],
};
