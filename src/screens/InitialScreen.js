import React from 'react'
import EmptyCart from '../../assets/images/svgs/EmptyCart'

import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/Color'
import SimpleButton from '../components/SimpleButton'


const InitialScreen = () => {
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
    fontFamily: 'lobster-two-regular',
    fontSize: 24,
    color: COLORS['red-300']
  }

})