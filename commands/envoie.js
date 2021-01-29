const Discord = require('discord.js')

 
module.exports = {
    run: message => {
       const member =  message.mentions.users.first()
        if (!member) return message.channel.send('Veuillez mentionner le owner du server et vous resevré des information tres bientot .')
        message.member.send(new Discord.MessageEmbed()
        .setTitle("Demande de partenaria : ")
        .setDescription(`de la part de ` + message.author.tag ))
            message.delete();

    },
    name: 'partenaire',
    guildOnly: true,
    help: {
        description: 'permet de envoyer une demande de partenaria .',
        syntax: '+ { un owner du server pour la demande }'
    }

}