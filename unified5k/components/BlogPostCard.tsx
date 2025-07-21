import { ExternalPathString, } from "expo-router"
import { Image, View } from "react-native"
import { Text } from "react-native-paper"
import { ExternalLink } from "./ExternalLink"

export type BlogPostCardProps = {
    url: string,
    image: string,
    title: string
}
export function BlogPostCard({ url, image, title }: BlogPostCardProps) {
    return <View style={{ alignSelf: "baseline", flexDirection: "column", gap: 8, backgroundColor: "transparent" }}>
        <Text variant="displaySmall" style={{ marginLeft: 8 }}>{title}</Text>
        <ExternalLink href={url as ExternalPathString}><Image style={{
            borderRadius: 8, height: 180, width: 325
        }} source={{
            uri: image,
        }}></Image></ExternalLink>
    </View>
}