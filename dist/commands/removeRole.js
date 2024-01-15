"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: "Remove Role",
    description: "Manually remove a role to a user - Admin Access Only",
};
function run({ interaction, client, handler }) {
    // Parse the role to be removed - do we use buttons here
    // Parse the user to lose the new role
    // Remove the role to the user
    interaction.reply(`Successsfully removed role from user.`);
}
exports.run = run;
exports.options = {
    devOnly: false,
    userPermissions: ["Administrator", "AddReactions"],
    botPermissions: ["Administrator", "AddReactions"],
    deleted: false
};
