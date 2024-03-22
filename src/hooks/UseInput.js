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

  

  const isInValid =  validityFunc(value) && touched;

  return {
    value,
    isInValid,
    touched,
    setTouched,
    onValueChangeHandler
  }
}

export default useInput