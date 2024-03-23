import React, { useCallback, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import InitialScreen from './src/screens/InitialScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import DisplayItemScreen from './src/screens/DisplayItemScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [groceryItems, setGroceryItems] = useState([]);
  const [addItemsModalIsVisible, setAddItemsModalIsVisible] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'lobster-two-regular': require('./assets/fonts/LobsterTwo-Bold.ttf'),
    'lobster-two-bold': require('./assets/fonts/LobsterTwo-Regular.ttf'),
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
  
  const addGroceryItem = (groceryItem) => {
    console.log(groceryItem);
    setGroceryItems((gi) => [groceryItem, ...gi]);
  }






  let screen;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if(addItemsModalIsVisible == true) {
    screen = <AddItemScreen 
                visible={addItemsModalIsVisible}
                setVisible = {addModalVisibleHandler} 
                lastItemId = {!groceryItems.length ? groceryItems[0]?.id : 0}
                addGroceryItem = {addGroceryItem}
              />
  }     
  else if(groceryItems.length == 0) {
    screen = <InitialScreen onAddModalVisible = {addModalVisibleHandler}/>
  }
  else if (groceryItems.length > 0) {
    screen = <DisplayItemScreen 
              groceryItems = {groceryItems}
              onAddModalVisible = {addModalVisibleHandler}

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