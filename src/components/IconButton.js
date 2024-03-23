import React from 'react'
import { Image, StyleSheet, View, Pressable } from 'react-native'
import COLORS from '../constants/Color'


const IconButton = (props) => {

  const onPressHandler = () => {
    console.log("Icon Button Pressed");
  }








  return (
    <View>
      <Pressable
      style={({pressed}) => (pressed ? [styles.imageContainer, styles.pressed] : styles.imageContainer)}
      onPress={onPressHandler}
      >
        <Image 
          source={props.source}
          style={styles.image}
        />
      </Pressable>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24
  },
  imageContainer: {
    backgroundColor: COLORS['turquoise-100'],
    padding: 8,
    borderRadius: 10
  },
  pressed: {
    opacity: 0.6
  }
})

