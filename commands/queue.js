module.exports = {
  name: 'queue',
  aliases: ['q'],
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
    const q = queue.songs
      .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
      .join('\n')
    //message.channel.send(`${client.emotes.queue} | **Server Queue**\n${q}`)
	var str = `${client.emotes.queue} | **Server Queue**\n${q}`;
	var partsArr = str.match(/[\s\S]{1,1900}/g) || [];
	if (partsArr.length > 1) {
		partsArr.forEach((partsArr, i) =>    message.channel.send(`${partsArr} \nPart ${i + 1} / ${partsArr.length}`));
	}
	else {
	message.channel.send(`${client.emotes.queue} | **Server Queue**\n${q}`);
	}
			
		

	
  }
}
