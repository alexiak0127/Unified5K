// for showing components, no page should ever use this
import { BlogPostCard } from "@/components/BlogPostCard";
import { View } from "react-native";

// import Ionicons from '@expo/vector-icons/Ionicons'
// import { StyleSheet } from "react-native";
// const styles = StyleSheet.create({
//     titleContainer: {
//         // flexDirection: 'row',
//         // alignItems: 'center',
//         gap: 8,
//     },
//     stepContainer: {
//         gap: 8,
//         marginBottom: 8,
//     },
//     reactLogo: {
//         height: 178,
//         width: 290,
//         bottom: 0,
//         left: 0,
//         position: 'absolute',
//     },
// });

export default function TestScreen() {
    return <View style={{ padding: 16, marginTop: 32 }}>
        <BlogPostCard title="test" url="https://google.com" image="https://preview.redd.it/do-you-guys-remember-the-domo-coffee-cup-i-bet-it-was-v0-pvy1onqm30ma1.png?width=640&crop=smart&auto=webp&s=65346c7c6aaabd11bd8f580d301f523ce533e385" />
    </View>
}