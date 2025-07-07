const TelegramBot = require('node-telegram-bot-api');
const token = '7771234555:AAHiQY8MtKVxu30VuQdxbNwmyna6E1UnET8'; // Tu token real
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🤖 ¡Bienvenido al bot de minería!');
});
