import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';

const Searchbar = ({ setSearchLocation }) => {
    const [location, setLocation] = useState('');
    const SubmittSearch = () => {
        if(location){
            setSearchLocation(location)
        }else{
            setSearchLocation('SanDiago')
        }
    }

    return (
        <View style={styles.searchView}>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                backgroundColor:'#eee',
                flex:1,
                padding:10,
                borderRadius:30,
            }}>
                <View style={{marginRight:5}}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                <TextInput
                    style={[styles.textInput,{flex:1}]}
                    placeholder='Search'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setLocation}
                    onEndEditing={SubmittSearch}
                />
                <RIcon/>
            </View>
           
        </View>
    );
}

const RIcon = () => {
    return (
        <View style={{
            backgroundColor:'white',
            flexDirection:'row',
            alignItems:'center',
            padding:10,
            borderRadius:20,
        }}>
            <AntDesign name='clockcircle' size={11} />
            <Text style={{ marginLeft: 6 }} >Search</Text>
        </View>
    )
}

const SearcBarRNE = () => (
      {/* <SearchBar
                placeholder="Search by City"
                containerStyle={styles.textInputContainer}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.textInput}
                lightTheme={true}
                value={location}
                searchIcon={<Ionicons name='location-sharp' size={24} />}
                onChangeText={setLocation}
                onSubmitEditing={SubmittSearch}
                round={true}
            /> */}
)

const GoogleAutoPlace = () => (
     {/* <GooglePlacesAutocomplete
                placeholder='Search'
                query={{ key: 'AIzaSyCYXT_9BVPK4dWoNnKn1Z3NiNQUtcWIseE' }}
                // onPress={(data) => {
                //     console.log(data.description)
                // }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        marginTop: 7,
                        fontWeight: '700',
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 5 }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}
                renderRightButton={() => (

                    <View style={styles.serchBtn}>
                        <AntDesign name='clockcircle' size={11} />
                        <Text style={{ marginLeft: 6 }} >Search</Text>
                    </View>

                )}
            /> */}
)

const styles = StyleSheet.create({
    searchView: {
        marginTop: 15,
        flexDirection: 'row'
    },
    serchBtn: {
        flexDirection: 'row',
        marginRight: 6,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 30,
    },
    textInput: {
        backgroundColor: '#eee',
        borderRadius: 20,
        fontWeight: '700',
        color: 'black',
    },
    textInputContainer: {
        // backgroundColor: '#eee',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    inputContainer: {
        backgroundColor: '#eee',
        borderRadius: 30,
    }
})

export default Searchbar;
