import React, { useState } from 'react';
import { Text } from 'react-native-elements';
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";

export default function HomePage() {
    const [month, setMonth] = useState('June');
    const [currentIndex, setCurrentIndex] = useState(2)
    const [dates, setDates] = useState([
        {
            day: 'Su',
            date: 27,
            hightlight: false,
            disabled: false
        },
        {
            day: 'M',
            date: 28,
            hightlight: false,
            disabled: false
        },
        {
            day: 'Tu',
            date: 29,
            hightlight: true,
            disabled: false
        },
        {
            day: 'W',
            date: 30,
            hightlight: false,
            disabled: false
        },
        {
            day: 'Th',
            date: 1,
            hightlight: false,
            disabled: true
        },
        {
            day: 'F',
            date: 2,
            hightlight: false,
            disabled: true
        },
        {
            day: 'Sa',
            date: 3,
            hightlight: false,
            disabled: true
        },
    ]);

    const oldDateObject = [
        {
            day: 'Su',
            date: 27,
            hightlight: false,
            disabled: false
        },
        {
            day: 'M',
            date: 28,
            hightlight: false,
            disabled: false
        },
        {
            day: 'Tu',
            date: 29,
            hightlight: false,
            disabled: false
        },
        {
            day: 'W',
            date: 30,
            hightlight: false,
            disabled: false
        },
        {
            day: 'Th',
            date: 1,
            hightlight: false,
            disabled: true
        },
        {
            day: 'F',
            date: 2,
            hightlight: false,
            disabled: true
        },
        {
            day: 'Sa',
            date: 3,
            hightlight: false,
            disabled: true
        },
    ]

    const newDateObject = [
        {
            day: 'Th',
            date: 1,
            hightlight: false,
            disabled: false
        },
        {
            day: 'F',
            date: 2,
            hightlight: false,
            disabled: false
        },
        {
            day: 'Sa',
            date: 3,
            hightlight: false,
            disabled: false
        },
        {
            day: 'Su',
            date: 4,
            hightlight: false,
            disabled: false
        },
        {
            day: 'M',
            date: 5,
            hightlight: false,
            disabled: false
        },
        {
            day: 'Tu',
            date: 6,
            hightlight: false,
            disabled: false
        },
        {
            day: 'W',
            date: 7,
            hightlight: false,
            disabled: false
        },
    ]
    const onChangeDate = (index) => {
        const newArray = dates;
        newArray[currentIndex].hightlight = false;
        newArray[index].hightlight = true;
        setCurrentIndex(index);
        setDates(newArray);
    }

    const onChangeWeek = (args) => {
        if (args) {
            setDates(oldDateObject);
            setMonth('June');
        } else {
            setDates(newDateObject);
            setMonth('August');
        }
    }
    return (
        <>
            <Text>Select Date</Text>
            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 15 }}>
                <TouchableWithoutFeedback onPress={() => onChangeWeek(true)}>
                    <Text style={{ textAlignVertical: 'center', fontWeight: 'bold', marginRight: 8, backgroundColor: '#D4D1D1', borderRadius: 50, paddingLeft: 8, paddingRight: 8, color: '#424C58' }}>{'<'}</Text>
                </TouchableWithoutFeedback>
                <Text style={[styles.day, { fontSize: 18 }]}>{month}</Text>
                <TouchableWithoutFeedback onPress={() => onChangeWeek(false)}>
                    <Text style={{ textAlignVertical: 'center', fontWeight: 'bold', marginLeft: 8, backgroundColor: '#D4D1D1', borderRadius: 50, paddingLeft: 8, paddingRight: 8, color: '#424C58' }}>{'>'}</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25, marginTop: 12 }}>
                {dates.map((day, index) => {
                    return (
                        <TouchableWithoutFeedback key={index.toString()} onPress={day.disabled ? () => { } : () => onChangeDate(index)}>
                            <View style={[styles.hightlight, month === 'August' && { paddingLeft: 13, paddingRight: 13 }, day.hightlight && { backgroundColor: '#26BDD6' }]}>
                                <Text key={index.toString()} style={[styles.day, { marginBottom: 5, color: '#666666', fontSize: 12 }, day.hightlight && { color: 'white' }]}>{day.day}</Text>
                                <Text key={index.toString()} style={[styles.day, { fontSize: 18 }, day.hightlight && { color: 'white' }, day.disabled && { color: 'grey' }]}>{day.date}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    day: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    hightlight: {
        padding: 10,
        borderRadius: 10
    }
})