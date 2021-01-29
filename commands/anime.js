const Discord = require('discord.js'),
    replies = ['bungo stray dogs  ', 'darling in the fraxx', 'Dr stone ', 'Beastars','dragon ball z','Great Pretender','L\'Attaque des Titans','Kakegurui','The Seven Deadly Sins ','My Hero Academia','Sword Art Online','Dororo','Kengan Ashura','Tokyo Ghoul','Hunter × Hunter','One-Punch Man','Overlord','Magi: Adventure of Sinbad','No Game No Life Specials','Bleach','Food Wars !','Devilman Crybaby','Blue Exorcist']
 
module.exports = {
    run: (message) => {
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: 'anime',
    guildOnly: true,
    help: {
        description: ' donnne un nom d\'anime au hasard .',
        syntax: ''
    }
}