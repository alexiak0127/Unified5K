import { ExternalPathString } from "expo-router"
import { Image, View, ViewProps } from "react-native"
import { Button, Text } from "react-native-paper"
import { ExternalLink } from "./ExternalLink"
export type ArticleCardProps = ViewProps & {
    title: string,
    url: string,
    image: string,
    text?: string
}

export function ArticleCard({ title, url, image, text, style, ...rest }: ArticleCardProps) {
    return <View style={[{ alignSelf: "baseline", flexDirection: "column", borderColor: "#00AEEC", borderWidth: 3, borderRadius: 15, backgroundColor: "#FFFFFF", padding: 20, minHeight: 325, minWidth: 316 }, style]} {...rest}>
        <View style={{ marginLeft: 8, gap: 4 }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>{title}</Text>
            <Text style={{ fontWeight: "400", fontSize: 20 }}>Publication</Text>
        </View>
        <Image style={{ width: 250, height: 100, marginTop: 16, marginBottom: 16 }} source={{
            uri: image
        }} />
        <Text style={{ fontWeight: "400", fontSize: 20, marginBottom: 16, marginLeft: 8 }}>{text}</Text>
        <ExternalLink href={url as ExternalPathString} asChild>
            <Button buttonColor="rgba(0, 174, 236, 0.2)" style={{ alignSelf: "baseline", borderRadius: 15 }}><Text style={{ fontSize: 16 }}>Read More</Text></Button>
        </ExternalLink>
    </View>
}