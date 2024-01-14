import type { Client } from "discord.js";
import type { CommandKit } from "commandkit";

export default function (client: Client) {
    console.log(`✅ ${client.user?.username} is online ✅`);
}