const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
client.user.setGame(`دنيا صعبه ادري اني`, "https://twitch.tv/Humm")
client.user.setStatus('dnd')
})


client.on('guildMemberAdd', member => {
    member.sendMessage(`Welcome \n بوتنا العربي الجديد بخواص خورافيه \n ادخل وجرب بنفسك \n https://discord.gg/M2F5Jya \n الدعوه خاصه لك [${member}]`);
});


client.on('guildMemberRemove', member => {
    member.sendMessage(`GoodBye \n بوتنا العربي الجديد بخواص خورافيه \n ادخل وجرب بنفسك \n https://discord.gg/M2F5Jya \n الدعوه خاصه لك [${member}]`);
});
