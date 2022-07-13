import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'

export default function CalendarDatePicker() {


  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false)

    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date)
  }


  return (
    <View style={{}}>
      <TouchableOpacity onPress={openDatePicker} >
        <Text>
          Teste
        </Text>
      </TouchableOpacity>
      <DatePicker
        isVisible={showDatePicker}
        mode={'range'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

