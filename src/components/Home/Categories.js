import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'

const items = [
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../../../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../../../assets/images/desserts.png"),
        text: "Desserts",
    },
];

const Categories = ({ SearchApi }) => {
    const [activeCat, setActiveCat] = useState('')
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            activeOpacity={1}
                            onPress={() => {
                                setActiveCat(item.text)
                                SearchApi(item.text)
                            }}
                        >
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                            <Text style={[styles.text, {
                                backgroundColor: activeCat === item.text ? 'rgba(70, 68, 69, 0.84)' : 'white',
                                color: activeCat === item.text ? 'white' : 'rgba(70, 68, 69, 0.84)',
                            }]}>{item.text}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
    },
    image: {
        height: 50,
        width: 40,
        resizeMode: "contain",
    },
    text: {
        fontWeight: '900',
        fontSize: 10,
        borderRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 3,
    }
})

export default Categories
