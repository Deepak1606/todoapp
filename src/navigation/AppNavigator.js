import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ListScreen from '../screens/ListScreen'
import ModalScreen from '../screens/ModalScreen'
import CompleteScreen from '../screens/CompleteScreen'
import SettingScreen from '../screens/SettingScreen'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator()

function MainStackNavigator() {
  return (
      <Stack.Navigator
        screenOptions={{
          presentation: 'modal',
          headerMode: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp'
              })
            }
          })
        }}>
        <Stack.Screen name='List' component={ListScreen} options={{headerShown: false}} />
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Navigator>
  )
}

function CompleteStackNavigator() {
  return (
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='TASKS' component={CompleteScreen} />
      </Stack.Navigator>
  )
}

function SettingNavigator(){
  return(
    <Stack.Navigator >
      <Stack.Screen name="Settings" component={SettingScreen}/>
    </Stack.Navigator>
  )
}
const App = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="ASSIGNED" component={MainStackNavigator} />
      <Tab.Screen name="COMPLETED" component={CompleteStackNavigator} />
    </Tab.Navigator>
  )
}

const D = () => {
  return(
    <NavigationContainer>
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Tasks" component = {App} />
      <Drawer.Screen name="Completed" component = {CompleteStackNavigator} />
      <Drawer.Screen name="Setting" component = {SettingNavigator} />

    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default D