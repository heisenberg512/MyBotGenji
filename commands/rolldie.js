const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      

         var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("The die rolled on a " + roll);
  
    }



module.exports.help = {
  name: "roll"
}