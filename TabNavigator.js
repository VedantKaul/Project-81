import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CreateBottomNavigator } from 'react navigation/bottom-tabs'
import Feed from '../Screens/Feed'
import CreatePost from '../Screens/CreatePost'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name = 'Feed' component = {Feed}/>
      <Tab.Screen name = 'CreatePost' component = {CreatePost}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator