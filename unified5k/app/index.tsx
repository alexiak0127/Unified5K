import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native';
import FilterTabs from '../components/FilterTabs';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RaceCard from '../components/RaceCard';
import SearchBar from '../components/SearchBar';

interface Race {
  id: number;
  raceName: string;
  location: string;
  imageSource: { uri: string };
  raceDate?: string;
  isNotificationEnabled?: boolean;
}
// for race details, we need to pass a date, location, and time

interface ActiveFilters {
  live: boolean;
  past: boolean;
  upcoming: boolean;
}

const IndexScreen: React.FC = () => {

  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    live: true,
    past: true,
    upcoming: true,
  });

  const [notificationStates, setNotificationStates] = useState<{[key: number]: boolean}>({});

  const mockRaces: Race[] = [
    {
      id: 1,
      raceName: "Boston Marathon",
      location: "Boston, MA",
      imageSource: require('../assets/images/raceimage1.jpg'),
      raceDate: "12/03",
      isNotificationEnabled: false,
    },
    {
      id: 2,
      raceName: "NYC Inclusive 5K",
      location: "New York, NY",
      imageSource: require('../assets/images/raceimage3.jpg'),
      raceDate: "12/03",
      isNotificationEnabled: false,
    },
    {
      id: 3,
      raceName: "Chicago Run",
      location: "Chicago, IL",
      imageSource: require('../assets/images/raceimage4.jpg'),
      raceDate: "12/03",
      isNotificationEnabled: false,
    },
  ];

  const filteredRaces = mockRaces.filter((race) => {
    // If no search query, show all races
    if (!searchQuery.trim()) return true;
    
    // Search in race name and location
    const query = searchQuery.toLowerCase().trim();
    const raceName = race.raceName.toLowerCase();
    const location = race.location.toLowerCase();
    
    return raceName.includes(query) || location.includes(query);
  });

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: ActiveFilters): void => {
    setActiveFilters(filters);
  };

  const handleRacePress = (raceId: number): void => {



    router.push(
      {pathname: "/race_details",
      params: { 
        date: mockRaces[raceId-1].raceDate,
        location: mockRaces[raceId-1].location,
       }
    })
    console.log(`Navigate to race details: ${raceId}, ${mockRaces[raceId-1].raceDate}`);
  };

  const handleNotificationPress = (raceId: number): void => {
    console.log(`Toggle notification for race: ${raceId}`);
    
    setNotificationStates(prev => ({
      ...prev,
      [raceId]: !prev[raceId]
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <HeroSection />
        
        <View style={styles.contentContainer}>
          <SearchBar
            value={searchQuery}
            onSearch={handleSearch}
            placeholder="Find a Race"
          />
          
          <FilterTabs
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
          />
          
          <View style={styles.raceList}>
            {filteredRaces.map((race) => (
              <RaceCard
                key={race.id}
                raceName={race.raceName}
                location={race.location}
                imageSource={race.imageSource}
                raceDate={race.raceDate}
                isNotificationEnabled={notificationStates[race.id] || false}
                onPress={() => handleRacePress(race.id)}
                onNotificationPress={() => handleNotificationPress(race.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  scrollView: {
    flex: 1,
  },
  
  contentContainer: {
    paddingBottom: 20,
  },
  
  raceList: {
    marginTop: 20,
  },
});

export default IndexScreen;