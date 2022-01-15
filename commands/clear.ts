import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Deletes multiple messages at once',

    permissions: ['ADMINISTRATOR'],
    

    maxArgs: 1,
    expectedArgs: '[amount]',

    slash: 'both',
    testOnly: true,
    ownerOnly: true,

    callback: async ({ message, interaction, channel, args }) => {
        const amount = args.length ? parseInt(args.shift()!) : 1

        if (message) {
            await message.delete()
        }

        const { size } = await channel.bulkDelete(amount, true)

        const reply = `I deleted ${size} message(s) for you master, the bad words are gone onyo~ 🥰`

        if (interaction){
            return reply
        }

        channel.send(reply)
    }
} as ICommand