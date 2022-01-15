import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed',

    permissions: ['ADMINISTRATOR'],

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
        .setDescription("Hello world")
        .setTitle('Title')
        .setColor('RED')
        .setAuthor('Eiken')
        .setFooter('Footer')
        .addFields([
            {
                name: 'name',
                value: 'value',
                inline: true,
            },
            {
                name: 'name two',
                value: 'value two',
                inline: true,
            },
        ])

        return embed
    }
} as ICommand