import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default () => {
    const [date,setDate] = useState (newData())
    const [open,setOpen] = useState(false)

    return(
        <>
            <Button title='open' onPress={() => setOpen(true)}/>
            <DatePicker modal open={open} date={date} onConfirm={(date) => {
                setOpen(false)
                setDate(date)}}

                onCancel={() => {setOpen(false)}}
            />
        </>
    )
}