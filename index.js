require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`EH SALUT ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === '>ping') {
    msg.reply('prout')
  }
})

client.login(process.env.BOT_TOKEN)