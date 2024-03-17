import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
    name: "countdown",
    description: "Countdown to Sky Vaults Launch Date",
}

const countdown = () => { 
    const launchDate = new Date("2024-04-07");
    const currentDate = new Date();
    const timeDiff = launchDate.getTime() - currentDate.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days;
}

export function run({ interaction, client, handler }: SlashCommandProps) {
    interaction.reply(`Sky Vaults will be launching in ${countdown()} days!`);
}

export const options: CommandOptions = {
    deleted: false
};
