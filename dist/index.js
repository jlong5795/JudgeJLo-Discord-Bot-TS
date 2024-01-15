"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const discord_js_1 = require("discord.js");
const commandkit_1 = require("commandkit");
const client = new discord_js_1.Client({
    intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"]
});
new commandkit_1.CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
    // validationsPath: `${__dirname}/validations`,
    devGuildIds: [String(process.env.DEV_SERVER)],
    devRoleIds: ["629707796723793939"],
    bulkRegister: false
});
client.login(process.env.BOT_TOKEN);
