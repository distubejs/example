module.exports = {
    name: "autoplay",
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        try {
            const autoplay = queue.toggleAutoplay()
            message.channel.send(`${client.emotes.success} | AutoPlay: \`${autoplay ? "On" : "Off"}\``)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | ${e}`)
        }
    }
}
