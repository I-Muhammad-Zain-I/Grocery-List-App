import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import COLORS from '../constants/Color';
import useInput from '../hooks/UseInput';
import WarningText from '../components/WarningText';
import Title from '../components/Title';
import SimpleButton from '../components/SimpleButton';
const AddItemScreen = (props) => {

  const nameValidityFunction = (name) => {
    console.log("bool",  Boolean(name.trim()))
    return Boolean(name.trim())
  }
  const quantityValidityFunction = (quantity) => {
    console.log("pareseInt",  !isNaN(parseInt(quantity)))
    return !isNaN(parseInt(quantity));
  }


  const {
    value: name,
    isValid: nameIsValid,
    onValueChangeHandler: nameChangeHandler
  } = useInput(nameValidityFunction);

  const {
    value: quantity,
    isValid: quantityIsValid,
    onValueChangeHandler: quantityChangeHandler
  } = useInput(quantityValidityFunction);


  const AddItemHandler = () => {
    if (!nameIsValid || !quantityIsValid) {
      console.log(nameIsValid, quantityIsValid)
      Alert.alert("Invalid Inputs", "Please Provide Valid Inputs", [
        {"text": "Okay", "style" : "destructive", "onPress": resetHandler}
      ])
      return;
    }
    let newGroceryItem = {
      id: props.lastItemId + 1,
      name: name,
      quantity: quantity
    }
    props.addGroceryItem(newGroceryItem);
    cancelHandler();
  }
  const cancelHandler = () => {
    props.setVisible(false);
  }
  
  const resetHandler = () => {
    nameChangeHandler("");
    quantityChangeHandler("");
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.rootContainer}>
        <Title>Add Grocery Items</Title>
        <View style={styles.inputOuterContainer}>
          <View style={styles.inputInnerContainer}>
            <Text style={styles.inputLabel}>Grocery Item</Text>
            <TextInput
              maxLength={40}
              value={name}
              onChangeText={nameChangeHandler}
              style={styles.input}
              placeholder='eg: carrots'
            />
            {!nameIsValid && <WarningText>Enter valid grocery item.</WarningText>}
          </View>
          <View style={styles.inputInnerContainer}>
            <Text style={styles.inputLabel}>Quantity</Text>
            <TextInput
              maxLength={4}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              value={quantity}
              onChangeText={quantityChangeHandler}
              style={styles.input}
              placeholder='eg: 3'

            />
            {!quantityIsValid && <WarningText>Enter valid numeric quantity.</WarningText>}
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <SimpleButton
            title="Add Items"
            border={true}
            bgColor={COLORS['orange-200']}
            hoverBgColor={COLORS['orange-400']}
            width={"40%"}
            textColor={COLORS['orange-800']}
            onPress = {AddItemHandler}
          />
          <SimpleButton
            title="Cancel"
            border={true}
            bgColor={'transparent'}
            hoverBgColor={COLORS['orange-400']}
            width={"40%"}
            textColor={COLORS['orange-800']}
            onPress = {cancelHandler}
          />
        </View>
      </View>
    </Modal>
  )
}

export default AddItemScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    rowGap: 50,

  },
  inputOuterContainer: {

    alignItems: 'center'
  },
  inputInnerContainer: {
    width: '80%',
    marginBottom: 16,


  },
  inputLabel: {
    color: "#A9A9A9"
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 20,
    borderColor: COLORS['green-400'],
    color: COLORS['green-600'],
    borderWidth: 2,
    marginVertical: 4,

    borderRadius: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    columnGap: 8,
    alignSelf: 'center'
  }

})