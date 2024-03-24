import React, { useState } from 'react'

const useInput = (validityFunc, initialValue) => {
  const [value, setEnteredValue] = useState(initialValue ?? "");
  const [istouched, setIsTouched] = useState(initialValue != undefined ? true : false);

  console.log("touched", istouched)

  const onValueChangeHandler = (enteredValue) => {
    if(istouched == false) {
      setIsTouched(true);
    }
    setEnteredValue(enteredValue); 
  }

  console.log('istouched', istouched)

  const isValid =  validityFunc(value);

  const hasError = !isValid && istouched;
  
  return {
    value,
    isValid,
    hasError,
    onValueChangeHandler
  }
}

export default useInput