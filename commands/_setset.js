/*CMD
  command: /setset
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("A4658923e60383806c1D156a355A6fe8d369143da15d47cC5ec3A027b6c4Fc38");
Libs.CoinPayments.setPublicKey('fb14713007c8efaccf635d9ba4176f4bac84be291e286c40c9fdf59ef2db9727');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('m32wGPCDpIXIIErcLp9LGl5eoTAxGmjUpcV4y6Hs');

Bot.sendMessage("setup done");
