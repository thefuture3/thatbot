/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: back 🔙
CMD*/

//Bot.sendMessage(inspect(options)); 


let res = Libs.ResourcesLib.userRes("BTC");
Bot.sendKeyboard("✨ Balance : "+res.value().toFixed(8)+" BTC\n💰 Invest 💰,💹 Withdraw 💹 ,\n ⚙️ Settings ⚙️, Info ⁉,\nSupport 📞,Referral 💌","*🏘 Main Menu *\n Hello and Welcome to Fund Growth Bot, We use a Team of dedicated trading bots working to Scalp Trade in all market conditions for daily growth of funds. Take a look around and invest in Fund Growth Bot. 😊💸 Make sure to also join our Payments Channel As Well! @FundGrowthBotChat");
