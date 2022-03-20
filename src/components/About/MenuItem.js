import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from "react-redux";


// const foods = [
//   {
//     "title": 'Pizza',
//     "discription": 'Cheezy Sapicy pizza.',
//     "price": "$13.50",
//     "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
//   },
//   {
//     "title": 'Fast Food',
//     "discription": 'Cheezy Sapicy hotdogs.',
//     "price": "$13.50",
//     "image": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
//   },
//   {
//     "title": 'hotdogs',
//     "discription": 'Cheezy Sapicy hotdogs.',
//     "price": "$13.50",
//     "image": "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//   },
//   {
//     "title": 'Milk Shakes',
//     "discription": 'Cheezy Sapicy pizza.',
//     "price": "$13.50",
//     "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
//   },
//   {
//     "title": 'Lasagna',
//     "discription": 'Cheezy Sapicy Lanagna.',
//     "price": "$13.50",
//     "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//   },
//   {
//     "title": 'Chiken Caesar Salad',
//     "discription": 'Cheezy Sapicy pizza.',
//     "price": "$13.50",
//     "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
//   },
//   {
//     "title": 'chicken',
//     "discription": 'Cheezy Sapicy pizza.',
//     "price": "$13.50",
//     "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//   },
// ]


const MenuItem = ({ restaurentName, foods, marginBottom, CheckBox }) => {
  const dispatch = useDispatch();
  // const select = useSelector()
  const selectItem = (item, checkboxValue) => (
    dispatch({
      type: "ADD_To_CART",
      payload: {
        ...item,
        restaurentName: restaurentName,
        checkboxValue: checkboxValue,
      },
    })
  )

  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)
  const isFoodinCart = (food, cartItems) => (
    // Check the food in the CartItems, return True OR False
    Boolean(cartItems.find((item) => item.title === food.title))
  )

  console.log(marginBottom)
  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: marginBottom ? marginBottom : 320 }}>
          {foods.map((food, index) => (
            <View key={index}>
              <View style={styles.Item}>
                {CheckBox ?(
                  <BouncyCheckbox
                  isChecked={isFoodinCart(food, cartItems)}
                  iconStyle={styles.checkBoxIcon}
                  fillColor="rgba(17, 145, 17, 0.67)"
                  onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                />):null}
                <FoodInfo
                  title={food.title}
                  discription={food.description}
                  price={food.price}
                  />
                <FoodImage image={food.image}/>
              </View>
              <Divider
                width={0.5}
                orientation="vertical"
                style={{ marginHorizontal: 20 }}
                
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

const FoodInfo = ({ title, discription, price }) => (
  <View style={styles.info}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{discription}</Text>
    <Text style={styles.text}>{price}</Text>
  </View>
);

const FoodImage = ({ image, marginLeft }) => (
  <View>
    <Image style={[styles.image,{marginLeft:marginLeft}]} source={{ uri: image }} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  Item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  text: {},
  checkBoxIcon: {
    borderRadius: 5,
    borderColor: 'lightgray',
  }
})

export default MenuItem
