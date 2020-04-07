import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

import HomeScreen from './screens/Home';
import AddButton from './components/AddButton';

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{showLabel: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="book-medical" size={24} color="#cdccce" />
            ),
          }}
        />

        <Tab.Screen
          name="Measures"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="heartbeat" size={24} color="#cdccce" />
            ),
          }}
        />

        <Tab.Screen
          name="Add"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <AddButton />,
          }}
        />

        <Tab.Screen
          name="Treatment"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="band-aid" size={24} color="#cdccce" />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="user" size={24} color="#cdccce" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
