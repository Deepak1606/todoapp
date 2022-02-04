import React from 'react'
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, completeItem, clearItem } from '../redux/reducer'

import Header from '../components/Header'

function Settings (){
    return(
        <View>
            <Text>Permissions and Notifications</Text>
        </View>
    )
}

export default Settings