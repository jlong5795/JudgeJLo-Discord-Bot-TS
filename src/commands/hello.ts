import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
    name: "hello",
    description: "Greetings!",
}

export function run({ interaction, client, handler }: SlashCommandProps) {
    interaction.reply(`Hello, ${interaction.user.username}! I hope that you're having a wonderful day!`);
}

export const options: CommandOptions = {
    // devOnly: true,
    // userPermissions: ["Administrator", "AddReactions"],
    botPermissions: ["Administrator", "AddReactions"],
    deleted: false
}
