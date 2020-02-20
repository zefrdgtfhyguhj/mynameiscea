const Discord = require ('discord.js')
const bot = new Discord.Client()
const fs = require('fs')

let prefix = '$'
let cooldown = new Set()
let son = new Set()

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
    if (message.content === prefix + "aurevoir" ){
        if (son.has()){
            message.delete()
            return
        }
        var nom = message.content
        message.channel.bulkDelete(1)
        const vocal = message.member.voiceChannel
        if(!vocal)return
        son.add()
        setTimeout(() => {
            son.delete()
        }, 5000)
    vocal.join()
    .then(connection => {
        const dispatcher = connection.playFile('./'+ nom+'.wav')
    
    .on('end', () => {
        vocal.leave()
    })}
    )}    
    
})
