/**
 * Josh Ilano
 * Boston University
 * 7-16-2025
 */


import { Button, Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';
import {useFonts} from 'expo-font';

/**
 * 
 * @param currentAmount and totalAmount
 * 
 * @returns Donation Bar UI Element
 */
export default function DonationBar({currentAmount, totalAmount}: {currentAmount: number, totalAmount: number}) {

    const [fontsLoaded] = useFonts({
        "Poppins": require('../assets/fonts/Poppins-Regular.ttf'),
        "Poppins-Bold": require('../assets/fonts/Poppins-SemiBold.ttf'),
       "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
    });


    if (currentAmount <= totalAmount) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    ${currentAmount} out of ${totalAmount} goal reached
                </Text>

            <View style={styles.progressBackground}>
            <View
                style={[
                styles.progressFill,
                { width: `${(currentAmount / totalAmount) * 100}%` },
                ]}
            />
            </View>

            <View style={styles.buttonContainer}>
            <Button
                title="Donate"
                onPress={() => {}}
                color="#00AEEF"
            />
            </View>
        </View>
        );
    }
    }

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#00AEEF',
    borderRadius: 8,
    padding: 12,
    margin: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBackground: {
    width: '100%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00AEEF',
  },
  buttonContainer: {
    alignItems: 'flex-start',
  },
});
/**
            <View
                style={{ // the UI is currently only intended for vertical phones, change as needed in future
                    padding: 16,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 12,
                    width: '100%',
                    marginTop: 16,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 2,
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        gap: 5
                    }}>

                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }} >
                        {"$" + currentAmount + " out of $" + totalAmount + " goal reached"}
                    </Text>

                    <Button // change in future to use Pressable if needed... not much customization options
                        title="Donate"
                        onPress={() => {}} // lambda function such that it will go to donate page
                    />
                </View>




                <View  // the background 
                    style={{
                        width: '100%',
                        height: 20,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 10,
                        backgroundColor: '#e0e0e0',
                        overflow: 'hidden',
                        marginBottom: 16,
                    }}>

                    <View  // the progress bar itself
                        style={{
                            width: `${(currentAmount / totalAmount) * 100}%`, height: '100%',
                            backgroundColor: 'rgba(107, 167, 197, 1)',
                            borderRadius: 15,
                        }}>
                    </View>
                    
                    <View style={{ alignItems: 'center' }}>
                        <Button
                            title="Donate"
                            onPress={() => {
                            }}
                            color="#00AEEF"
                        />
                    </View>
                </View>




            </View>
        );
    }

 
}
*/
