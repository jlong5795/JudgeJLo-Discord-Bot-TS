import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(duration);
dayjs.extend(timezone);
dayjs.extend(utc);

export const data: CommandData = {
    name: "countdown",
    description: "Countdown to Sky Vaults Launch Date",
}

const countdown = () => { 
    const launchDate = dayjs.tz("2024-04-07T18:00:00", "America/Chicago");
    const currentDate = dayjs().tz("America/Chicago");
    const timeDiff = dayjs.duration(launchDate.diff(currentDate));
    const days = timeDiff.days();
    const hours = timeDiff.hours();
    const minutes = timeDiff.minutes();
    const seconds = timeDiff.seconds();

    if (hours > 0 && minutes > 0 && seconds > 0) {
        return `The Sky Vaults server will be launching in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds! If you're not there, what are you doing with your life?`;
    }

    return `The Sky Vaults server is LIVE! Join now at amp.esconomics.com:25567!`
}

export function run({ interaction, client, handler }: SlashCommandProps) {
    interaction.reply(countdown());
}

export const options: CommandOptions = {
    deleted: false
};
