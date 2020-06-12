import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Quiz from './Quiz'
import AddQuestion from './AddQuestion'
import Details from './Details'

const DetailsStack = createStackNavigator()

export default function DeckDetails() {
    return (
        <DetailsStack.Navigator>
            <DetailsStack.Screen name="Details" component={Details} />
            <DetailsStack.Screen name="Add Question" component={AddQuestion} />
            <DetailsStack.Screen name="Quiz" component={Quiz} />
        </DetailsStack.Navigator>
    );
  }