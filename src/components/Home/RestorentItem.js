import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?s=612x612",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

const RestaurentItem = ({ RestaurentData, navigation }) => {
    const [Like, setLike] = useState('heart-outline')
    // console.log(RestaurentData)
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                {RestaurentData.map((item, index) => (
                    <View key={index} style={styles.imageView}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                navigation.navigate('About', {
                                    name: item.name,
                                    image: item.image_url,
                                    price: item.price,
                                    reviews: item.review_count,
                                    rating: item.rating,
                                    categories: item.categories,
                                    id: item.id
                                })
                             console.log(item.image_url)   
                            }}
                        >
                            <Image style={styles.image} source={{ uri: item.image_url }} />
                            <TouchableOpacity style={styles.heart}>
                                <MaterialCommunityIcons
                                    name={Like}
                                    size={30}
                                    color='#fff'
                                />
                            </TouchableOpacity>
                            {/* Restaurent Info */}
                            <View style={styles.info}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: '700' }} >{item.name}</Text>
                                    <Text style={{ fontSize: 13, color: 'gray' }}>Time 34 - 45 ~ min</Text>
                                </View>
                                <View style={styles.rating}>
                                    <Text>{item.rating}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: '100%',
        borderRadius: 5,
    },
    imageView: {
        backgroundColor: 'white',
        marginBottom: 5,
        padding: 15,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    heart: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    rating: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default RestaurentItem
