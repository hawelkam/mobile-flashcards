import React from 'react'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import Quiz from './Quiz'
import AddQuestion from './AddQuestion'
import Details from './Details'

const DetailsStack = createStackNavigator()

export default function DeckDetails({navigation}) {
    return (
        <DetailsStack.Navigator>
            <DetailsStack.Screen name="Details" component={Details} />
            <DetailsStack.Screen name="Add Question" component={AddQuestion} options={{
                headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
                ),
            }}/>
            <DetailsStack.Screen name="Quiz" component={Quiz} />
        </DetailsStack.Navigator>
    );
  }