/**
 * Josh Ilano
 * Boston University
 * 7-16-2025
 */


import { Pressable, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


/**
 * 
 * @param currentAmount and totalAmount
 * 
 * @returns Donation Bar UI Element
 */
export default function DonationBar({currentAmount, totalAmount}: {currentAmount: number, totalAmount: number}) {




    if (currentAmount <= totalAmount) {
        return (

            <View
                style={{ // the UI is currently only intended for vertical phones, change as needed in future
                    position: 'relative',
                    borderRadius: 15,
                    borderWidth: 3,
                    paddingVertical: 10,
                    borderColor: '#4A90E2',
                    width: '90%',
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: 'center'
                }}
            >

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        paddingBottom: 5
                    }}>

               
                    <Text>
                        <Text style={{fontWeight: 'bold' }} > {`$${currentAmount} `}</Text> 
                        out of
                        <Text style={{fontWeight: 'bold' }} > {`$${totalAmount} `}</Text> 
                        raised
                    </Text>

                    
                     <Pressable
                        onPress={() => {}}
                        >
                        {({ pressed }) => (
                            <Text style={{ color: '#ffffffff',
                                backgroundColor: pressed ? '#3367a3ff' : '#4A90E2',
                                borderRadius: 16,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                            }}>Donate</Text>
                        )}
                    </Pressable>

                
                </View>




                <View  // the background 
                    style={{
                        width: '90%', height: 20,
                        borderWidth: 3,
                        borderColor: '#4A90E2',
                        borderRadius: 15
                    }}>

                    <LinearGradient  // the progress bar itself
                        start = {{x: 0, y:0.5}}
                        end = {{x: 1, y:0.5}}
                        colors={['#FFFFFF', '#4A90E2',]}
                        style={{
                            width: `${(currentAmount / totalAmount) * 100}%`, height: '100%',
                            backgroundColor: 'rgba(107, 167, 197, 1)',
                            borderRadius: 15,
                            position: 'absolute'
                        }}>
                    </LinearGradient>

                </View>




            </View>
        );
    }
}


/**
 * <Pressable // change in future to use Pressable if needed... not much customization options
                        onPress={() => {}} // lambda function such that it will go to donate page
                        style={({pressed}) => [
                            {
                                backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#4A90E2'
                            },

                            
                            >{({pressed}) => (

                            <Text style={{color: '#FFFFFF'}}>
                                {pressed ? "Donate": "Donate"}
                            </Text>)}
                       
                       </Pressable>
 */