import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Screens
import AnimalList from '../../Pages/AnimalList/AnimalList';
import AddAnimal from '../../Pages/AddAnimal/AddAnimal';
import Animal from '../../Pages/Animal/Animal';
import Home from '../../Pages/Home/Home';

const AnimalStack = createNativeStackNavigator();

function MyStack() {
    return (
        <AnimalStack.Navigator
            initialRouteName='AnimalList'
        >
            <AnimalStack.Screen
                name="AnimalList"
                component={AnimalList}
                options={{ headerShown: false }}
            />
            <AnimalStack.Screen
                name="Animal"
                component={Animal}
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
                tabBarActiveTintColor: 'orange'
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => { return <MaterialCommunityIcons name="home" size={size + 14} color={color} /> }
                }}
            />
            <Tab.Screen
                name="Animals"
                component={MyStack}
                options={{
                    tabBarIcon: ({ size, color }) => { return <MaterialCommunityIcons name="paw" size={size + 18} color={color} /> }
                }}
            />
            <Tab.Screen
                name="AddAnimal"
                component={AddAnimal}
                options={{
                    tabBarIcon: ({ size, color }) => { return <MaterialCommunityIcons name="plus-circle" size={size + 11} color={color} /> }
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