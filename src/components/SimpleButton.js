import React from 'react'
import { View, Text, Pressable } from 'react-native'


const SimpleButton = (props) => {
  
  const btnBorderRadius = props.border ? 30 : 5;
  const border = props.bgColor == 'transparent' ? true : false; 

  const outerBtnContainerStyle = {
    borderRadius: btnBorderRadius,
    width: props.width,
    overflow: 'hidden',
    alignSelf: 'center'
  }
  const innerBtnContainerStyle = {
    borderRadius: btnBorderRadius,
    backgroundColor: props.bgColor,
    paddingVertical: 10,
    borderWidth: border ? 2 : 0,
    borderColor: border ? props.textColor : 'transparent'
  }
  const btnText = {
    fontFamily: 'notosans-bold',
    fontSize: 20,
    color: props.textColor,
    textAlign: 'center'
  }
  const pressedStyle = {
    opacity: 0.8
  }

  const onPressHandler = () => {
    console.log("Pressed Simple Button")
    props.onPress()
  }

  return (
    <View style={outerBtnContainerStyle}>
      <Pressable 
      style={({pressed}) => (pressed ? [innerBtnContainerStyle, pressedStyle]: innerBtnContainerStyle)}
      onPress={onPressHandler}
      >
        <Text style={btnText}>{props.title}</Text>

      </Pressable>
    </View>
  )
}

export default SimpleButton;
