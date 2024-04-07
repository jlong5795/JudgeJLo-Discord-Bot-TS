"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const duration_1 = __importDefault(require("dayjs/plugin/duration"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(duration_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(utc_1.default);
exports.data = {
    name: "countdown",
    description: "Countdown to Sky Vaults Launch Date",
};
const countdown = () => {
    const launchDate = dayjs_1.default.tz("2024-04-07T18:00:00", "America/Chicago");
    const currentDate = (0, dayjs_1.default)().tz("America/Chicago");
    const timeDiff = dayjs_1.default.duration(launchDate.diff(currentDate));
    const days = timeDiff.days();
    const hours = timeDiff.hours();
    const minutes = timeDiff.minutes();
    const seconds = timeDiff.seconds();
    if (hours > 0 && minutes > 0 && seconds > 0) {
        return `The Sky Vaults server will be launching in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds! If you're not there, what are you doing with your life?`;
    }
    return `The Sky Vaults server is LIVE! Join now at amp.esconomics.com:25567!`;
};
function run({ interaction, client, handler }) {
    interaction.reply(countdown());
}
exports.run = run;
exports.options = {
    deleted: false
};
