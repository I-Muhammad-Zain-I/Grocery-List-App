import React, { useCallback, useState } from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

import InitialScreen from './src/screens/InitialScreen';
import DisplayItemScreen from './src/screens/DisplayItemScreen';
import UpdateItemScreen from './src/screens/UpdateItemScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [groceryItems, setGroceryItems] = useState([]);
  const [editItem, setEditItem] = useState(() => {});
  const [addItemsModalIsVisible, setAddItemsModalIsVisible] = useState(false);
  const [editItemsModalIsVisible, setEditItemsModalIsVisible] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'lobster-two-bold': require('./assets/fonts/LobsterTwo-Bold.ttf'),
    'notosans-regular': require('./assets/fonts/NotoSans-Regular.ttf'),
    'notosans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);


  const addModalVisibleHandler = (value) => {
    setAddItemsModalIsVisible(value)
  }
  const editModalVisibleHandler = (value) => {
    setEditItemsModalIsVisible(value)
  }
  
  const addGroceryItem = (groceryItem) => {
    console.log(groceryItem);
    setGroceryItems((gi) => [groceryItem, ...gi]);
  }

  const removeGroceryItem = (groceryItemId) => {
    console.log("removing");
    console.log(groceryItemId);
    let newGroceryList = groceryItems.filter((item) => item.id !== groceryItemId);
    setGroceryItems(newGroceryList);
  }

  const editGroceryItem = (editedGroceryItem) => {
    console.log(editedGroceryItem);
    let modifiedGroceryList = groceryItems.map((item) => item.id != editedGroceryItem.id ? item : editedGroceryItem);
    setGroceryItems(modifiedGroceryList);
  }

  let screen;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if(addItemsModalIsVisible == true) {
    screen =  <UpdateItemScreen 
                title = "Add Grocery Items"
                visible={addItemsModalIsVisible}
                setVisible = {addModalVisibleHandler} 
                confirmButtonText = {"Add"}
                onItemUpdate = {addGroceryItem}
              />
  } 
  else if (editItemsModalIsVisible == true) {
    screen =  <UpdateItemScreen 
                title = "Edit Grocery Items"
                visible={editItemsModalIsVisible}
                setVisible = {editModalVisibleHandler} 
                confirmButtonText = {"Edit"}
                onItemUpdate = {editGroceryItem}
                editItem = {editItem}
              />

  }    
  else if(groceryItems.length == 0) {
    screen = <InitialScreen onAddModalVisible = {addModalVisibleHandler}/>
  }
  else if (groceryItems.length > 0) {
    screen = <DisplayItemScreen 
              groceryItems = {groceryItems}
              onAddModalVisible = {addModalVisibleHandler}
              onEditModalVisible = {editModalVisibleHandler}
              removeGroceryItem = {removeGroceryItem}
              setEditItem = {setEditItem}
    />
    
  }
  
  return (
    <SafeAreaView
      style={styles.rootContainer}
      onLayout={onLayoutRootView}
    >
       {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  }
})