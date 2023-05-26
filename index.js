import TelegramBot from "node-telegram-bot-api";
import { readFile } from "fs/promises";

async function getRandomTip() {
  const data = await readFile("./data.json");
  const tips = JSON.parse(data);
  const n = Math.floor(Math.random() * tips.length);
  return tips[n];
}

async function main() {
  const tip = await getRandomTip();
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, tip);
  console.log(tip);
}

main();
