const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


//constants for roastimages
const police = ('https://vinvgm.github.io/police.jpg')
const sorry = ('https://vinvgm.github.io/1024_161646.jpg')
const naara = ('https://vinvgm.github.io/naara.jpg')
const binladen = ('https://vinvgm.github.io/bin%20laden.jpg')
const rowdydaan = ('https://vinvgm.github.io/nanumrowdydaan.jpg')

//constants for quotes
const quote1 = ('Varuuuu aana Varadhu :rofl:')
const quote2 = ('Aaahaaan')
const quote3 = ('Naa Dubai Main roadla, Dubai kuruku sandhula, bus stand pakkathula kudyyirunthae')

//Randomisinng List 
var quotes = [quote1,  quote2, quote3]
var roastimages = [police, sorry, naara, binladen, rowdydaan]

client.once('ready', () => {
    console.log('Vadivelu is online!');
});


client.on('message', message =>{
    let taggeduser = message.mentions.users.first() 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //ping command
    if(command === 'ping'){
        message.channel.send('Hallo epidi iruka');
    }


        //roast command
        if(command === 'roast'){
        
            var chosenimage = roastimages[Math.floor(Math.random() * roastimages.length)];
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setImage(chosenimage)
            if(taggeduser === undefined ){
            newEmbed.setDescription(`Roasted by ${message.author}`);
            } else {
                newEmbed.setDescription(`${taggeduser} roasted by ${message.author}`);
            }
            if(chosenimage === police){
                newEmbed.setFooter('na yaaru nu theriyulaa');
                console.log('wtf');
            } 
            if(chosenimage === binladen)
            {
                newEmbed.setFooter('Ennada Enna');
                console.log('wtf');
            }
            if(chosenimage === sorry)
            {
                newEmbed.setFooter('sOORY bOORY kUPPATHATI lORRY');
                console.log('wtf');
            } 
            if(chosenimage === naara)
             {  
                 newEmbed.setFooter('Vanduthaan');
                 console.log('wtf');
            } 
            if(chosenimage === rowdydaan) {
            newEmbed.setFooter('Yaarnu theriyulaa');
            }    
            message.channel.send(newEmbed);    
        }
    



        //quote command
     if(command === 'quote'){
        var chosenquote = quotes[Math.floor(Math.random() * quotes.length)];
        message.channel.send(chosenquote);
        }
    
        //meme images comand in developmnet
        
    











        //help command
     if(command === 'help'){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addFields(
            {name: '-roast', value: 'Roasts the person mentioned' },
            {name: '-quote', value: 'Quotes the legendary comedian Vadivelu Sir' },
            {name: '-ping', value: 'Debug tool says Hi in Tamil' }
        )
        .setColor('#304281')
        message.channel.send(newEmbed);
    }

});


client.login('NzgwMzIyNTgyNDI2OTQzNDk5.X7taCQ.cqvJ-WGg5Qk1Vgchi8VY7tvppBE');