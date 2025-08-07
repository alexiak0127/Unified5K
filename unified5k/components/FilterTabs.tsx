import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

interface ActiveFilters {
  live: boolean;
  past: boolean;
  upcoming: boolean;
}

interface FilterTabsProps {
  activeFilters: ActiveFilters;
  onFilterChange: (filters: ActiveFilters) => void;
}

interface FilterButtonProps {
  title: string;
  filterKey: keyof ActiveFilters;
  icon?: string;
  isActive: boolean;
  onPress: () => void;
}

interface SortButtonProps {
  title: string;
  icon: string;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeFilters, onFilterChange }) => {
  const toggleFilter = (filterKey: keyof ActiveFilters): void => {
    const newFilters: ActiveFilters = {
      ...activeFilters,
      [filterKey]: !activeFilters[filterKey],
    };
    onFilterChange(newFilters);
  };

  const FilterButton: React.FC<FilterButtonProps> = ({ title, filterKey, icon, isActive, onPress }) => {
    return (
      <TouchableOpacity
        style={[
          styles.filterButton,
          isActive && styles.activeFilterButton
        ]}
        onPress={onPress}
      >
        <View style={styles.filterContent}>
          {icon && (
            <Ionicons 
              name={icon as any} 
              size={18} 
              color={isActive ? '#4A90E2' : '#666666'}
              style={styles.filterIcon}
            />
          )}
          <Text style={[
            styles.filterText,
            isActive && styles.activeFilterText
          ]}>
            {title}
          </Text>
          <View style={[
            styles.checkbox,
            isActive && styles.activeCheckbox
          ]}>
            {isActive && (
              <Ionicons name="checkmark" size={16} color="#4A90E2" />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const SortButton: React.FC<SortButtonProps> = ({ title, icon }) => (
    <TouchableOpacity style={styles.sortButton}>
      <Ionicons name={icon as any} size={18} color="#4A90E2" style={styles.sortIcon} />
      <Text style={styles.sortText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Sort Buttons */}
      <View style={styles.sortContainer}>
        <SortButton title="Time" icon="time-outline" />
        <SortButton title="Location" icon="location-outline" />
      </View>

      {/* Filter Checkboxes */}
      <View style={styles.filterContainer}>
        <FilterButton 
          title="Live" 
          filterKey="live"
          icon="radio-button-on-outline"
          isActive={activeFilters.live}
          onPress={() => toggleFilter('live')}
        />
        <FilterButton 
          title="Past" 
          filterKey="past"
          icon="checkmark-circle-outline"
          isActive={activeFilters.past}
          onPress={() => toggleFilter('past')}
        />
        <FilterButton 
          title="Upcoming" 
          filterKey="upcoming"
          icon="calendar-outline"
          isActive={activeFilters.upcoming}
          onPress={() => toggleFilter('upcoming')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  
  sortContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 5,
    marginBottom: 25,
    justifyContent: 'center',
  },
  
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#4A90E2',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  sortIcon: {
    marginRight: 8,
  },
  
  sortText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  
  filterButton: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  
  activeFilterButton: {
    backgroundColor: '#E3F2FD',
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  
  filterContent: {
    alignItems: 'center',
    gap: 6,
  },
  
  filterIcon: {
    marginBottom: 2,
  },
  
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  
  activeFilterText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  activeCheckbox: {
    borderColor: '#4A90E2',
    backgroundColor: '#FFFFFF',
  },
});

export default FilterTabs;