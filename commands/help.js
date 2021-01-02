const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["h", "cmd", "command"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
            .setTimestamp()
        message.channel.send(embed)
    }
}
