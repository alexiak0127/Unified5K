// Profile Page

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CollapsibleSection from '../components/profile/CollapsibleSection';
import Header from '../components/Header';

export default function ProfileScreen() {

    const [selectedTab, setSelectedTab] = useState<'Participant' | 'Volunteer' | 'Organization'>('Organization');


    return (
        <View style={styles.container}>
            {/* Top Bar with Logo */}
            <Header />

            {/* Profile Row (image + name/email/badge) */}
            <View style={styles.profileRow}>
                <View style={styles.profileImageWrapper}>
                    <Image
                        source={require('../assets/images/profile-placeholder.jpg')}
                        style={styles.profileImage}
                    />
                    <View style={styles.editIcon}>
                        <Text style={styles.editText}>✎</Text>
                    </View>
                </View>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.email}>john@gmail.com</Text>
                    <View style={styles.participantBadge}>
                        <Text style={styles.badgeText}>Participant</Text>
                    </View>
                </View>
            </View>

            {/* Tabs */}
            <View style={styles.tabsRow}>
                {['Participant', 'Volunteer', 'Organization'].map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab as any)}>
                        <Text style={[styles.tab, selectedTab === tab && styles.activeTab]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedTab === 'Participant' && (
                <View style={{ paddingTop: 20 }}>
                    <CollapsibleSection title="Upcoming Events">
                        {/* These are outside the box */}
                        <Text>Race Card</Text>
                        <Text>RaceCard</Text>
                    </CollapsibleSection>

                    <CollapsibleSection title="Past Events">
                        <Text>Race Card</Text>
                    </CollapsibleSection>
                </View>
            )}



        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 40 },
    topBar: { alignItems: 'flex-start', marginBottom: 16 },
    logo: { width: 100, height: 40, resizeMode: 'contain' },

    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImageWrapper: {
        position: 'relative',
        marginRight: 16,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#000',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#00BFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    profileInfo: {
        flex: 1,
    },
    name: { fontSize: 18, fontWeight: '600' },
    email: { fontSize: 14, color: 'gray', marginBottom: 6 },

    participantBadge: {
        backgroundColor: '#E2F6FF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    badgeText: {
        color: '#0077AA',
        fontSize: 12,
        fontWeight: '500',
    },

    tabsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    tab: {
        fontSize: 16,
        color: 'gray',
        paddingBottom: 4,
    },
    activeTab: {
        color: '#00BFFF',
        borderBottomWidth: 2,
        borderColor: '#00BFFF',
    },

});
