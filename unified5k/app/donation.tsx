import { View, Text, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';

export default function Donation() {
    const router = useRouter();
    const open = (url: string) => Linking.openURL(url).catch(() => { });

    const buttons: { label: string; onPress: () => void; variant?: 'filled' | 'outline' }[] = [
        { label: 'Donate to AdaptX', onPress: () => open('https://www.adaptx.org/donate'), variant: 'outline' },
        { label: 'Donate through a DAF', onPress: () => open('https://www.adaptx.org/donate'), variant: 'outline' },
        { label: 'Become a Sponsor/Vendor', onPress: () => router.push('/sponsor-tiers'), variant: 'filled' },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Logo / header */}
            <Header />

            {/* Title */}
            <View className="mt-6 px-6 items-center">
                <Text className="text-center text-3xl font-extrabold leading-9 text-gray-900">
                    Help Us Make{'\n'}Fitness Accessible
                </Text>
            </View>

            {/* Buttons - centered vertically in remaining space */}
            <View className="flex-1 px-5">
                <View className="mt-12 flex-1">
                    {buttons.map((btn) => (
                        <TouchableOpacity
                            key={btn.label}
                            activeOpacity={0.85}
                            onPress={btn.onPress}
                            className={`w-full rounded-2xl py-4 px-5 border-2 shadow-sm mt-5
                ${btn.variant === 'filled' ? 'bg-sky-100 border-sky-500' : 'bg-white border-sky-500'}`}
                        >
                            <Text className="text-center text-base font-extrabold text-black">
                                {btn.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}
