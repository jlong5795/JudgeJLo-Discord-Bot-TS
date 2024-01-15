"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: "Add Role",
    description: "Manually add a role to a user - Admin Access Only",
};
function run({ interaction, client, handler }) {
    // Parse the role to be added - do we use buttons here
    // Parse the user to receive the new role
    // Add the role to the user
    interaction.reply(`Successsfully added role to user.`);
}
exports.run = run;
exports.options = {
    devOnly: true,
    userPermissions: ["Administrator", "AddReactions"],
    botPermissions: ["Administrator", "AddReactions"],
    deleted: false
};
