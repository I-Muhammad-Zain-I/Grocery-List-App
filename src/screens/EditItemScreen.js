import React, { useRef } from 'react'
import { Alert, Modal, StyleSheet, Text, View } from 'react-native'
import useInput from '../hooks/UseInput'
import NameTextInput from '../components/NameTextInput'
import QuantityNumberInput from '../components/QuantityNumberInput'
import SimpleButton from '../components/SimpleButton'
import COLORS from '../constants/Color'
import Title from '../components/Title'

const EditItemScreen = (props) => {
  /**
   * It is not being used and contains newer code than AddItemScreen
   * props:
   * visible = {editItemsModalIsVisible}
     editItem = {editItem}
     setVisible = {editModalVisibleHandler}
     editGroceryItem = {editGroceryItem}
   */



  const nameRef = useRef();
  const quantityRef = useRef();


  const editItemHandler = () => {
    if(nameRef.current && quantityRef.current) {
      
      if (!nameRef.current.isValid || !quantityRef.current.isValid) {
        console.log(!nameRef.current.isValid, !quantityRef.current.isValid)
        Alert.alert("Invalid Inputs", "Please Provide Valid Inputs", [
          {"text": "Okay", "style" : "destructive", "onPress": resetHandler}
        ])
        return;
      }

      // CHANGE 1: Pass a disitinct function to be used here!
      // Check here if props.editItemExists then pass id else useRandomfunction
      // Add function will take
      // modification function will take name, quantity
      
      let modifiedGroceryItem = {
        id: props.editItem.id,
        name: nameRef.current.value,
        quantity: quantityRef.current.value
      }

      props.editGroceryItem(modifiedGroceryItem);
      cancelHandler();
    }
  }

  const cancelHandler = () => {
    props.setVisible(false);
  }

  const resetHandler = () => {
    nameRef?.current.nameChangeHandler("");
    quantityRef?.current.quantityChangeHandler("");
  }


  // CHANGE 2: Pass Proper Visible, setVisible corresponding Attribute
  // CHANGE 3: Pass EditItem prop for EditScreen
  // CHANGE 4: Pass Confirm Button Prop
  // CHANGE 5: Pass Label {Add, Edit} correspondingly

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.rootContainer}>
        <Title>Edit Grocery Items</Title>
        <View style={styles.inputOuterContainer}>
          <View style={styles.inputInnerContainer}>
            <Text style={styles.inputLabel}>Grocery Item</Text>
            <NameTextInput
              ref={nameRef}
              initialValue = {props.editItem?.name}
              inputStyle = {styles.input}
            />
          </View>
          <View style={styles.inputInnerContainer}>
            <Text style={styles.inputLabel}>Quantity</Text>
            <QuantityNumberInput
              ref={quantityRef}
              initialValue = {props.editItem?.quantity}
              inputStyle = {styles.input}
            />
          </View>
          </View>
          <View style={styles.buttonsContainer}>
            <SimpleButton
              title="Edit"
              border={true}
              bgColor={COLORS['orange-200']}
              hoverBgColor={COLORS['orange-400']}
              width={"40%"}
              textColor={COLORS['orange-800']}
              onPress={editItemHandler}
            />
            <SimpleButton
              title="Cancel"
              border={true}
              bgColor={'transparent'}
              hoverBgColor={COLORS['orange-400']}
              width={"40%"}
              textColor={COLORS['orange-800']}
              onPress={cancelHandler}
            />
          </View>
        </View>
    </Modal>

  )
}

export default EditItemScreen;

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