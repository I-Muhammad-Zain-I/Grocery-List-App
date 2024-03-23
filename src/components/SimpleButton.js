import React from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import COLORS from '../constants/Color'



const width = Dimensions.get('window').width


const SimpleButton = (props) => {

  // const btnSize = props.size === 'large' ? (width/1.3) : (width/2);
  // const btnBgColor = props.type === 'filled' ? props.color : 'transparent';
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

export default SimpleButton

const styles = StyleSheet.create({
  outerBtnContainer: {
    borderRadius: 30,
    width: "70%",
    overflow: 'hidden',
    alignSelf: 'center'
  },
  innerBtnContainer: {
    backgroundColor: COLORS['orange-200'],
    paddingVertical: 10,
   
  },
  pressed: {
    backgroundColor: COLORS['orange-400'],
    
  },
  buttonText: {
   
  }
})

