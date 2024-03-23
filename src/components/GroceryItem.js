import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import COLORS from '../constants/Color'
import IconButton from './IconButton'

const GroceryItem = (props) => {

  const onPressHandler = () => {
    console.log("List Item Pressed");
    props.onRemove(props.item.id)
  }



  return (
    <Pressable 
      style={({pressed}) => (pressed ? [styles.rootContainer, styles.pressed] : styles.rootContainer)}
      onPress={onPressHandler}
    >
     
        <View style={styles.textContainer}>
          <Text style={[styles.itemText, styles.quantityText]}>{props.item.quantity}x</Text>
          <Text style={[styles.itemText, styles.nameText]}>{props.item.name}</Text>
        </View>
        <View style={styles.imagesContainer}>
          {/* <IconButton source={require('../../assets/images/done.png')} /> */}
          <IconButton 
            source={require('../../assets/images/edit.png')} 
            bgColor = {COLORS['turquoise-100']}
          />
          {/* <IconButton source={require('../../assets/images/delete.png')} /> */}
        </View>
     
    </Pressable>
  )
}

export default GroceryItem

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS['green-200'],
    width: '90%',
    marginTop: 12,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.7
  },
  textContainer: {
    flexDirection: 'row',
    columnGap: 12,
  },
  itemText: {
    fontFamily: 'notosans-regular',
    fontWeight: 'bold',
    fontSize: 20
  },
  quantityText: {
    color: 'white'
  },
  nameText: {
    color: COLORS['green-600'],
  },
  imagesContainer: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center'
  }
})