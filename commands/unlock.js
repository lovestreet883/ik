const fs = require('fs');
const Discord = require('discord.js')
 
module.exports = {
    run: (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (!client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon n\'est pas vérrouillé.')
        client.db.lockedChannels.splice(client.db.lockedChannels.indexOf(channel.id), 1)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('salon Dévérouillier avec sucsés : ')
        .setFooter('salon Unlock : ' + channel  ))
    },
    name: 'unlock',
    guildOnly: true,
    help: {
        description: 'permet de unlock des salon ',
        syntax: '  ( il faut etre dans le salon que vous vouler unlock )  '
    }
}