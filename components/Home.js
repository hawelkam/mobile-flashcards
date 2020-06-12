import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeTabs = createBottomTabNavigator()

export default function Home() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <HomeTabs.Navigator>
                    <HomeTabs.Screen name="Decks" component={DeckList} />
                    <HomeTabs.Screen name="NewDeck" component={NewDeck} />
                </HomeTabs.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
  }