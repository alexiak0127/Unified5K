import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

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
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 0,
    backgroundColor: '#fff',
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
  },
});
