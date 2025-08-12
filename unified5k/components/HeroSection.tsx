import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, } from 'react-native';

const { width } = Dimensions.get('window');

const HeroSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/raceimage2.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>UNIFIED 5K</Text>
            <View style={styles.underline} />
            <Text style={styles.subtitle}>A Race for Every Body</Text>
            <Text style={styles.description}>
              Join a movement where runners, walkers,{'\n'}
              and rollers of all abilities come together{'\n'}
              to cross the finish line.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  content: {
    alignItems: 'center',
    maxWidth: width - 40,
  },
  
  title: {
    fontFamily: 'Poppins-Semibold',
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 2,
  },
  
  underline: {
    width: 60,
    height: 4,
    backgroundColor: '#4A90E2',
    marginBottom: 20,
  },
  
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
  },
});

export default HeroSection;