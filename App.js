import React, { useCallback } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import InitialScreen from './src/screens/InitialScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
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

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView
      style={styles.rootContainer}
      onLayout={onLayoutRootView}
    >
       <InitialScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  }
})