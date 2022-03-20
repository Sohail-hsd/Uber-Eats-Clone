import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import Deatils from '../components/About/Deatils'
import MenuItem from '../components/About/MenuItem'
import MenuItems from '../components/About/MenuItems'
import ViewCart from '../components/About/ViewCart'

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
        title: "Chilaquiles",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
        title: "Chicken Caesar Salad",
        description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$21.50",
        image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
    {
        "title": 'Pizza',
        "description": 'Cheezy Sapicy pizza.',
        "price": "$13.50",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
    },
    {
        "title": 'Fast Food',
        "description": 'Cheezy Sapicy hotdogs.',
        "price": "$13.50",
        "image": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
    },
    {
        "title": 'hotdogs',
        "description": 'Cheezy Sapicy hotdogs.',
        "price": "$13.50",
        "image": "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        "title": 'Milk Shakes',
        "description": 'Cheezy Sapicy pizza.',
        "price": "$13.50",
        "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
    },
    {
        "title": 'Lasagna',
        "description": 'Cheezy Sapicy Lanagna.',
        "price": "$13.50",
        "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        "title": 'Chiken Caesar Salad',
        "description": 'Cheezy Sapicy pizza.',
        "price": "$13.50",
        "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
    },
    {
        "title": 'chicken',
        "description": 'Cheezy Sapicy pizza.',
        "price": "$13.50",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
];

// const foods2 = [
//     {
//       "title": 'Pizza',
//       "description": 'Cheezy Sapicy pizza.',
//       "price": "$13.50",
//       "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
//     },
//     {
//       "title": 'Fast Food',
//       "description": 'Cheezy Sapicy hotdogs.',
//       "price": "$13.50",
//       "image": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
//     },
//     {
//       "title": 'hotdogs',
//       "description": 'Cheezy Sapicy hotdogs.',
//       "price": "$13.50",
//       "image": "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//     },
//     {
//       "title": 'Milk Shakes',
//       "description": 'Cheezy Sapicy pizza.',
//       "price": "$13.50",
//       "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
//     },
//     {
//       "title": 'Lasagna',
//       "description": 'Cheezy Sapicy Lanagna.',
//       "price": "$13.50",
//       "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//     },
//     {
//       "title": 'Chiken Caesar Salad',
//       "description": 'Cheezy Sapicy pizza.',
//       "price": "$13.50",
//       "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
//     },
//     {
//       "title": 'chicken',
//       "description": 'Cheezy Sapicy pizza.',
//       "price": "$13.50",
//       "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//     },
//   ]

const YELP_API_KEY = 'UgN2keLotomLRlghRHa5-arVS0JsMOusFVOkdd3bXab8OjNOCAvTBekMjQmYdGzWJzAW3-9Yz5qcGRWuGu3--fuNiwtaFqALV7Dtmw6hCi_8LJgM2Bva-fX-ROsMYnYx'


const About = ({ route, navigation }) => {
    const [food, setfood] = useState([])
    const { id } = route.params
    // const getFoods = () => {
    //     const yelp_url = `https://api.yelp.com/v3/businesses/${id}`
    //     const apiOptions = {
    //         headers: {
    //             Authorization: `Bearer ${YELP_API_KEY}`,
    //         },
    //     };
    //     return fetch(yelp_url, apiOptions)
    //         .then(res => res.json())
    //         .then((json) => setfood(json))
    //     }
    // useEffect(() => {
    //         getFoods()
    //     }, []);
    // console.log(food)
    return (
        <>
            <View style={{ backgroundColor: '#fff' }}>
                <Deatils route={route} />
                <Divider width={1.8} style={{ marginVertical: 20 }} />
                <ScrollView>
                    <MenuItem restaurentName={route.params.name} foods={foods} CheckBox={true} />
                </ScrollView>
                {/* <MenuItems restaurentName={route.params.name} foods={foods} hidecheckbox={true} /> */}
                <ViewCart navigation={navigation} restaurentName={route.params.name} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})

export default About
