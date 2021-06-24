import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from 'react-native-elements';
import { colors } from '../../common/colors';

export default function HospitalCard({ slot, changeSlot, selectedSlot, selectedDate }) {
    const [HospitalId, HospitalName] = slot[0].split("-")

    return (
        <View style={styles.root}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text numberOfLines={1} style={{ width: '60%', fontSize: 20, fontWeight: 'bold' }}>
                    {HospitalName}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {slot[1][selectedDate]} Available
                </Text>
            </View>
            <Text style={{ fontSize: 16 }}>Slots Available</Text>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <Pressable onPress={() => changeSlot(`${HospitalId}_1`)} style={[styles.slotCard, selectedSlot === `${HospitalId}_1` && styles.selectedSlot]}>
                        <Text>8:00 AM</Text>
                    </Pressable>
                    <Pressable onPress={() => changeSlot(`${HospitalId}_2`)} style={[styles.slotCard, selectedSlot === `${HospitalId}_2` && styles.selectedSlot]}>
                        <Text>10:00 AM</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <Pressable onPress={() => changeSlot(`${HospitalId}_3`)} style={[styles.slotCard, selectedSlot === `${HospitalId}_3` && styles.selectedSlot]}>
                        <Text>01:00 PM</Text>
                    </Pressable>
                    <Pressable onPress={() => changeSlot(`${HospitalId}_4`)} style={[styles.slotCard, selectedSlot === `${HospitalId}_4` && styles.selectedSlot]}>
                        <Text>03:00 PM</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: '#00000029',
        borderWidth: 1,
        backgroundColor: '#fff',
        elevation: 6,
        margin: 20,
        borderRadius: 20
    },
    slotCard: {
        width: '40%',
        padding: 10,
        borderColor: '#00000029',
        borderWidth: 1,
        backgroundColor: '#fff',
        shadowColor: '#00000029',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedSlot: {
        backgroundColor: '#26BDD6',
        color: colors.WHITE
    }
})

