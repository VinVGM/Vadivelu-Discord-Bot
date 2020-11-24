const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Vadivelu is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('@HorridBean#9884 epidi iruka');
    }
});

client.login('NzgwMzIyNTgyNDI2OTQzNDk5.X7taCQ.uwtBi1cJhvPxoRoj5Azst-K-f_I');