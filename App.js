import { View, Text } from 'react-native'
import React from 'react'
import Contacts from './screens/Contacts'
import Profile from './screens/Profile'
import Favorites from './screens/Favorites'
import User from './screens/User'
import TabNavigator from './components/Routes'
const App = () => {
  return (
    <TabNavigator/>
  )
}

export default App