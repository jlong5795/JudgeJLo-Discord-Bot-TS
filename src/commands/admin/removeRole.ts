import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
    name: "Remove Role",
    description: "Manually remove a role to a user - Admin Access Only",
}

export function run({ interaction, client, handler }: SlashCommandProps) {
    // Parse the role to be removed - do we use buttons here
    // Parse the user to lose the new role
    // Remove the role to the user
    interaction.reply(`Successsfully removed role from user.`);
}

export const options: CommandOptions = {
    devOnly: false,
    userPermissions: ["Administrator", "AddReactions"],
    botPermissions: ["Administrator", "AddReactions"],
    deleted: false
}
