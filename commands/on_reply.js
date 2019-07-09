/*CMD
  command: on_reply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Your Reply
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("replyid");

Bot.sendMessageToChatWithId(id, "Reply From Admin \n\n"+data.message);
Bot.sendMessage(" Reply Sent");
