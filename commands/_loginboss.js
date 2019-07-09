/*CMD
  command: /loginboss
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = "growurbtc";

if (user.username==admin){
Bot.sendKeyboard(" Get Funds 💰 , Broadcast 📣 , \nSend Funds ➕ , Back 🔙","Welcome Admin");
}else{
Bot.sendMessage("Not The Admin");
}
