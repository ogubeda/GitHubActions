const core = require("@actions/core");
const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput("tokenFather");
const bot = new TelegramBot(token, {polling: false});
var chatID = core.getInput("chatID");
const name = core.getInput("name");



try {
    bot.sendMessage(chatID,`Workflow executed. Greetings ,${name}:\n\n`);
  
  } catch (error) {
    core.setFailed(error.message);
  }
  
  core.setOutput("mensage", "Message sended.");