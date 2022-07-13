import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Calendar } from 'react-native-big-calendar'

const events = [
    {
        title: 'Meeting',
        start: new Date(2022, 6, 11, 10, 0),
        end: new Date(2022, 6, 12, 10, 30),
    },
    {
        title: 'Coffee break',
        start: new Date(2022, 6, 1, 15, 45),
        end: new Date(2022, 6, 1, 17, 30),
    },
]

export default function BigCalendar() {
    const [status, setStatus] = useState(false);
    return (

        <View>
            {
                status &&
                <Calendar events={events} height={600} />
            }
            <TouchableOpacity onPress={() => setStatus(!status)}>
                <Text>
                    big calendar
                </Text>
            </TouchableOpacity>
        </View>


    )
}