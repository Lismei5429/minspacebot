const TelegramBot = require('node-telegram-bot-api');
const token = '7771234555:AAHiQY8MtKVxu30VuQdxbNwmyna6E1UnET8'; // Tu token real
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Enviar mensaje de bienvenida
  bot.sendMessage(chatId, '👋 ¡Bienvenido a *MiniSpaceBot*! \n\nPulsa el botón de abajo para abrir tu mini app 🧠🚀', {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🌐 Abrir Mini App',
            web_app: { url: ' https://minspacebot.onrender.com' } // ← Reemplaza con tu enlace real
          }
        ]
      ]
    }
  });
});
