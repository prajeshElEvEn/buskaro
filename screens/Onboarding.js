import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const Onboarding = ({ navigation }) => {
    return (
        <>
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Image
                        source={require('../assets/images/bus-stop.png')}
                        style={{
                            height: 400,
                            width: 400,
                            alignSelf: 'center',
                            // padding: 30
                        }}
                    />
                    <View
                        style={{
                            padding: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 34,
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                        >
                            Bus Tracking
                        </Text>

                        <Text style={{
                            marginTop: 10,
                            fontSize: 24,
                            color: '#94A3B8',
                            fontWeight: '400',
                            textAlign: 'center',
                        }}
                        >
                            {/* BusKaro helps you to track the location of your bus, which saves your time. */}
                            Track the location of your bus so that you never miss it.
                        </Text>
                    </View>

                    {/* <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity> */}

                </View>

                <View style={styles.slide2}>
                    <Image
                        source={require('../assets/images/seat.png')}
                        style={{
                            height: 400,
                            width: 400,
                            alignSelf: 'center'
                        }}
                    />
                    <View
                        style={{
                            padding: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                        <Text
                            style={{
                                fontSize: 34,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                            Seat Occupancy
                        </Text>

                        <Text
                            style={{
                                marginTop: 20,
                                // marginLeft: 15,
                                fontSize: 24,
                                color: '#94A3B8',
                                fontWeight: '400',
                                textAlign: 'center',
                            }}
                        >
                            {/* Buskaro helps you to track the seat occupancy by real time monitoring of the seats available. */}
                            Get to know if there are seats available for you in the bus.
                        </Text>
                    </View>

                    {/* <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity> */}

                </View>
                <View style={styles.slide3}>
                    <Image
                        source={require('../assets/images/emergency.png')}
                        style={{
                            height: 400,
                            width: 400,
                            alignSelf: 'center'
                        }}
                    />
                    <View
                        style={{
                            padding: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >

                        <Text
                            style={{
                                fontSize: 34,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                            Emergency Calling
                        </Text>

                        <Text
                            style={{
                                marginTop: 10,
                                // marginLeft: 24,
                                fontSize: 24,
                                color: '#94A3B8',
                                fontWeight: '400',
                                textAlign: 'center',
                            }}>
                            In trouble ? Use our "shake" to report feature to contact emergency.
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#dbe8ff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            marginTop: 10
                        }}
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text
                            style={{
                                padding: 15,
                                width: 250,
                                textAlign: 'center',
                                color: '#3B82F6',
                                fontWeight: 'bold',
                                fontSize: 24
                            }}>
                            Skip
                        </Text>
                    </TouchableOpacity>

                </View>
            </Swiper>
            <StatusBar style="auto" />
        </>
    )
}

export default Onboarding;
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
