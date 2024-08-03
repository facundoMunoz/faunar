import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Screens
import Home from '../../Pages/Home/Home';
import AnimalList from '../../Pages/AnimalList/AnimalList';
import AddAnimal from '../../Pages/AddAnimal/AddAnimal';

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
                component={AnimalList}
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