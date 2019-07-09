/*CMD
  command: Joined 🚀
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid;
Api.getChatMember({
chat_id:"@fundgrowthbotchat", user_id: id, on_result :"/check"})
//Bot.sendMessage(inspect(options));
