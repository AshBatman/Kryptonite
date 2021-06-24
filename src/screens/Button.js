import { colors } from '../common/colors';
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as Btn } from 'react-native-elements'

export default function Button(props) {
    return (
        <Btn
            buttonStyle={styles.root}
            titleStyle={styles.text}
            {...props}
        />)
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.MAIN,
        width: 'auto',
        borderRadius: 20
    },
    text: {
        fontSize: 16
    }
});