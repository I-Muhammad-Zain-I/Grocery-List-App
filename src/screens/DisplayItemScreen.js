import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import GroceryItem from '../components/GroceryItem';
import Searchbar from '../components/Searchbar';
import COLORS from '../constants/Color';

const DisplayItemScreen = (props) => {
  const [searchedItems, setSearchedItems] = useState([]);
  // used to manage state if searched item does not matches existing items.
  const [showNotFound, setShowNotFound] = useState(false);

  const onPressHandler = () => {
    props.onAddModalVisible(true);
  }

  const removeHandler = (id) => {
    props.removeGroceryItem(id)
  }

  const searchHandler = (searchValue) => {
    if (searchValue.length == 0) {
      setSearchedItems([])
      setShowNotFound(false)
      return;
    };

    let searchedItems = props.groceryItems?.filter((item) => (item.name.toLowerCase()).includes(searchValue))
    console.log("searched Item", searchedItems)
    
    // Tackles case when 
    /**
     * searchItem not found and message shows, after user starts to type we would then check else condition
     * as input.length > 0 thus removing message from display
     */
    if (searchedItems.length == 0) setShowNotFound(true)
    else if (showNotFound == true) setShowNotFound(false)
    setSearchedItems(searchedItems)
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
        onPress={onPressHandler}
      />

      <Searchbar onSearch={searchHandler} />

      <View style={styles.listItemContainer}>

        {showNotFound ?

          (<View style={styles.searchFailedContainer}>
            <Image style={styles.searchFailed} source={require('../../assets/images/searchFailed.png')} />
            <Text style={styles.notFoundText}>Didn't Find Any results</Text>
          </View>)

          :
        
          (<FlatList
            // checks if searchItems exists (those including searchVal else it displays regular list)
            data={(searchedItems.length > 0) ? searchedItems : props.groceryItems}
            renderItem={(itemData) => <GroceryItem 
                                        item={itemData.item} 
                                        onRemove={removeHandler} 
                                        setEditItem={props.setEditItem} 
                                        editModalVisible = {props.onEditModalVisible} 
                                      />
            }
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={true}
          />)
        }

      </View>

    </View>
  )
}

export default DisplayItemScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    rowGap: 20,
  },
  listItemContainer: {
    flex:1,
    alignSelf: 'center',
    width: '100%',
  },
  searchFailedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 12,
    marginTop: 50,
  },
  notFoundText: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS['red-300']
  },
  searchFailed: {
    width: 36,
    height: 36,
  }
})