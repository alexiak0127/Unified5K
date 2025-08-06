import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const CollapsibleSection: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* Header Box */}
      <TouchableOpacity
        style={[styles.headerBox, isOpen ? styles.openHeader : styles.closedHeader]}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#00AEEF"
        />
      </TouchableOpacity>

      {/* Content below box */}
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  headerBox: {
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closedHeader: {
    backgroundColor: 'white',
    borderColor: '#00AEEF',
  },
  openHeader: {
    backgroundColor: '#DDF4FC',
    borderColor: '#DDF4FC',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default CollapsibleSection;
