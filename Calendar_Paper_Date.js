import * as React from 'react'
import { Button, Text, TouchableOpacity } from 'react-native'
// import { Button } from 'react-native-paper'
import { DatePickerModal } from 'react-native-paper-dates'
import { TimePickerModal } from 'react-native-paper-dates'

export default function SingleDatePage() {
    const [visible, setVisible] = React.useState(false)
    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onChange = React.useCallback(({ date }) => {
        setVisible(false)
        console.log({ date })
    }, [])

    const date = new Date()

    return (
        <>
            <DatePickerModal
                mode="single"
                visible={visible}
                onDismiss={onDismiss}
                date={date}
                onConfirm={onChange}
                saveLabel="Save" // optional
                label="Select date" // optional
                animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
                locale={'en'} // optional, default is automically detected by your system
            />
            {/* <Button onPress={() => setVisible(true)}>
                
            </Button> */}
            <TouchableOpacity onPress={() => setVisible(true)} >
                <Text>

                    Pick date
                </Text>
            </TouchableOpacity>

        </>
    )
}



export function RangeDatePage() {
    const [visible, setVisible] = React.useState(false)
    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onChange = React.useCallback(({ startDate, endDate }) => {
        setVisible(false)
        console.log({ startDate, endDate })
    }, [])


    return (
        <>
            <DatePickerModal
                mode="range"
                visible={visible}
                onDismiss={onDismiss}
                startDate={undefined}
                endDate={undefined}
                onConfirm={onChange}
                saveLabel="Save" // optional
                label="Select period" // optional
                startLabel="From" // optional
                endLabel="To" // optional
                animationType="slide" // optional, default is slide on ios/android and none on web
                locale={'en'} // optional, default is automically detected by your system
            />
            <TouchableOpacity onPress={() => setVisible(true)} >
                <Text>

                    Pick date
                </Text>
            </TouchableOpacity>
        </>
    )
}


export function TimePickerPage() {
    const [visible, setVisible] = React.useState(false)
    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onConfirm = React.useCallback(
        ({ hours, minutes }) => {
            setVisible(false);
            console.log({ hours, minutes });
        },
        [setVisible]
    );


    return (
        <>
            <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                hours={12} // default: current hours
                minutes={14} // default: current minutes
                label="Select time" // optional, default 'Select time'
                cancelLabel="Cancel" // optional, default: 'Cancel'
                confirmLabel="Ok" // optional, default: 'Ok'
                animationType="fade" // optional, default is 'none'
                locale={'en'} // optional, default is automically detected by your system
            />
            <TouchableOpacity onPress={() => setVisible(true)} >
                <Text>
                    Pick time
                </Text>
            </TouchableOpacity>
        </>
    )
}