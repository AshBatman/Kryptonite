import { colors } from '../common/colors';
import React from 'react';
import { Animated, Modal, StyleSheet, View } from 'react-native';

export default function SlidingPopup({ visible, setVisible, children }) {

    return (
        <Modal
            animated
            animationType="fade"
            visible={visible}
            transparent
        >
            <View style={styles.overlay}>
                <View style={{ height: 300 }}>

                    <Animated.ScrollView style={[styles.container]}>
                        {children}
                    </Animated.ScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: colors.WHITE,
        paddingTop: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
});