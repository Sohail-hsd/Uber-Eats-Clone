import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'


const BottomTabs = () => {
    return (
        <View style={styles.BottomTabsView}>
            <Tab name='home' text='Home' />
            <Tab name='search' text='Browse' />
            <Tab name='shopping-bag' text='Grocery' />
            <Tab name='receipt' text='Order' />
            <Tab name='user' text='Account' />
        </View>
    )
}

const Tab = ({ name, text }) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 name={name} size={25} style={{ alignSelf: 'center' }} />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    BottomTabsView: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    }
})

export default BottomTabs
