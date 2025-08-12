import ImageCarousel from "@/components/imageCarousel";
import { Text, View, Pressable } from "react-native";


export default function RacePhotos({raceName, date, imageResponse}: {raceName: string, date: string, imageResponse: string[]}) {

    return (
        <>
            <View style={{borderBottomColor: '#000000', borderBottomWidth: 1, marginBottom: 10, alignItems: 'center'}}>
                <Text> {raceName} </Text>
                <Text> {date} </Text>
                <ImageCarousel imageResponse={imageResponse} />
                <Pressable
                    style = {{width: '40%', alignSelf: 'center', borderRadius: 16, marginVertical: 20}}
                    onPress={() => {}}>
                        {({ pressed }) => (
                            <Text style={{ color: '#000000ff',
                                textAlign: 'center',
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 14,
                                backgroundColor: pressed ? '#3567a1ff' : '#aad0fdff',
                                fontWeight: 'bold',
                            }}>View More</Text>
                        )}
                </Pressable>
        
            </View>
            
        
        </>
    )

}