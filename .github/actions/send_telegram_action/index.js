const core = require("@actions/core");
const TelegramBot = require('node-telegram-bot-api');
const github = require("@actions/github") 

const commit = github.context.payload;
const token = core.getInput("tokenFather");
const bot = new TelegramBot(token, {polling: false});
var chatID = core.getInput("chatID");
const name = core.getInput("name");




try {
    bot.sendMessage(chatID,`Workflow executed. Commit: ${commit.head_commit.author.name}\nAvatar: ${commit.sender.avatar_url}\nURL: ${commit.head_commit.url}. Greetings, ${name}:\n\n`);
  
  } catch (error) {
    core.setFailed(error.message);
  }
  
  core.setOutput("mensage", "Message sended.");