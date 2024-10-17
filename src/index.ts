import * as dotenv from "dotenv";
dotenv.config();

import bot from "./bot";
import { start } from "./handlers/start";
import { cityHandler } from "./handlers/cityHandler";
import { commands } from "./commands";

// command settings
bot.setMyCommands(commands);
// /start
bot.onText(/\/start/, start);
// city input handler
bot.onText(/.*/, cityHandler);
