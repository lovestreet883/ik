const fs = require('fs');
const Discord = require('discord.js')
 
module.exports = {
    run: (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon est déjà vérrouillé.')
        client.db.lockedChannels.push(channel.id)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('salon vérouillier avec sucsés : ')
        .setFooter('salon lock : ' + channel  ))
    },
    name: 'lock',
    guildOnly: true,
    help: {
        description: 'permet de lock des salon ',
        syntax: '  ( il faut etre dans le salon que vous vouler lock )  '
    }
}