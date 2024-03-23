import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import COLORS from '../constants/Color';
import IconButton from './IconButton';
const Searchbar = (props) => {
  const [searchVal, setSearchVal] = useState('');

  const searchValChangeHandler = (value) => {
      console.log(value);
      setSearchVal(value)
      if(value.length == 0) {
        props.onSearch(value)
      }
  }

  const DisplaySearchItemsHandler = () => {
    props.onSearch(searchVal.trim().toLowerCase());
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TextInput
          maxLength={40}
          value={searchVal}
          onChangeText={searchValChangeHandler}
          style={styles.input}
          placeholder='eg: carrots'
        />
        <IconButton 
          source = {require('../../assets/images/search.png')}
          bgColor = {COLORS['green-600']}
          onPress = {DisplaySearchItemsHandler}
        />
      </View>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',

  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: COLORS['green-400'],
    borderWidth: 2,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
   
    fontSize: 20,
    color: COLORS['green-600'],
    marginVertical: 4,
    width: '70%',
   
  },
})