/**
 * Evelyn Kwan
 * Boston University
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Descriptor = ({ date, location, time }: { date: string; location: string; time: string }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Ionicons name="calendar" size={18} color="#00AEEF" />
      <Text style={styles.label}> Date: </Text>
      <Text>{date}</Text>
    </View>
    <View style={styles.row}>
      <Ionicons name="location" size={18} color="#00AEEF" />
      <Text style={styles.label}> Location: </Text>
      <Text>{location}</Text>
    </View>
    <View style={styles.row}>
      <Ionicons name="time" size={18} color="#00AEEF" />
      <Text style={styles.label}> Time: </Text>
      <Text>{time}</Text>
    </View>
  </View>
);

export default Descriptor;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#00AEEF',
    borderRadius: 8,
    padding: 12,
    margin: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 6,
  },
});
