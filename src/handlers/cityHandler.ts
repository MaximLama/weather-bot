import TelegramBot from "node-telegram-bot-api";
import { getWeather } from "../api/getWeather/getWeather";
import bot from "../bot";

export async function cityHandler(
  msg: TelegramBot.Message,
  match: RegExpExecArray | null
) {
  if (msg.text === "/start") return;

  const {
    chat: { id },
  } = msg;

  const source = match?.[0];

  if (source) {
    try {
      const data = await getWeather(source);
      const message =
        `<strong>Погода - ${data.name}</strong>\n` +
        `======================================\n` +
        `\n` +
        `<i>Погода</i>: ${data.weather[0].description}\n` +
        `<i>Температура</i>: ${data.main.temp}°C`;
      bot.sendMessage(id, message, {
        parse_mode: "HTML",
      });
      console.log(data);
    } catch (e) {
      const message =
        "Не удалось обнаружить город. Попробуйте указать другой населенный пункт поблизости.";
      bot.sendMessage(id, message);
    }
  }
}
