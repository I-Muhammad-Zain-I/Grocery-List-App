import React, { useState } from 'react'

const useInput = (validityFunc) => {
  const [value, setEnteredValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onValueChangeHandler = (enteredValue) => {
    if(touched == false) {
      setTouched(true);
    }
    setEnteredValue(enteredValue); 
  }

  console.log('touched', touched)

  const isValid =  validityFunc(value) && touched;

  return {
    value,
    isValid,
    touched,
    setTouched,
    onValueChangeHandler
  }
}

export default useInput