module.exports = {
    name: "resume",
    aliases: ["resume", "unpause"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        client.distube.resume(message)
        message.channel.send("Resumed the song for you :)")
    }
}
