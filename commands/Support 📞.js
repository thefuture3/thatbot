/*CMD
  command: Support 📞
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Send Your Question Or Problem And The Admin Will Reply Within 12 Hours *

If You Want to discontinue type /cancel
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let reply = data.message;

if (reply=="/cancel"){
Bot.runCommand("/menu");
}else{
Bot.sendMessageToChatWithId(800359026 , "New Support Ticket Made 🎫\n\nBy User @"+user.username + " `"+user.telegramid+"`\n\nQuestion / Message is \n\n"+reply+"\n\nTo reply Please Do /reply ");
Bot.sendMessage(" Message Sent To Admin ");
}
