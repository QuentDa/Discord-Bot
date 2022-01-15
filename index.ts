import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
})

client.on('ready', () => {
    console.log('the bot is ready')

    const guildId = '931600820858929194'
    const guild = client.guilds.cache.get(guildId)

    let commands

    if  (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }


    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: ['931600820858929194'],
        botOwners: ['90093061635309568'],
    })
})


client.login(process.env.TOKEN)