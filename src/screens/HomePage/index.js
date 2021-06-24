import React, { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { web3Api } from '../../utils/web3'
import DatePicker from './DatePicker';
import { colors } from '../../common/colors'
import Input from '../Input';
import Button from '../Button';
import HospitalCard from './HospitalCard'
import SlidingPopup from '../SlidingPopup';
import SuccessPaymentPanel from './SuccessPaymentPanel'

export default function HomePage() {

    const [slots, setSlots] = useState([])
    const [pincode, setPincode] = useState([])
    const [selectedSlot, setSelectedSlot] = useState()
    const [visible, setVisible] = useState(false)

    const fetchAvailableSlots = () => {
        if (!pincode || pincode.length < 6 || isNaN(pincode)) {
            Alert.alert("Enter valid Pincode!")
        } else {

            web3Api.methods.return_avail_vacc(pincode).call().then(function (result) {
                setSlots(result)
            });
        }
    }

    const bookSlot = () => {
        setVisible(true)
    }

    return (
        <View>
            <View style={{ backgroundColor: colors.MAIN, height: 100, width: '100%' }}>

            </View>
            <View style={{
                height: '90%',
                width: '100%',
                borderRadius: 20,
                marginTop: -30,
                backgroundColor: colors.WHITE,
                paddingTop: 20,
            }}>
                <ScrollView>
                    <View style={{ paddingLeft: 20, paddingRight: 20 }}>

                        <DatePicker />

                        <Input
                            type="tel"
                            placeholder='Enter Pincode'
                            onChangeText={value => setPincode(value)}
                            keyboardType={'number-pad'}
                        />

                        <Button
                            title="CHECK AVAILABILITY"
                            titleStyle={{ color: '#FFBF00' }}
                            onPress={fetchAvailableSlots}
                        />

                    </View>
                    <View style={{ marginTop: 20 }}>
                        {slots.map((slot) => {
                            return slot[0] ? <HospitalCard selectedSlot={selectedSlot} slot={slot} changeSlot={setSelectedSlot} /> : null
                        })}
                    </View>
                </ScrollView>
            </View>
            <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
                <Button
                    title="BOOK SLOT"
                    titleStyle={{ color: '#FFBF00' }}
                    onPress={bookSlot}
                />
            </View>

            <SlidingPopup visible={visible} setVisible={setVisible} >
                <SuccessPaymentPanel pincode={pincode} setVisible={setVisible} />
            </SlidingPopup>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    }
})