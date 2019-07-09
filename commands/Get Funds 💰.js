/*CMD
  command: Get Funds 💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = "growurbtc";

if (user.username==admin){

let res = Libs.ResourcesLib.userRes("BTC");
res.add(10);
Bot.sendMessage(" Success ");
}else{
Bot.sendMessage("The Admin 😒");
}
