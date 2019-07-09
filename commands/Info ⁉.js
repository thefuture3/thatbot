/*CMD
  command: Info ⁉
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let total = Bot.getProperty("total");
var st = data.statistics;
let withdrawn = Bot.getProperty("totalWithdrawn");
let res = Libs.ResourcesLib.userRes("daysOnline");
Bot.sendMessage("*Fund Growth Bot Info 💹* \n\n*Total 👥 User's 👥 : *\n"+st.user_chats_count+" User's\n\n*Days 📆 Online 📆 : *\n"+res.value()+" Days\n\nChat Group 💬 : @FundGrowthBotChat\n\nPayment Group 📮 : [@FundGrowthPayments]");
