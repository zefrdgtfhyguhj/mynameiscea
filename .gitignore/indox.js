const Discord = require ('discord.js')
const bot = new Discord.Client()
const fs = require('fs')

let prefix = '$'
let cooldown = new Set()

let avert = JSON.parse(fs.readFileSync('avert.json', 'utf8'))
bot.login(process.env.TOKEN)
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
    if (message.content.includes("hypologie") || message.content.includes("logie") || message.content.includes("petit clown")|| message.content.includes("minecraft Steve") || message.content.includes("peppa pig") || message.content.includes("grand clown") || message.content.includes("clown") || message.content.includes("🤡")|| message.content.includes("Rgox84KE7iY")|| message.content.includes("https://cdn.discordapp.com/attachments/283656511501238272/511963274850336771/unknown.png")){
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
        var replys = ["https://cdn.discordapp.com/attachments/505094448963911695/505467243170234378/lesquen1.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467249746903055/lesquen2.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467272953856000/lesquen3.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467280344219648/lesquen4.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467300493787136/lesquen5.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467309729513502/lesquen6.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467346211831818/lesquen7.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467355086716949/lesquen8.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467362812887090/lesquen9.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467369263595540/lesquen10.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467378906169364/lesquen11.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467386011320321/lesquen12.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467393611661313/lesquen13.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467399772962827/lesquen14.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467410954846248/lesquen15.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467432031223808/lesquen17.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467415346413570/lesquen16.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467455708200987/lesquen18.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467483453390848/lesquen20.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467487664472091/lesquen19.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467493611995157/lesquen21.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467500369149962/lesquen22.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467505716887553/lesquen23.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467511911874560/lesquen24.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467519323340800/lesquen25.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467525077925890/lesquen26.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467530358554640/lesquen27.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467538746900520/lesquen28.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467543482531851/lesquen29.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467551615287296/lesquen30.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467556480548864/lesquen31.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467561505193984/lesquen32.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467565905149982/lesquen33.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467581013032980/lesquen35.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467590030786560/lesquen36.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467591935131648/lesquen34.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467595227398154/lesquen37.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467599572697101/lesquen38.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467605742518282/lesquen39.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467611539177492/lesquen40.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467624134803456/lesquen41.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467624897904661/lesquen42.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467625980166145/lesquen43.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467634398003220/lesquen44.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467650944532493/lesquen45.png",
        "https://cdn.discordapp.com/attachments/505094448963911695/505467664253190164/lesquen46.png",       
    ]
        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var embed = new Discord.RichEmbed()
        .setTitle("Lesquen")
        .setImage(reponse)
        .setColor(0x200ef5)
    message.channel.send(embed)
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
