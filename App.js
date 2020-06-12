import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Details from './components/Details';
import DeckDetails from './components/DeckDetails';
import { setLocalNotification } from './utils/helpers'

const HomeTabs = createBottomTabNavigator()

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <SafeAreaProvider>
          <NavigationContainer>
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
              <HomeTabs.Screen name="Decks" component={DeckDetails} />
              <HomeTabs.Screen name="New Deck" component={NewDeck} />
          </HomeTabs.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
    );
  }
}
