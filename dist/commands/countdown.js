"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: "countdown",
    description: "Countdown to Sky Vaults Launch Date",
};
const countdown = () => {
    const launchDate = new Date("2024-04-07");
    const currentDate = new Date();
    const timeDiff = launchDate.getTime() - currentDate.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days;
};
function run({ interaction, client, handler }) {
    interaction.reply(`Sky Vaults will be launching in ${countdown()} days!`);
}
exports.run = run;
exports.options = {
    deleted: false
};
