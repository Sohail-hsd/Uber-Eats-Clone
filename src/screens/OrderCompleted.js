import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, LogBox, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import LottieView from "lottie-react-native";
import firebase from '../FireBase';
import MenuItems from '../components/About/MenuItems';

const OrderCompleted = () => {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
        ],
    });
    const { items, restaurentName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((pre, curr) => pre + curr, 0)

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                });
            });
        LogBox.ignoreLogs(['Setting a timer for a long period of time'])
        return () => unsubscribe()
    }, []);
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>
            {/* Green check mark */}
            <LottieView
                style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                source={require("../../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text>
                    Your order at
                    <Text style={{ fontWeight: 'bold' }}> {restaurentName}</Text>
                    has been placed for
                    <Text style={{ fontWeight: 'bold' }}> ${total}</Text>
                </Text>
            </View>
            {/* Menu items */}
            <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Text>Order items</Text>
            </View>

            {/* Cocking animations */}
            <ScrollView style={{flex:1}}>
                <MenuItems
                    foods={lastOrder.items}
                    hideCheckbox={true}
                // marginLeft={0}
                />
            </ScrollView>
                <View >
                    <LottieView
                        style={{ height: 200, alignSelf: 'center' }}
                        source={require('../../assets/animations/cooking.json')}
                        autoPlay={true}
                        speed={0.5}
                        loop={true}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default OrderCompleted
