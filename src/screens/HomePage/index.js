import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { web3Api } from '../../utils/web3'
import DatePicker from './DatePicker';
import { colors } from '../../common/colors'
import Input from '../Input';
import Button from '../Button';

export default function HomePage() {
    useEffect(() => {


        var loc = new Int32Array(2);
        loc[0] = 110092;

        //console.log(loc);

        web3Api.methods.return_avail_vacc(loc[0]).call().then(function (result) {
            //   $("#DISPLAY").html(result);
            console.log(result);
        });

    }, [])

    return (
        <View>
            <View style={{ backgroundColor: colors.MAIN, height: 100, width: '100%' }}>

            </View>
            <View style={{ height: 300, width: '100%', borderRadius: 20, marginTop: -30, backgroundColor: colors.WHITE, padding: 20 }}>
                <DatePicker />

                <Input
                    placeholder='Enter Pincode'
                />

                <Button
                    title="CHECK AVAILABILITY"
                    titleStyle={{ color: '#FFBF00' }}
                // onPress={handleAddNote}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    }
})