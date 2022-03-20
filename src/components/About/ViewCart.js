import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import firebase from '../../FireBase'
import LottieView from 'lottie-react-native'

const ViewCart = ({ navigation }) => {
    const [modelVisible, setmodalVisible] = useState(false)
    const [loading, setloading] = useState(false);

    const { items, restaurentName } = useSelector((state) => state.cartReducer.selectedItems)
    /// calculating the price (adding the prices in the items array)
    /// This will first map all the prices in the items array and remove the $ sign make the price a string
    //  then convert it to numbers and added the prices by reduce function.
    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((pre, curr) => pre + curr, 0)
    // pre means previous and curr means current value and added them both, 0 means start from zero index.
    const USD = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const addOrderToFirebase = () => {
        setloading(true)
        const db = firebase.firestore();
        db.collection("orders")
            .add({
                items: items,
                restaurentName: restaurentName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        setmodalVisible(false)
        setTimeout(() => {
            setloading(false)
            navigation.navigate('Completed')
        }, 2500);

    }

    const checkOutModal = () => {
        return (
            <>
                <View style={styles.emptySpace}></View>
                <View style={styles.modalContainer}>
                    <Text style={styles.ResName}>{restaurentName}</Text>
                    <View>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 30
                        }}>
                            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Sub Total</Text>
                            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>${USD}</Text>
                        </View>
                        <View style={styles.checkOut1}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.checkOut}
                                onPress={() => addOrderToFirebase()}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'white' }} >CheckOut</Text>
                                <Text style={{ color: 'white', fontWeight: 'bold', position: 'absolute', left: 170, top: 10 }} >${total ? USD : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            <Modal
                animationType='slide'
                visible={modelVisible}
                transparent={true}
                onRequestClose={() => setmodalVisible(false)}
            >
                {checkOutModal()}
            </Modal>
            {total && !loading ? (
                <View style={styles.conatiner}>
                    <View style={styles.viewContainer}>
                        <TouchableOpacity
                            onPress={() => setmodalVisible(true)}
                            activeOpacity={0.7}
                            style={styles.viewCart}
                        >
                            <Text style={{ color: "white", fontSize: 20 }}>ViewCart</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', position: 'absolute', left: 200, top: 12 }} >${USD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <>
                </>
            )}
            {loading ? (
                <View style={styles.loading}>
                    <LottieView
                        style={{ height: 200 }}
                        source={require("../../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    )
}



const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        marginTop: 750,
        zIndex: 999,
    },
    viewCart: {
        position: 'relative',
        backgroundColor: 'black',
        padding: 7,
        borderRadius: 30,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewContainer: {
        justifyContent: "center",
        marginLeft: 50,
    },
    modalContainer: {
        flex: 2,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',

    },
    checkOut: {
        backgroundColor: 'black',
        paddingHorizontal: 80,
        borderRadius: 30,
        paddingVertical: 10,
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',

    },
    emptySpace: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1,
    },
    ResName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center'
    },
    loading: {
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.7,
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
        width: "100%",

    }
})

export default ViewCart
