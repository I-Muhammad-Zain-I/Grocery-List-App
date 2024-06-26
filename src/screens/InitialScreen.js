import React from 'react'
import EmptyCart from '../../assets/images/svgs/EmptyCart'

import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/Color'
import SimpleButton from '../components/SimpleButton'


const InitialScreen = (props) => {


  const onPressHandler = () => {
    props.onAddModalVisible(true);
  }


  return (
    <View style={styles.rootContainer}>
      <Text style={styles.headerText}>
        Build Your Grocery List Here!
      </Text>
      <View style={styles.imageContainer}>
        <EmptyCart />
      </View> 
      <SimpleButton 
        title = "Add Items"
        border= {true}
        bgColor = {COLORS['orange-200']}
        hoverBgColor = {COLORS['orange-400']}
        width = {"70%"}
        textColor = {COLORS['orange-800']}
        onPress={onPressHandler}
      />
    </View>
  )
}

export default InitialScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 100
  },
  imageContainer: {
    width: 300,
    height: 300,
    padding: 50,    
    borderRadius: 500,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: COLORS['dark-purple-100']
  },
  headerText: {
    fontFamily: 'lobster-two-bold',
    fontSize: 24,
    color: COLORS['red-300']
  }

})