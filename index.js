const TelegramBot = require('node-telegram-bot-api');

// Reemplaza este token con el tuyo real
const token = '7771234555:AAHiQY8MtKVxu30VuQdxbNwmyna6E1UnET8';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, '👋 ¡Bienvenido a MinSpaceBot! Presiona el botón de abajo para abrir la mini app.', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🚀 Abrir Mini App',
            web_app: { url: 'https://minspacebot.onrender.com' }
          }
        ]
      ]
    }
  });
});
