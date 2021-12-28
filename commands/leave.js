module.exports = {
    name: "leave",
    run: async (client, message, args) => {
        client.distube.voices.leave(message)
    }
}
