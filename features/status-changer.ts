import { Client } from "discord.js";

export default (client: Client) => {
    const statusOptions = [
        'with my 3 besties',
        'New Genesis Episode 2',
        'Shumiruken'
    ]
    let counter = 0

    const updateStatus = () => {
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]
        })

        if (++counter >= statusOptions.length){
            counter = 0
        }

        setTimeout(updateStatus, 1000 * 60 * 20)
    }
    updateStatus()
}

export const config = {
    dbName: 'STATUS_CHANGER',
    displayName: 'Status Changer'
}
