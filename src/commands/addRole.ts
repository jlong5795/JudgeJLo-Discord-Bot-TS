import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
    name: "add-role",
    description: "Manually add a role to a user - Admin Access Only",
}

export function run({ interaction, client, handler }: SlashCommandProps) {
    // Parse the role to be added - do we use buttons here
    // Parse the user to receive the new role
    // Add the role to the user
    interaction.reply(`Successsfully added role to user.`);
}

export const options: CommandOptions = {
    devOnly: true,
    userPermissions: ["Administrator", "AddReactions"],
    botPermissions: ["Administrator", "AddReactions"],
    deleted: false
}
