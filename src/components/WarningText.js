import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/Color'

const WarningText = (props) => {
  return (
    <View style={styles.warningContainer}>
      <Image
        source={require('../../assets/images/warningIcon.png')}
        style={{width: 20, height: 20}}
      />
      <Text style={styles.warningText}>{props.children}</Text>
    </View>
  )
}

export default WarningText

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8
  },
  warningText: {
    color: COLORS['red-100'],
    fontSize: 16,
    width: '70%'
  }
})