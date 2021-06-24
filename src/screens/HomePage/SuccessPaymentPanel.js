import { useNavigation } from '@react-navigation/core';
import { colors } from '../../common/colors';
import Button from '../Button';
import { SCREENS } from '../../constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default function SuccessPaymentPanel({ setVisible, pincode }) {
    const navigation = useNavigation()

    return (
        <View style={styles.root}>
            <Text style={{ fontSize: 16, textAlign: 'center', margin: 6 }}>Current Location: {pincode}</Text>
            <Icon name={"check-circle"} size={72} color={'#41AD49'} />
            <Text style={styles.successMessage}>SUCCESSFULLY BOOKED</Text>
            <View style={{
                position: 'absolute',
                bottom: 90,
                width: '50%'
            }}>
                <Button title={"Go To Home"} titleStyle={{ color: '#FFBF00' }}
                    onPress={() => { setVisible(false); navigation.navigate(SCREENS.HOME) }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 300,
        alignItems: 'center',
    },
    successMessage: {
        fontWeight: "600",
        fontSize: 18,
        fontFamily: "Segoe UI",
        marginTop: 10,
        color: '#41AD49'
    },
});