import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Screens/Home';
import Details from './Screens/Details';
import Court from './Screens/Court';
import Players from './Screens/Players';
import Objects from './Screens/Objects';
import Library from './Screens/Library';

/*
{
    
    Home: Home,
    Details: Details,
    Court: Court,
    Players: Players,
    Objects: Objects,
    Library: Library,  
    },
    */

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Court: Court,
        Players: Players,
        Objects: Objects,
        Library: Library, 
      },
      {
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#2C313C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      }
);



export default createAppContainer(AppNavigator);

