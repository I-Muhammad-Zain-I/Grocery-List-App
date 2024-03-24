import React, { useRef } from 'react'
import { Alert, Modal, StyleSheet, Text, View } from 'react-native'
import NameTextInput from '../components/NameTextInput'
import QuantityNumberInput from '../components/QuantityNumberInput'
import SimpleButton from '../components/SimpleButton'
import COLORS from '../constants/Color'
import Title from '../components/Title'

const UpdateItemScreen = (props) => {
  /**
   * Generic Screen Component for Adding and Editing Grocery Items -> thus named modifying
   * Difference with respective to UI is understandable by looking at props in App.js
   * the only LOGICAL difference is in updateItemHandler when creating updated object
   *  it determines whether this is editMode or not by checking editItem props
   *  editItem props is only passed when this element is used for editing
   *  if editItem prop is undefined this means that we are in Add mode and thus it generate 
   *  new random id
   */

  const nameRef = useRef();
  const quantityRef = useRef();

  const updateItemHandler = () => {
    if (nameRef.current && quantityRef.current) {

      if (!nameRef.current.isValid || !quantityRef.current.isValid) {
        console.log(!nameRef.current.isValid, !quantityRef.current.isValid)
        Alert.alert("Invalid Inputs", "Please Provide Valid Inputs", [
          { "text": "Okay", 
            "style": "destructive", 
            "onPress": resetHandler 
          }
        ])
        return;
      }

      let updatedGroceryItem = {
        id: props.editItem?.id ?? Math.floor(Math.random() * 300) + 1,
        name: nameRef.current.value,
        quantity: quantityRef.current.value
      }

      props.onItemUpdate(updatedGroceryItem);
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


    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.rootContainer}>
          <Title>{props.title}</Title>
          <View style={styles.inputOuterContainer}>
            <View style={styles.inputInnerContainer}>
              <Text style={styles.inputLabel}>Grocery Item</Text>
              <NameTextInput
                ref={nameRef}
                initialValue={props.editItem?.name}
                inputStyle={styles.input}
              />
            </View>
            <View style={styles.inputInnerContainer}>
              <Text style={styles.inputLabel}>Quantity</Text>
              <QuantityNumberInput
                ref={quantityRef}
                initialValue={props.editItem?.quantity}
                inputStyle={styles.input}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <SimpleButton
              title={props.confirmButtonText}
              border={true}
              bgColor={COLORS['orange-200']}
              hoverBgColor={COLORS['orange-400']}
              width={"40%"}
              textColor={COLORS['orange-800']}
              onPress={updateItemHandler}
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


  export default UpdateItemScreen