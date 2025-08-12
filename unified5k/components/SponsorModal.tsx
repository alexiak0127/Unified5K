import React, { useState, useEffect } from 'react';
import {
    Modal, View, Text, TextInput, Pressable,
    KeyboardAvoidingView, Platform, Linking, TouchableWithoutFeedback,
} from 'react-native';

type InquiryType = 'community' | 'corporate' | 'vendor';

type Props = {
    visible: boolean;
    onClose: () => void;
    defaultType?: InquiryType;
    toEmail?: string;
};

export default function SponsorModal({
    visible,
    onClose,
    defaultType = 'community',
    toEmail = 'brendan@adaptx.org',
}: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [type, setType] = useState<InquiryType>(defaultType);

    useEffect(() => {
        if (visible) {
            setType(defaultType);
            setName('');
            setEmail('');
            setMsg('');
        }
    }, [visible, defaultType]);

    const send = async () => {
        if (!email.trim() || !name.trim()) return;

        const tier =
            type === 'community' ? 'Community'
                : type === 'corporate' ? 'Corporate'
                    : 'Vendor';

        const subject = `Sponsorship Inquiry - ${tier}`;
        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Type: ${tier}\n\n` +
            `Message:\n${msg}`;

        const url = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        try { await Linking.openURL(url); onClose(); } catch { }
    };

    const SegBtn = ({ label, value }: { label: string; value: InquiryType }) => {
        const active = type === value;
        return (
            <Pressable
                onPress={() => setType(value)}
                className={`flex-1 h-10 items-center justify-center ${active ? 'bg-sky-700' : 'bg-white'}`}
                style={{
                    // rounded segmented ends
                    borderTopLeftRadius: value === 'community' ? 12 : 0,
                    borderBottomLeftRadius: value === 'community' ? 12 : 0,
                    borderTopRightRadius: value === 'vendor' ? 12 : 0,     // rightmost
                    borderBottomRightRadius: value === 'vendor' ? 12 : 0,
                }}
            >
                <Text className={`font-semibold ${active ? 'text-white' : 'text-black'}`}>{label}</Text>
            </Pressable>
        );
    };

    const prettyTitle =
        type === 'community' ? 'Become a Community Sponsor'
            : type === 'corporate' ? 'Become a Corporate Sponsor'
                : 'Become a Vendor';

    return (
        <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View className="flex-1 bg-black/40" />
            </TouchableWithoutFeedback>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="absolute inset-0">
                <View className="flex-1 items-center justify-center px-5">
                    <View className="w-full rounded-2xl bg-sky-100 px-5 py-16">
                        <Text className="text-center text-xl font-extrabold mb-4">{prettyTitle}</Text>

                        <View className="rounded-xl bg-white border border-gray-200 mb-3">
                            <TextInput placeholder="Name" value={name} onChangeText={setName} className="px-4 py-3 text-base" />
                        </View>

                        <View className="rounded-xl bg-white border border-gray-200 mb-3">
                            <TextInput
                                placeholder="Email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                                className="px-4 py-3 text-base"
                            />
                        </View>

                        {/* Segmented toggle: Community | Corporate | Vendor */}
                        <View className="flex-row items-center border-2 border-sky-500 rounded-2xl overflow-hidden mb-3">
                            <SegBtn label="Community" value="community" />
                            <SegBtn label="Corporate" value="corporate" />
                            <SegBtn label="Vendor" value="vendor" />
                        </View>

                        <View className="rounded-xl bg-white border border-gray-200" style={{ minHeight: 120 }}>
                            <TextInput
                                placeholder="Message"
                                value={msg}
                                onChangeText={setMsg}
                                multiline
                                className="px-4 py-3 text-base flex-1"
                                textAlignVertical="top"
                            />
                        </View>

                        <Pressable
                            onPress={send}
                            disabled={!name.trim() || !email.trim()}
                            className={`mt-4 rounded-xl py-4 items-center ${!name.trim() || !email.trim() ? 'bg-sky-300' : 'bg-sky-500'}`}
                        >
                            <Text className="text-white font-bold">Send</Text>
                        </Pressable>

                        <Pressable onPress={onClose} className="mt-2 items-center">
                            <Text className="text-gray-600">Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}
