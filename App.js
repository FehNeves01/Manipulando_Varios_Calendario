import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import BigCalendar from './BigCalendar';
import CalendarDatePicker from './Calendar_Date_Picker';
import CalendarEvent from './Calendar_Events';
import SingleDatePage, { RangeDatePage, TimePickerPage } from './Calendar_Paper_Date';


export default function App() {



  return (
    <View style={{ flex: 1, marginTop:45, }}>
      <CalendarDatePicker />
      <SingleDatePage />
      <RangeDatePage />
      <TimePickerPage />
      <BigCalendar />
      <CalendarEvent />
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

