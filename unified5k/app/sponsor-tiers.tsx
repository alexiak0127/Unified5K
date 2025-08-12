import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, Pressable, LayoutAnimation, Platform, UIManager, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import SponsorModal from '../components/SponsorModal';

// Only enable on old architecture Android. It's a no-op (and warns) on Fabric.
const isFabric = (global as any)?.nativeFabricUIManager != null;

if (Platform.OS === 'android' && !isFabric && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Tier = {
    title: string;
    summary?: string;
    url?: string;
    localImage?: any;
    bullets?: string[];
};

const corporateImg = require('../assets/images/corporate-sponsor-option-image.jpg');

const DATA: Tier[] = [
    {
        title: 'Community Sponsors',
        url: 'https://unified5k.org/community-sponsors/',
        summary:
            'Support a specific Unified5K race and be recognized locally. Community sponsors help make each event possible and visible within the neighborhood.',
        bullets: [
            'Logo on event materials & race page',
            'On-site presence (table/signage) at select levels',
            'Complimentary race entries at higher tiers',
        ],
    },
    {
        title: 'Corporate Sponsors',
        url: 'https://unified5k.org/corporate-sponsors/',
        localImage: corporateImg,
        summary:
            'Corporate sponsorships support the entire race series and will be acknowledged at each individual race. All donations are tax deductible as AdaptX is a 501(c)3 non-profit organization.',
        bullets: [
            'Provide volunteers',
            'Donate appreciated stock positions to our portfolio',
            'Provide a discount code for your store or services that can be provided to our race participants',
            'Donate a product or experience for our event raffles',
        ],
    },
    {
        title: 'Vendors',
        summary:
            'Vendors can showcase products and services to the Unified5K community through on-site booths and listings. Great for fitness brands, wellness services, and local businesses.',
    },
];

export default function SponsorTiers() {
    const [openSet, setOpenSet] = useState<Set<number>>(new Set());
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'community' | 'corporate' | 'vendor'>('community');

    const openModal = (type: 'community' | 'corporate' | 'vendor') => {
        setModalType(type);
        setModalOpen(true);
    };

    const toggle = (i: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpenSet(p => {
            const n = new Set(p); 
            n.has(i) ? n.delete(i) : n.add(i); 
            return n;
        });
    };

    const openUrl = (url: string) => Linking.openURL(url).catch(() => { });

    return (
        <SafeAreaView className="flex-1 bg-white">
            <Header />
            <ScrollView contentContainerClassName="px-5 pb-12">
                <View className="mt-6 items-center">
                    <Text className="text-3xl font-extrabold leading-9 text-gray-900">Support</Text>
                </View>

                <View className="mt-6">
                    {DATA.map((tier, i) => {
                        const open = openSet.has(i);
                        const isCorporate = tier.title === 'Corporate Sponsors';
                        return (
                            <View key={tier.title} className={`rounded-2xl border-2 border-sky-500 bg-white shadow-sm ${i ? 'mt-5' : ''}`}>
                                <Pressable onPress={() => toggle(i)} className="flex-row items-center justify-between px-4 py-4" android_ripple={{ color: 'rgba(0,0,0,0.06)' }}>
                                    <Text className="text-base font-semibold text-gray-900">{tier.title}</Text>
                                    <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={20} color="#0ea5e9" />
                                </Pressable>

                                {open && (
                                    <View className="px-4 pb-5">
                                        {isCorporate && tier.localImage && (
                                            <>
                                                <Image source={tier.localImage} className="w-full h-48 rounded-xl" resizeMode="cover" />
                                                <View className="mt-5 h-1 w-16 rounded bg-sky-500" />
                                                <Text className="mt-3 text-2xl font-extrabold text-gray-900">Corporate Sponsor Options</Text>
                                            </>
                                        )}

                                        {tier.summary && <Text className="mt-3 text-gray-800">{tier.summary}</Text>}

                                        {tier.bullets?.length && (
                                            <>
                                                <Text className="mt-5 font-semibold text-gray-900">
                                                    {isCorporate ? 'Other ways to contribute:' : 'Highlights:'}
                                                </Text>
                                                {tier.bullets.map((b, idx) => (
                                                    <View key={idx} className="mt-3 flex-row items-start">
                                                        <Ionicons name="star" size={16} color="#0ea5e9" style={{ marginTop: 2 }} />
                                                        <Text className="ml-2 text-gray-800 flex-1">{b}</Text>
                                                    </View>
                                                ))}
                                            </>
                                        )}

                                        {tier.url && (
                                            <Pressable
                                                onPress={() => tier.url && openUrl(tier.url)}
                                                className="mt-5 items-center rounded-xl border-2 border-sky-500 bg-sky-100 py-3"
                                                android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
                                            >
                                                <Text className="font-bold text-black">Learn more</Text>
                                            </Pressable>
                                        )}

                                        <Pressable
                                            onPress={() => openModal(
                                                tier.title === 'Corporate Sponsors' ? 'corporate' :
                                                tier.title === 'Vendors' ? 'vendor' : 'community'
                                            )}
                                            className="mt-3 items-center rounded-xl bg-sky-500 py-3"
                                            android_ripple={{ color: 'rgba(255,255,255,0.25)' }}
                                        >
                                            <Text className="font-bold text-white">Message to Become a Sponsor/Vendor</Text>
                                        </Pressable>
                                    </View>
                                )}
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            <SponsorModal
                visible={modalOpen}
                onClose={() => setModalOpen(false)}
                defaultType={modalType}
            />
        </SafeAreaView>
    );
}