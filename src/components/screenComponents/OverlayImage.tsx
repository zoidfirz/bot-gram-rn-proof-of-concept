import { Image, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

function OverlayImage(props: {
    image: any
    windowHeight: number
    windowWidth: number
}) {
    return (
        <>
            {props.image ? (
                <View
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(52,52,52,0.8)',
                    }}
                >
                    <StatusBar
                        backgroundColor="#525252"
                        barStyle="dark-content"
                    ></StatusBar>
                    <View
                        style={{
                            position: 'absolute',
                            top: props.windowHeight / 6,
                            left: props.windowWidth / 18,
                            backgroundColor: 'white',
                            width: 350,
                            height: 465,
                            borderRadius: 15,
                            zIndex: 1,
                            elevation: 50,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                            }}
                        >
                            <Image
                                source={props.image}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 100,
                                }}
                            />
                            <View style={{ paddingLeft: 8 }}>
                                <Text
                                    style={{ fontSize: 12, fontWeight: '600' }}
                                >
                                    username goes here
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={props.image}
                            style={{ width: '100%', height: '80%' }}
                        ></Image>
                        <View
                            style={{
                                justifyContent: 'space-around',
                                width: '100%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 8,
                            }}
                        >
                            <Ionic
                                name="ios-heart-outline"
                                style={{ fontSize: 26 }}
                            />
                            <Ionic
                                name="ios-person-circle-outline"
                                style={{ fontSize: 26 }}
                            />
                            <Feather
                                name="navigation"
                                style={{ fontSize: 26 }}
                            ></Feather>
                        </View>
                    </View>
                </View>
            ) : null}
        </>
    )
}

export default OverlayImage
