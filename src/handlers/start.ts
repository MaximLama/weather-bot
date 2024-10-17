import TelegramBot from "node-telegram-bot-api";
import bot from "../bot";

export function start(msg: TelegramBot.Message) {
  const {
    chat: { id },
  } = msg;

  bot.sendMessage(
    id,
    "Добро пожаловать! Здесь Вы можете узнать данные о погоде в вашем городе. Введите название города, чтобы узнать текущую погоду."
  );
}
