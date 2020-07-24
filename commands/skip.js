module.exports = {
  name: "skip",
  run: async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
    if (!client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
    let queue = client.distube.skip(message);
    message.channel.send(`${client.emotes.success} | Skipped! Now playing:\n${queue.songs[0].name}`)
  }
}
