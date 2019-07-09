/*CMD
  command: on_address
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Send Your BTC Address (Make sure to send correct BTC ONLY ADDRESS) 
  keyboard: 
  aliases: 
CMD*/

let reply = data.message;

User.setProperty("walletBtc" , reply, "string");

Bot.sendMessage(" Your BTC Address Set To \n*"+reply+"*");
