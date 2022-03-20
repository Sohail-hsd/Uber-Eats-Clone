import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Deatils = ({route}) => {
    const { name, image, price, reviews, rating, categories } = route.params
    const formattCategories = categories.map((cat) => cat.title).join(" • ");
    const discription = `${formattCategories} ${price ? price + " • " : ""} • 🎫 • ${rating} ⭐ (${reviews}+) `

    return (
        <View>
            <RestaurentImage
                image={image}
                title={name}
                discription={discription}
            />
        </View>
    )
}

const RestaurentImage = ({ image, title, discription }) => (
    <View>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={[styles.text, { fontWeight: 'bold', fontSize: 20, }]} >{title}</Text>
        <Text style={[styles.text, { fontWeight: '400', fontSize: 15.5, }]} >{discription}</Text>
    </View>
)

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginHorizontal: 15
    },
    image: {
        width: '100%',
        height: 180,
    }
})

export default Deatils
