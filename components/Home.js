import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HomeTabs = createBottomTabNavigator()

export default function Home() {
    return (
        <HomeTabs.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Decks') {
                    iconName = focused
                    ? 'cards'
                    : 'cards-outline';
                } else if (route.name === 'New Deck') {
                    iconName = focused ? 'plus-circle' : 'plus-circle-outline';
                }
    
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
          >
            <HomeTabs.Screen name="Decks" component={DeckList} />
            <HomeTabs.Screen name="New Deck" component={NewDeck} />
        </HomeTabs.Navigator>
    );
  }