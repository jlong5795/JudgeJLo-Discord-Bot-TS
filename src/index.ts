import "dotenv/config";
import { Client } from "discord.js";
import { CommandKit } from "commandkit";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"]
});

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
    // validationsPath: `${__dirname}/validations`,
    devGuildIds: [String(process.env.DEV_SERVER)],
    devRoleIds: ["629707796723793939"],
    bulkRegister: true
})

client.login(process.env.BOT_TOKEN);