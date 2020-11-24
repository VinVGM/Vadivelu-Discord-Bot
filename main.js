const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const police = ('https://vinvgm.github.io/police.jpg')
const sorry = ('https://vinvgm.github.io/1024_161646.jpg')
const naara = ('https://vinvgm.github.io/naara.jpg')
const binladen = ('https://vinvgm.github.io/bin%20laden.jpg')
const rowdydaan = ('https://vinvgm.github.io/nanumrowdydaan.jpg')

var roastimages = [police, sorry, naara, binladen, rowdydaan]

client.once('ready', () => {
    console.log('Vadivelu is online!');
});


client.on('message', message =>{
    let taggeduser = message.mentions.users.first() 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        message.channel.send('Hallo epidi iruka');
    }
    if(command === 'roast'){
        
        var chosenimage = roastimages[Math.floor(Math.random() * roastimages.length)];
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setImage(chosenimage)
            .setDescription(`${taggeduser} roasted by ${message.author}`)
            
            if(chosenimage = police){
                newEmbed.setFooter('na yaaru nu theriyulaa')
            } 
            if(chosenimage = binladen)
            {
                newEmbed.setFooter('Ennada Enna')
            }
            if(chosenimage = sorry)
            {
                newEmbed.setFooter('sOORY bOORY kUPPATHATI lORRY')
            } 
            if(chosenimage = naara)
             {  
                 newEmbed.setFooter('Vanduthaan') 
            } 
            if(chosenimage = rowdydaan)
               { newEmbed.setFooter('Yaarnu theriyulaa')
            };

            
            message.channel.send(newEmbed);    
        }
});

client.login('lmao tryna hack?');