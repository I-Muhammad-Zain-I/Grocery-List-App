import React, { forwardRef, useImperativeHandle } from 'react'
import useInput from '../hooks/UseInput';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import COLORS from '../constants/Color';
import WarningText from './WarningText';

const QuantityNumberInput = forwardRef((props, ref) => {




  const quantityValidityFunction = (quantity) => {
    console.log("pareseInt", !isNaN(parseInt(quantity)))
    return !isNaN(parseInt(quantity));
  }

  const {
    value: quantity,
    isValid: quantityIsValid,
    hasError: quantityHasError,
    onValueChangeHandler: quantityChangeHandler
  } = useInput(quantityValidityFunction, props.initialValue);

  useImperativeHandle(ref, () => {
    return {
      isValid: quantityIsValid,
      value: quantity,
      quantityChangeHandler: quantityChangeHandler
    }
  })

  return (
    <>
      <TextInput
        maxLength={4}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={quantity}
        onChangeText={quantityChangeHandler}
        style={props.inputStyle}
        placeholder='eg: 3'

      />
      {quantityHasError && <WarningText>Enter valid numeric quantity.</WarningText>}
    </>
  )
});

export default QuantityNumberInput;
