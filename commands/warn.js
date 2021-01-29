const fs = require('fs');
const Discord = require('discord.js')
 
module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("<a:794582731711447079:803916852715061288> Erreur :")
        .addField("Vous n\'avez pas la permission d\'utiliser cette commande."))
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("<a:794582731711447079:803916852715061288> Erreur :")
        .addField("Veuillez mentionner le membre à warn."))
        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("<a:794582731711447079:803916852715061288> Erreur :")
        .addField("Vous ne pouvez pas warn le propriétaire du serveur."))
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas warn ce membre.')
        const reason = args.slice(1).join(' ')
        if (!reason) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("<a:794582731711447079:803916852715061288> Erreur :")
        .addField("Veuillez indiquer une raison."))
        if (!client.db.warns[member.id]) client.db.warns[member.id] = []
        client.db.warns[member.id].unshift({
            reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(new Discord.MessageEmbed()
        .setTitle( `${member}   est warn avec sucsés `)
        .setDescription( `${member} a été warn pour : ${reason} ` ))
    },
    name: 'warn',
    guildOnly: true,
    help: {
        description: 'permet de warn un utilisateur',
        syntax: '[prefi][nom de la commande] [utilisateur] [reason]'
    }
}
