module.exports = {
  name: 'filter',
  aliases: ['filters'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    if (args[0] === 'off' && queue.filters?.length) queue.setFilter(false)
    else if (Object.keys(client.distube.filters).includes(args[0])) queue.setFilter(args[0])
    else if (args[0]) return message.channel.send(`${client.emotes.error} | Not a valid filter`)
    message.channel.send(`Current Queue Filter: \`${queue.filters.join(', ') || 'Off'}\``)
  }
}
