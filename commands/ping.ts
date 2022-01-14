import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with Pong',

    callback: ({ message }) => {
        return 'Pong'
    },
} as ICommand
// !ping