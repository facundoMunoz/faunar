import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Screens
import AnimalList from '../../Pages/AnimalList/AnimalList';
import AddAnimal from '../../Pages/AddAnimal/AddAnimal';
import Animal from '../../Pages/Animal/Animal';
import Home from '../../Pages/Home/Home';

const AnimalStack = createNativeStackNavigator();

function MyStack() {
  return (
    <AnimalStack.Navigator initialRouteName='AnimalList'>
      <AnimalStack.Screen
        name='AnimalList'
        component={AnimalList}
        options={{ headerShown: false }}
      />
      <AnimalStack.Screen
        name='Animal'
        component={Animal}
        options={({ navigation }) => ({
          headerTintColor: '#fff',
          title: null,
          headerTransparent: true,
          headerBackVisible: false,

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: 'rgba(0,0,0,.3)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FontAwesome6 name='arrow-left-long' size={20} color='white' />
            </TouchableOpacity>
          ),
        })}
      />
    </AnimalStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          borderWidth: 1,
          borderColor: 'lightgray',
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={size + 8}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Animals'
        component={MyStack}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'paw' : 'paw-outline'}
                size={focused ? size + 5 : size + 4}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='AddAnimal'
        component={AddAnimal}
        options={{
          headerShown: true,
          title: 'Añadir animal',
          headerTitleStyle: { fontWeight: '400', color: 'orange' },

          tabBarIcon: ({ size, color, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'plus-circle' : 'plus-circle-outline'}
                size={size + 8}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
