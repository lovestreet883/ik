const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
            .setTitle('Verification : ')
            .setColor('RANDOM')
            .addField(' pour le role homme = 😇', true)
            .addField('pour le role femme = 😈', true)
            .setAuthor('kazouya#1000  ', 'https://cdn.discordapp.com/attachments/800039569655070725/800186290175606804/standard.gif')
            .setImage('https://cdn.discordapp.com/attachments/800039568384327701/800201351493713960/maxresdefault.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/800039569655070725/800186524620292116/static_1.png')
            .setFooter('Mon bot perso **bonjour**', 'https://cdn.discordapp.com/attachments/800039569655070725/800186290175606804/standard.gif')
            .setTimestamp())
            message.delete();

    },
    name: 'auto'
}