import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import HeadersTabs from '../components/Home/HeadersTabs'
import Searchbar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import RestorentItem from '../components/Home/RestorentItem'
import BottomTabs from '../components/Home/BottomTabs'
import { Divider } from 'react-native-elements'
import { localRestaurants } from '../components/Home/RestorentItem'
import useSearch from '../components/hooks/useSearch'
import LottieView from 'lottie-react-native'


const YELP_API_KEY = 'UgN2keLotomLRlghRHa5-arVS0JsMOusFVOkdd3bXab8OjNOCAvTBekMjQmYdGzWJzAW3-9Yz5qcGRWuGu3--fuNiwtaFqALV7Dtmw6hCi_8LJgM2Bva-fX-ROsMYnYx'


export default function Home({ navigation }) {
    const [RestaurantsData, setRestaurentData] = useState(localRestaurants)
    const [activeTab, setActiveTab] = useState('Delivery')
    const [searchLocation, setSearchLocation] = useState('SanDiegao')
    const [SearchApi, load, results] = useSearch()
    const [loading, setloading] = useState(false);

    // Getting data form the Yelp API.
    const getRestaurent = () => {
        setloading(true)
        const yelp_url = `https://api.yelp.com/v3/businesses/search?trem=restaurants&location=${searchLocation}`
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelp_url, apiOptions)
        .then(res => res.json())
        .then((json) => setRestaurentData(json.businesses))
    }
    useEffect(() => {
        setloading(true)
        setRestaurentData(results)
        setTimeout(() => {
            setloading(false)
        }, 1000);
    }, [results])
    
    useEffect(() => {
        if(load) setloading(true)
        const unsubscribe = getRestaurent()
        setTimeout(() => {
            setloading(false)
        }, 1000);
        return () => unsubscribe
    }, [searchLocation]);

    return (
        <>
            <View style={{ backgroundColor: 'white', padding: 15, marginTop:30 }} >
                <HeadersTabs SearchApi={SearchApi} activeTab={activeTab} setActiveTab={setActiveTab} />
                <Searchbar searchLocation={searchLocation} setSearchLocation={setSearchLocation} />
            </View>
            <View style={{ marginBottom: 3 }} >
                <Categories SearchApi={SearchApi} />
            </View>

            <RestorentItem RestaurentData={RestaurantsData} navigation={navigation} />
            <Divider width={1} />
            <BottomTabs />
            {loading ? <Loading/> : null}
        </>
    )
}

const Loading = () => (
    <View style={styles.loading}>
        <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
        />
    </View>
)
const styles = StyleSheet.create({
    loading: {
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.7,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    }
})