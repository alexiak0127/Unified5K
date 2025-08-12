import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import React, { useState } from 'react';
import Header from "@/components/Header";
import SearchBar from '../components/SearchBar';
import DropDownPicker from 'react-native-dropdown-picker';
import { ArticleCard } from '@/components/ArticleCard';
import  RacePhotos from '@/components/RacePhotos';


function TopBar({placeholder, searchQuery, handleSearch}: {placeholder: string, searchQuery: string; handleSearch: (query: string) => void}) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Ascending', value: 'Ascending'},
        {label: 'Descending', value: 'Descending'}
    ]);

    return (
        <>
            <SearchBar
                value={searchQuery}
                onSearch={handleSearch}
                placeholder={placeholder}
                isDifferent={true}
            />

    
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Sort by"
                dropDownContainerStyle={{ borderColor: '#4A90E2', width: '32%', alignSelf: 'flex-end', transform: [{ translateX: '-25%' }], borderWidth: 2 }}
                style={{width: '32%', borderColor: '#4A90E2', alignSelf: 'flex-end', transform: [{ translateX: '-25%' }], borderRadius: 25, borderWidth: 2}}
            />  
        </>

    )
}


function BlogPost({ searchQuery, handleSearch }: { searchQuery: string; handleSearch: (query: string) => void}) {

 

    return (
        <>
            <TopBar placeholder="Find an Article" searchQuery={searchQuery} handleSearch={handleSearch} />

 

            {/* Sample data for article cards*/}
            <ScrollView style={{flexDirection: 'column', alignSelf: 'center', marginTop: 20}}>
                 <ArticleCard
                    title="Expo SDK Update"
                    url="https://blog.expo.dev/expo-sdk-50-is-now-available-1a42a89d8b3"
                    image="https://avatars.githubusercontent.com/u/12504344?s=200&v=4"
                    text="The latest Expo SDK brings support for React Native 0.72, new APIs, and bug fixes."
                    style={{ width: '75%', marginBottom: 20}}  // Add spacing between cards
                />

                <ArticleCard
                    title="Expo SDK Update"
                    url="https://blog.expo.dev/expo-sdk-50-is-now-available-1a42a89d8b3"
                    image="https://avatars.githubusercontent.com/u/12504344?s=200&v=4"
                    text="The latest Expo SDK brings support for React Native 0.72, new APIs, and bug fixes."
                    style={{ width: '75%', marginBottom: 20}}  // Add spacing between cards
                />
            </ScrollView>
        
        </>
    )
}

function Photos({ searchQuery, handleSearch }: { searchQuery: string; handleSearch: (query: string) => void}) {
    return (
        <>
            <TopBar placeholder="Search for Race" searchQuery={searchQuery} handleSearch={handleSearch} />

             <ScrollView style={{flexDirection: 'column', alignSelf: 'center', marginTop: 20, width: '75%'}}>
                <RacePhotos
                    raceName="Unified 5K"
                    date="October 1, 2023"
                    imageResponse={[
                        'https://picsum.photos/id/1011/500/300',
                        'https://picsum.photos/id/1025/500/300',
                        'https://picsum.photos/id/1035/500/300',
                        'https://picsum.photos/id/1043/500/300',
                        'https://picsum.photos/id/1062/500/300',
                        'https://picsum.photos/id/1074/500/300'
                    ]}
                />

            </ScrollView>
        </>
    )
}




export default function Media() {
    const [selectedTab, setSelectedTab] = useState<'Photos' | 'News Articles'>('Photos');
    const [searchQuery, setSearchQuery] = useState<string>('');
    
 
  const handleSearch = (query: string): void => {
    setSearchQuery(query);
  };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header />

            {/* TODO: In the future, make this a component */}
            <View style={styles.tabsRow}>
                {['Photos', 'News Articles'].map((tab) => (
                    <TouchableOpacity key={tab} style={{flex: 1}} onPress={() => setSelectedTab(tab as any)}>
                        <Text style={[styles.tab, selectedTab === tab && styles.activeTab, styles[selectedTab]]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedTab === 'Photos' ? <Photos searchQuery={searchQuery} handleSearch={handleSearch}  /> : <BlogPost searchQuery={searchQuery} handleSearch={handleSearch} />}
            
          
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({



    tabsRow: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#4A90E2',
        alignSelf: 'center'
        // paddingBottom: 8,
    },
    tab: {
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        paddingVertical: 8,
    },
    activeTab: {
        flex: 1,
        backgroundColor: '#b0e1fdff',
        color: 'black',
       
    },
    Photos: {
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
    },
    ["News Articles"]: {
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    }


});