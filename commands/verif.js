const Discord = require('discord.js')
reactions = ['🧐']
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
            .setTitle('Vérification : ',true)
            .setColor('RANDOM')
            .addField('coche la réaction et débloque tout les salon', true)
            .addField('invite tes ami','https://discord.gg/Ck9UZKMQ', true)
            .setThumbnail("https://cdn.discordapp.com/attachments/803716816072343592/804007589603967016/792888425077932062.gif")
            .setImage('https://cdn.discordapp.com/attachments/800039569655070725/800187025718116352/Newsletter3.png')
            .setFooter('made by kazou')
            .setTimestamp())
            message.delete();

    },
    name: 'v'
}