import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({ item }) => {
    const { title, price } = item
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{price ? price : "Free"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        marginHorizontal:10,
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
    }
})

export default OrderItem
