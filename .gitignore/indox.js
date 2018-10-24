const Discord = require ('Discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const moment = require('moment')
const YTDL = require("ytdl-core")
const economy = require('discord-eco')
let prefix = '$'
let cooldown = new Set()

let avert = JSON.parse(fs.readFileSync('avert.json', 'utf8'))
bot.login(NDQyNjIyNDczNDYxMDM5MTE0.DrIltQ.BupVOUvZRnlUgiBL32efLJwnINw)
    console.log( "ça marche !")
bot.on('ready', function (){
    bot.user.setActivity('Hypology 53 - Rise of Botology').catch(console.error)
})
bot.on('message', message => {
    if(message.channel.type === "dm") return
    if (message.content.includes("$userinfo @everyone")) return
    let sender = message.author
    let msg = message.content.toUpperCase()
    if (!avert[sender.id + message.guild.id]) avert[sender.id + message.guild.id] = {}
    if (!avert[sender.id + message.guild.id].nombre) avert[sender.id + message.guild.id].nombre=0
    if (message.content.startsWith(prefix + "roll")){
        var roll = Math.floor(Math.random() * 6 + 1)
    message.channel.send(roll)
    }
    if (message.content.startsWith(prefix + "choose")){
        let args = message.content.split(" ").slice(1)
        let tte = args.join(" ")
        if(!tte){
        return message.reply("Vous n'avez rien mis.")}
        let reponse = (Math.floor(Math.random() * args.length))
        if (args[reponse] === "") return
        message.channel.send(args[reponse])
    }
    if (message.content.includes("hypologie") || message.content.includes("logie") || message.content.includes("petit clown")|| message.content.includes("minecraft Steve") || message.content.includes("peppa pig") || message.content.includes("grand clown") || message.content.includes("clown") || message.content.includes("🤡")|| message.content.includes("Rgox84KE7iY")){
        message.delete()
        avert[sender.id + message.guild.id].nombre += 1
        if (avert[sender.id + message.guild.id].nombre == 5){
            sender.sendMessage("Vous avez utilisé plusieurs mots interdits, attention !")
            avert[sender.id + message.guild.id].nombre = 0
        }        
        fs.writeFile('avert.json', JSON.stringify(avert),(err) =>{
            if (err) console.error(err)
        })
    }
    if ( message.content === prefix+"lesquen"){
        if (cooldown.has()){
            message.delete()
            return
        }
        var image = (Math.floor(Math.random() * 44 + 1))
        message.channel.send({files:["lesquen/lesquen"+image+".png"]})
        cooldown.add()
        setTimeout(() => {
            cooldown.delete()
        }, 8000)
    }
    if (message.content === prefix + "aide"){
        var help = new Discord.RichEmbed()
        .setTitle("$aide")
        .addField("Commandes","$choose\n" + "$roll\n" + "$lesquen\n" + "$purge\n" + "$userinfo\n" + "$serverinfo\n" , true)
        .setColor(0x200ef5)
        message.channel.send(help);
       } 
    if (message.content.startsWith( prefix + "purge")){
        let args = message.content.split(" ").slice(1)
        let tte = args.join(" ")
        if(!tte){
            return message.reply("Vous n'avez rien mis.")
        }
        if (isNaN(args[0])){
            return message.reply("Un nombre.")
        }
        if (args[0] > 100){
            return message.reply("Un nombre en dessous de 100.")
        }
        if (message.member.hasPermission("ADMINISTRATOR")){   
            if (args[0] ===  "") return message.reply("Invalide.")
        message.channel.bulkDelete(args[0])
        message.reply(args[0])
        }else{
            return message.reply("Vous n'avez pas les permissions.")
        }
    }

    if(message.content.startsWith ( prefix + "userinfo")){
        let args = message.content.split(" ").slice(1)
        let tte = args.join(" ")
        if(!tte){
            return
        }
        let gens = message.mentions.members.first()
        if (gens === undefined) return
        if ( message.mentions.users.first() === undefined) return
        var firstMentioned = message.mentions.members.first()
        var firstMentionedU = message.mentions.users.first()
        let sender = message.author 
        var userCreated = firstMentionedU.createdAt.toString().split(' ')
        var userJoined = firstMentioned.joinedAt.toString().split(' ')
        
        var userinfo = new Discord.RichEmbed()
        .setTitle( firstMentionedU.tag +" "  )
        .setThumbnail(firstMentionedU.avatarURL)
        .addField("ID: ", firstMentioned.id, true)
        .addField("Compte crée: ", userCreated[1] +" "+ userCreated[2]+ " " +userCreated[3], true)
        .addField("A rejoint: ", userJoined[1] + " "+ userJoined[2] + " "+userJoined[3], true)
        .addField("Role max: ", firstMentioned.highestRole, true)
            message.channel.send(userinfo)    
    }
    if(message.content === prefix+"serverinfo"){
        var userCreatedd = message.guild.createdAt.toString().split(' ')
        var serverinfo = new Discord.RichEmbed()
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .addField("Créer le:", userCreatedd[1] + " "+ userCreatedd[2] + " "+userCreatedd[3], true)
        .addField("Nombre de membres:", message.guild.memberCount, true)
        .addField("Localisation:", message.guild.region, true)
        .addField("Roles:", message.guild.roles.size, true)
        .addField("Channels:", message.guild.channels.size, true)
        .addField("Owner:", message.guild.owner, true)
        message.channel.send(serverinfo) 
    }
    
})
