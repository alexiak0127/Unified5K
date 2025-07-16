/**
 * Josh Ilano
 * Boston University
 * 7-16-2025
 */


import { Button, Text, View } from "react-native";
import { useState, useEffect } from 'react';

/**
 * 
 * @param currentAmount and totalAmount
 * 
 * @returns Donation Bar UI Element
 */
export default function DonationBar(currentAmount: number, totalAmount: number) {

    if (currentAmount <= totalAmount) {
        return (

            <View
                style={{ // the UI is currently only intended for vertical phones, change as needed in future
                    position: 'absolute',
                    height: 125,
                    borderRadius: 15,
                    borderWidth: 3,
                    width: '80%',
                    justifyContent: "center",
                    alignItems: "center",

                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        gap: 5
                    }}>

                    <Text style={{ width: '50%' }} >
                        {"$" + currentAmount + " out of $" + totalAmount + " goal reached"}
                    </Text>

                    <Button // change in future to use Pressable if needed... not much customization options
                        title="Donate"
                        onPress={() => {}} // lambda function such that it will go to donate page
                    />
                </View>




                <View  // the background 
                    style={{
                        width: '90%', height: 20,
                        borderWidth: 3,
                        borderRadius: 15
                    }}>

                    <View  // the progress bar itself
                        style={{
                            width: `${(currentAmount / totalAmount) * 100}%`, height: '100%',
                            backgroundColor: 'rgba(107, 167, 197, 1)',
                            borderRadius: 15,
                            position: 'absolute'
                        }}>
                    </View>

                </View>




            </View>
        );
    }


}