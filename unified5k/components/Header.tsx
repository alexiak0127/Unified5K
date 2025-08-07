import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingHorizontal: 0,
        paddingTop: 0,
        marginBottom: 16,
        backgroundColor: '#fff', // optional: set background if needed
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
});
