/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Keys Set-Up
  keyboard: 
  aliases: 
CMD*/

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("843a323dc6fE23eB821be4173d12aBE3B481433886B4A88124aa45d5ffccfA75");
Libs.CoinPayments.setPublicKey('65a19f050366ed046e81a33d5dec61e1b1227c1d3274fa9177f04a10f9a09d93');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('ynpdJ6tHXczzxlhZUy8vS4IpNEpAPnko-GwVJgtB');
