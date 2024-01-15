"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: "hello",
    description: "Greetings!",
};
function run({ interaction, client, handler }) {
    interaction.reply(`Hello, ${interaction.user.username}! I hope that you're having a wonderful day!`);
}
exports.run = run;
exports.options = {
    // devOnly: true,
    // userPermissions: ["Administrator", "AddReactions"],
    botPermissions: ["Administrator", "AddReactions"],
    deleted: false
};
