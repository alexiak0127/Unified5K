/**
 * Josh Ilano
 * Boston University
 * 7-16-2025
 */


import { Pressable, Text, View } from "react-native";
import { Image } from 'expo-image';
import { useState, useEffect } from 'react';

/**
 * 
 * @param imageResponse 
 * Example:  
 *  const imageUrls = [
    'https://picsum.photos/id/1011/500/300',
    'https://picsum.photos/id/1025/500/300',
    'https://picsum.photos/id/1035/500/300',
    'https://picsum.photos/id/1043/500/300',
    'https://picsum.photos/id/1062/500/300',
    'https://picsum.photos/id/1074/500/300',
  ];
 * 
 * 
 * @returns ImageCarousel UI Element
 */
export default function ImageCarousel({imageResponse}: {imageResponse: string[]}) {

    const [index, setIndex] = useState(0); // on change of index, a different image will appear 

    return (
        <View
            style={{ // the UI is currently only intended for vertical phones, change as needed in future
                position: 'relative',
                height: 200,
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Image // content image
                source={imageResponse[index]}
                style={{ width: '100%', height: '100%' }}
            />

            <View style={{
                flexDirection: 'row',
                gap: 5,
                position: 'absolute',
                bottom: 10
            }}>
                <Pressable // Left button to return to previous image 
                    onPress={() => setIndex(((index - 1) + imageResponse.length) % imageResponse.length)}
                    style={{
                        borderRadius: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                >
                    <Text style={{ fontSize: 20 }}> {" < "} </Text>
                </Pressable>

                <Text style={{ // button to display status of selection
                    fontSize: 20,
                    borderRadius: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}>
                    {"     " + (index) + "/" + (imageResponse.length - 1) + "    "} </Text>


                <Pressable // Right button to progress to next image 
                    onPress={() => setIndex((index + 1) % imageResponse.length)}
                    style={{
                        borderRadius: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                >
                    <Text style={{ fontSize: 20 }}> {" > "} </Text>
                </Pressable>
                
            </View>
        </View>
    );

}