const Discord = require('discord.js')
module.exports = {
    name: "filter",
    aliases: ["filters"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
 let queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if(!args[0]) return message.channel.send(`${client.emotes.error} | No Filter was provided`)
         if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, `flanger`, `gate`, `haas`, `reverse`, `surround`, `mcompand`, `phaser`, `tremolo`, `earwax`, `off`].includes(command)){
         let filter = client.distube.setFilter(message, args[0])
            const embed = new Discord.MessageEmbed()
                .setTitle(`Current Queue Filter - ${(filter || "Off")}`)
                .setColor("GREEN")
            message.channel.send(embed)
            }else {
            return message.channel.send(`${client.emotes.error} | Not a valid filter`)
            }
    }
}
