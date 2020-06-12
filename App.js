import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import DeckDetails from './components/DeckDetails'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DeckDetails" component={DeckDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
