import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const BusBoardingScreen = (lat, lon, dest) => {
    const nav = useNavigation();
    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
            // console.log(latitude)
            // console.log(longitude)
        })();
        // setLatitude(lat)
        // setLongitude(lon)
    }, []);

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => nav.goBack()}
                >
                    <Ionicons name="chevron-back-outline" size={28} color="#3B82F6" />
                </TouchableOpacity>
            </View>
            <View style={styles.heading}>
                <Text style={styles.header}>
                    Board your bus!
                </Text>
            </View>
            <TouchableOpacity
                style={styles.busItem}
            // onPress={() => nav.navigate('BusBoarding')}
            >
                <View style={styles.busItemTop}>
                    <View style={styles.itemTopLeft}>
                        <Text style={styles.busNumber}>DE 8304</Text>
                        <Text style={styles.busName}>Delhi Bus Co.</Text>
                    </View>
                    <View style={styles.itemTopRight}>
                        <FontAwesome5 name="bus-alt" size={48} color="#3B82F6" />
                    </View>
                </View>
                <View style={styles.itemMiddle}>
                    <View style={styles.route}>
                        <MaterialCommunityIcons name="map-marker-path" size={24} color="#3B82F6" style={styles.pathIcon} />
                        <Text style={styles.routeSource}>
                            Rohini
                        </Text>
                        <MaterialIcons name="compare-arrows" size={24} color="#3B82F6" style={styles.routeIcon} />
                        <Text style={styles.routeDest}>
                            Kashmere Gate
                        </Text>
                    </View>
                    <View style={styles.minAway}>
                        <Entypo name="back-in-time" size={24} color="#3B82F6" />
                        <Text style={styles.minAwayText}>3 min away</Text>
                    </View>
                </View>
                <View style={styles.busItemBottom}>
                    <View style={styles.itemBottomLeft}>
                        <View style={styles.itemBottomLeftIcon}>
                            <FontAwesome5 style={styles.rupee} name="rupee-sign" size={18} color="#fff" />
                        </View>
                        <Text style={styles.busFare}>100</Text>
                    </View>
                    <View style={styles.itemBottomRight}>
                        <View style={styles.itemBottomRightIcon}>
                            <FontAwesome style={styles.crowd} name="group" size={18} color="#fff" />
                        </View>
                        <Text style={styles.seatsOccu}>56%</Text>
                        <Text style={styles.seatsOccuText}>
                            vacant
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.mapBox}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        // latitude: 37.78825,
                        // longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >

                    {/* <Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        title="You are here!"
                    // pinColor="#2d179b"
                    /> */}
                </MapView>
            </View>
            <View style={styles.infoTextBox}>
                <Text style={styles.infoText}>
                    Press the button below right after you board the bus.
                </Text>
            </View>
            <TouchableOpacity
                style={styles.boardingBtn}
                onPress={() => nav.navigate('BusInfo')}
            >
                <Text style={styles.boardingBtnText}>Boarded</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#fff',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        marginVertical: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        // color: '#2d179b',
    },
    backBtn: {
        padding: 12,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    busList: {
        marginVertical: 20,
    },
    busItem: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 20,
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 20,
        // flex: 1,
    },
    busItemTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    busItemBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    itemBottomLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
    },
    itemBottomRight: {
        marginLeft: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
    },
    busFare: {
        fontSize: 24,
        marginHorizontal: 10,
        fontWeight: 'bold',
        // color: '#fff',
    },
    seatsOccu: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    seatsOccuText: {
        fontSize: 16,
        marginHorizontal: 8,
        fontWeight: 'bold',
        color: '#94A3B8',
    },
    itemBottomRightIcon: {
        backgroundColor: '#2CD568',
        padding: 10,
        borderRadius: 50,
    },
    itemBottomLeftIcon: {
        backgroundColor: '#ffd800',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 50,
    },
    rupee: {},
    crowd: {},
    itemTopLeft: {},
    itemTopRight: {
        padding: 20,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    itemMiddle: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    route: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 5,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    pathIcon: {
        paddingRight: 10,
    },
    routeIcon: {
        paddingHorizontal: 6,
    },
    minAway: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        paddingVertical: 5,
        paddingHorizontal: 14,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    minAwayText: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3B82F6',
    },
    busName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#94A3B8',
    },
    busNumber: {
        fontSize: 28,
        // marginVertical: 5,
        fontWeight: 'bold',
    },
    routeSource: {
        // marginRight: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3B82F6',
    },
    routeDest: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3B82F6',
        // marginLeft: 10,
    },
    mapBox: {
        height: '46%',
        width: '100%',
        // marginTop: 20,
        // marginBottom: 20,
        borderRadius: 30,
        overflow: 'hidden',
    },
    map: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    infoTextBox: {
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 14,
        paddingVertical: 10,
        // width: '40%',
        marginVertical: 10,
        borderRadius: 50,
    },
    infoText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#94A3B8',
    },
    boardingBtn: {
        backgroundColor: '#3B82F6',
        padding: 12,
        borderRadius: 50,
        marginTop: 20,
    },
    boardingBtnText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default BusBoardingScreen
