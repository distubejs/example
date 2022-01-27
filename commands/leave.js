module.exports = {
  name: 'leave',
  run: async (client, message) => {
    client.distube.voices.leave(message)
  }
}
