const Discord = require("discord.js");

module.exports = {
    run: (message, args, client) => {
        let avatar = message.mentions.users.size ? 
        member =  message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('voici la pp demander : ' ) 
            .setImage(avatar))
    },
    name: "pic",
    guildOnly: true,
    help: {
        description: 'Cette commande permet d\'avoir l\'avatar d\'un user .',
        syntax: ' + {mention de la perssone dans vous vouler  avoir l\'avatar }'
    }
}