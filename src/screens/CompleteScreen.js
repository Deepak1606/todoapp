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

function CompleteListView() {
    const listItems = useSelector(state => state.completeList)
  
    const dispatch = useDispatch()
  
    return (
      <View style={{flex: 1, backgroundColor: 'white',padding: 10}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        {listItems.length !== 0 ? (
          <FlatList
            data={listItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Text style={styles.title} >
                {item.name}
                </Text>
                <Text style={styles.date}>
                  Task Completed at {item.date.toString()}
                </Text>
                
              </View>
            )}
          />
        ) : (
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Completed tasks will appear here</Text>
        )}
      </View>
      <View style={{position: 'absolute',backgroundColor: 'blue', left:0, right:0, bottom:0,height:40}}>
        <TouchableOpacity
            onPress={() =>dispatch(clearItem())}
            >
            <Text style={{color:'white', fontWeight:'bold', textAlign: 'center', fontSize: 30}}>CLEAR ALL</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#9CF089',
      paddingTop: 10,
      paddingBottom: 5,
      paddingRight: 5,
      justifyContent: 'space-evenly',
      width: '100%',
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderRadius: 20,
      shadowColor: 'grey'
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center',
      color: 'purple'
      
    },
    date:{
      textAlign: 'center',
      fontWeight: 'bold'
    }
  })
  export default CompleteListView