import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const { width } = Dimensions.get('window');

interface RaceCardProps {
  raceName?: string;
  location?: string;
  imageSource?: ImageSourcePropType | null;
  raceDate?: string;
  onPress?: () => void;
  onNotificationPress?: () => void;
}

const RaceCard: React.FC<RaceCardProps> = ({ 
  raceName = "Race Name", 
  location = "Location", 
  imageSource = null,
  raceDate = null,
  onPress,
  onNotificationPress 
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.raceName}>{raceName}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={18} color="#4A90E2" />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={onNotificationPress}
        >
          <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>


      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={imageSource || require('../assets/images/logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
        
        {/* Image overlay */}
        <View style={styles.imageOverlay} />
        
        {/* Bottom right overlay with M/D */}
        <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>
            {raceDate || "M/D"}
          </Text>
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  
  titleContainer: {
    flex: 1,
  },
  
  raceName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  location: {
    fontSize: 16,
    color: '#666666',
    marginLeft: 6,
  },
  
  notificationButton: {
    padding: 8,
  },
  
  imageContainer: {
    position: 'relative',
    height: 170,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
  },
  
  distanceContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 10,
    alignItems: 'center',
    minWidth: 50,
  },
  
  distanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 22,
  },
});

export default RaceCard;