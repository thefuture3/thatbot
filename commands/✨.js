/*CMD
  command: ✨
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options)); 
let user = User.getProperty("status");
if (user=="member" | user =="admin" | user=="creator"){
let BTC = Libs.ResourcesLib.userRes("BTC");
Bot.sendKeyboard("✨ Balance : "+BTC.value().toFixed(8)+" BTC\n💰 Invest 💰,💹 Withdraw 💹,\n ⚙️ Settings ⚙️, Info ⁉,\nSupport 📞,Referral 💌","*✨ Balance : *"+BTC.value().toFixed(8)+" BTC ");
}else{
Bot.runCommand('/start');
}
