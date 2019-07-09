/*CMD
  command: /onWalletCreate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result;
Bot.sendMessage("💰💯 Welcome! Here you can start a new investment!\n\n💵 We currently offer a single Investment plan, this plan is secure and allows a steady growth for all members while our A.I Bots Scalp Trade the Market in all conditions!\n\n➡ Our plan starts from 0.001 BTC\n\n⏱ Profit will be credited 20% every 24 hours, for 10 days: 20% daily 200% after 10 days!");
Bot.sendMessage("⚠ If you send less than 0.001 BTC, your deposit will be ignored, for special requirements of lower investments please contact admin first!\n\n✅ Send the amount you want to invest to the following address:");
Bot.sendMessage("`"+wallet.address+"`");
// You can save wallet
User.setProperty("wallet", wallet.address, "string");
User.setProperty("label", wallet.label,"string");
