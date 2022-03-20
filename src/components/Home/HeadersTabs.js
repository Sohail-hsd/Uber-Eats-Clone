import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

const HeadersTabs = ({ activeTab, setActiveTab, SearchApi }) => {

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Tab
                text='Delivery'
                textColor='white'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                // SearchApi={SearchApi}
            />
            <Tab
                text='Pick Up'
                textColor='black'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                // SearchApi={SearchApi}
            />
        </View>
    )
}

const Tab = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.activeTab === props.text ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text
                style={{
                    color: props.activeTab === props.text ? 'white' : 'black',
                    fontSize: 15,
                    fontWeight: '900'
                }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default HeadersTabs