import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import COLORS from '../constants/Color'
const SimpleButton = (props) => {

  const onPressHandler = () => {
    console.log("Pressed Simple Button")
  }

  return (
    <View style={styles.outerBtnContainer}>
      <Pressable 
      style={({pressed}) => (pressed ? [styles.innerBtnContainer, styles.pressed]: styles.innerBtnContainer)}
      onPress={onPressHandler}
      >
        <Text style={styles.buttonText}>{props.title}</Text>

      </Pressable>
    </View>
  )
}

export default SimpleButton

const styles = StyleSheet.create({
  outerBtnContainer: {
    borderRadius: 30,
    width: "70%",
    overflow: 'hidden'
  },
  innerBtnContainer: {
    backgroundColor: COLORS['orange-200'],
    paddingVertical: 10,
   
  },
  pressed: {
    backgroundColor: COLORS['orange-400'],
    
  },
  buttonText: {
    fontFamily: 'notosans-bold',
    fontSize: 20,
    color: COLORS['orange-800'],
    textAlign: 'center'
  }
})