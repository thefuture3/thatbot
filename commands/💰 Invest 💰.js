/*CMD
  command: 💰 Invest 💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "BTC",
  label: "User @"+user.username,
  onSuccess: "/onWalletCreate",
  //onIPN: "/onPermanentWalletIPN",
  onIncome: "/onincome"
});



