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
import { removeItem, completeItem } from '../redux/reducer'

import Header from '../components/Header'

function ListView() {
  const listItems = useSelector(state => state.itemList)
  const completeItems = useSelector(state => state.completeList)
  console.log({ completeItems })

  const dispatch = useDispatch()

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center'
      }}>
      {listItems.length !== 0 ? (
        <FlatList
          data={listItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.itemTitle} numberOfLines={2}>
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(completeItem(item.id))}
                style={styles.button1}>
                <Ionicons name='ios-checkmark' color='#fff' size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(removeItem(item.id))}
                style={styles.button}>
                <Ionicons name='ios-close' color='#fff' size={20} />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style= {styles.box}>Yay!! You have no tasks</Text>
      )}
    </View>
  )
}

function ListScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <Header title={'ToDO List'} />
        <ListView />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Modal')}
            style={styles.fabButton}>
            <Ionicons name='ios-add' color='#fff' size={60} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  fabContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 20
  },
  fabButton: {
    backgroundColor: 'blue',
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.25
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '400'
  },
  button1 : {
    borderRadius: 8,
    backgroundColor: 'green',
    position: 'absolute',
    right: 50,
    top: 10,
    padding: 5
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'red',
    padding: 5
  },
  box:{
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default ListScreen