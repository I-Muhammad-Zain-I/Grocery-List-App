import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import COLORS from '../constants/Color';
import useInput from '../hooks/UseInput';
import WarningText from '../components/WarningText';
const AddItemScreen = (props) => {

  const nameValidityFunction = (name) => {
    return !Boolean(name.trim())
  }
  const quantityValidityFunction = (quantity) => {
    return isNaN(parseInt(quantity));
  }


  const {
    value: name,
    isInValid: nameIsInValid,
    onValueChangeHandler: nameChangeHandler
  } = useInput(nameValidityFunction);

  const {
    value: quantity,
    isInValid: quantityIsInValid,
    onValueChangeHandler: quantityChangeHandler
  } = useInput(quantityValidityFunction);


  // const [name, setName] = useState('');
  // const [quantity, setQuantity] = useState('');


  // const nameChangeHandler = (enteredName) => {
  //   setName(enteredName);
  // }

  // const quantityChangeHandler = (enteredQuantity) => {
  //   setQuantity(enteredQuantity)
  // }

  const AddItemHandler = () => {
    if (!nameIsInValid && !quantityIsInValid) {
      console.log('Inputs Are Valid');
    }
  }




  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.rootContainer}>
        <View style={styles.inputOuterContainer}>
          <View style={styles.inputInnerContainer}>
            <TextInput
              maxLength={40}
              value={name}
              onChangeText={nameChangeHandler}
              style={styles.input}
              placeholder='Enter Grocery Item'
            />
            {nameIsInValid && <WarningText>Enter Valid Name.</WarningText>}
          </View>
          <View style={styles.inputInnerContainer}>
            <TextInput
              maxLength={4}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              value={quantity}
              onChangeText={quantityChangeHandler}
              style={styles.input}
              placeholder='Enter Item Quantity'
            />
            {quantityIsInValid && <WarningText>Enter Valid Numeric quantity Please</WarningText>}
          </View>
        </View>

      </View>
    </Modal>
  )
}

export default AddItemScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    flex: 1,
  },
  inputOuterContainer: {
    flex: 1,
    alignItems: 'center'
  },
  inputInnerContainer: {
    width: '80%',
    marginBottom: 16,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 20,
    borderColor: COLORS['dark-purple-100'],
    color: COLORS['orange-200'],
    borderWidth: 2,
    marginVertical: 4,
    fontWeight: 'bold',

  }

})