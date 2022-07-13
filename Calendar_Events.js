import { Dimensions } from 'react-native'
import EventCalendar from 'react-native-events-calendar'

export default function CalendarEvent() {
    let { width } = Dimensions.get('window')



    const events = [
        { start: '2022-07-13 00:30:00', end: '2022-07-13 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-13 01:30:00', end: '2022-07-13 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-13 04:10:00', end: '2022-07-13 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-13 01:05:00', end: '2022-07-13 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-13 14:30:00', end: '2022-07-13 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-14 01:20:00', end: '2022-07-14 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-14 04:10:00', end: '2022-07-14 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-14 00:45:00', end: '2022-07-14 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-14 11:30:00', end: '2022-07-14 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-16 01:30:00', end: '2022-07-16 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-16 03:10:00', end: '2022-07-16 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2022-07-16 00:10:00', end: '2022-07-16 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
    ]



    return (
        <EventCalendar
            eventTapped={(e)=>{console.log(e.start , ' | ', e.end)}}
            events={events}
            width={width}
            initDate={'2022-07-13'}
        />
    )
}