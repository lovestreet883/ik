const Discord = require('discord.js')

module.exports = { 
    run: async (message, args) =>{
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')

        const member = message.mentions.members.first();
        const role = message.mentions.roles.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre .')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez add un role au  propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas add de role as ce membre.')
        if (!member.manageable) return message.channel.send('Le bot ne peut pas mute ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie.'


        await member.roles.add(role)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`le membre qui as reussu un role est ` + member.user.tag )
        .setDescription(`role ressue ${role}`)
        )
    },
    name:"add",
    guildOnly: true,
    help: {
        description: ' add un role as un membre .',
        syntax: '+ {membre} + {role a add}'
    }
}