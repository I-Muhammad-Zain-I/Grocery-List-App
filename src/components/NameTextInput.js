import React, { forwardRef, useImperativeHandle } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native';
import useInput from '../hooks/UseInput';
import WarningText from './WarningText';
import COLORS from '../constants/Color';


const NameTextInput = forwardRef((props, ref) => {

  const nameValidityFunction = (name) => {
    console.log("bool", Boolean(name.trim()))
    return Boolean(name.trim())
  }
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    onValueChangeHandler: nameChangeHandler
  } = useInput(nameValidityFunction, props.initialValue);


  useImperativeHandle(ref, () => {
    return {
      isValid: nameIsValid,
      value: name,
      nameChangeHandler: nameChangeHandler
    }
  })

  return (
    <>
      <TextInput
        maxLength={40}
        value={name}
        onChangeText={nameChangeHandler}
        style={props.inputStyle}
        placeholder='eg: carrots'
      />
      {nameHasError && <WarningText>Enter valid grocery item.</WarningText>}
    </>
  )
});

export default NameTextInput;
