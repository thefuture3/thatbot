/*CMD
  command: /testnoturnedon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

options = {
  // onIPN: "/onPermanentWalletIPN",  // if you need IPN also
  amount: 0.5,
  onIncome: "/onincome",
  
  // not necessary options
  // you can pass amount
  //txn_id: YOUR_TXN_ID
}

Libs.CoinPayments.callTestPermanentWalletIncome(options);
