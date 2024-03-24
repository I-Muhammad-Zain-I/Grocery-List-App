import React from 'react'
import { Image, StyleSheet, View, Pressable } from 'react-native'


const IconButton = (props) => {

  const onPressHandler = () => {
    console.log("Icon Button Pressed");
    props.onPress(true);
  }


  const imageContainerStyles = {
    padding: 8,
    borderRadius: 10,
    backgroundColor: props.bgColor
  }


  return (
    <View>
      <Pressable
        style={({ pressed }) => (pressed ? [imageContainerStyles, styles.pressed] : imageContainerStyles)}
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
    padding: 8,
    borderRadius: 10
  },
  pressed: {
    opacity: 0.6
  }
})

