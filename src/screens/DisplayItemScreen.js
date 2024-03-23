import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import COLORS from '../constants/Color';
import GroceryItem from '../components/GroceryItem';

const DisplayItemScreen = (props) => {

  const onPressHandler = () => {
    props.onAddModalVisible(true);
  }


  return (
    <View style={styles.rootContainer}>
      <SimpleButton
        title="Add Items"
        border={true}
        bgColor={COLORS['orange-200']}
        hoverBgColor={COLORS['orange-400']}
        width={"40%"}
        textColor={COLORS['orange-800']}
        onPress = {onPressHandler}
      />
      {/* Search Bar */}
     
      <View style={styles.listItemContainer}>
        <FlatList 
          data={props.groceryItems}
          renderItem={(itemData) => <GroceryItem item = {itemData.item} />}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={true}
        />
      </View>
     
    </View>
  )
}

export default DisplayItemScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  listItemContainer: {
    alignSelf: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: "red",
    
  }
})