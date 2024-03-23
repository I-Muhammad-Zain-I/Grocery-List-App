import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/Color'

const Title = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{props.children}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    borderWidth: 3,
    borderColor: COLORS['dark-purple-100'],
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center'
  },
  titleText: {
    color: COLORS['dark-purple-100'],
    fontWeight: 'bold',
    fontSize: 24
  }
})