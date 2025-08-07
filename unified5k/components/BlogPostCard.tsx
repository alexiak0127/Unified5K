import { Link } from "expo-router"
import { Image, View } from "react-native"
import { Text } from "react-native-paper"

export type BlogPostCardProps = {
    url: string,
    image: string,
    title: string
}
export function BlogPostCard({ url, image, title }: BlogPostCardProps) {
    return <View style={{ alignSelf: "baseline", flexDirection: "column", gap: 8, backgroundColor: "transparent" }}>
        <Text variant="displaySmall" style={{ marginLeft: 8 }}>{title}</Text>
        <Link href={url}><Image style={{
            borderRadius: 8, height: 180, width: 325
        }} source={{
            uri: image,
        }}></Image></Link>
    </View>
}