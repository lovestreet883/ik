const Discord = require('discord.js')

module.exports = { 
    run: async (message, args) =>{
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')

        const member = message.mentions.members.first();
        const role = message.mentions.roles.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à mute.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez mute le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')
        if (!member.manageable) return message.channel.send('Le bot ne peut pas mute ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie.'


        await member.roles.remove(role)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`le membre a qui en as enlevé  un role est  `+ member.user.tag )
        .setDescription(`role enlevé ${role}`)
        )
    },
    name:"unadd",
    guildOnly: true,
    help: {
        description: 'remove un role a un membre.',
        syntax: '+ {membre} + {role a remove}'
    }

}