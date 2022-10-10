import { View, Text, StatusBar, ScrollView } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import { useFonts } from 'expo-font'
import Stories from '../screenComponents/Stories'
import Post from '../screenComponents/Post'
import Ionic from 'react-native-vector-icons/Ionicons'

const Home = () => {
    const [loaded] = useFonts({
        Lobster: require('../../../assets/fonts/Lobster-Regular.ttf'),
    })

    if (!loaded) {
        return null
    }
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
                animated={true}
            ></StatusBar>
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    alignItems: 'center',
                }}
            >
                <FontAwesome5Icon name="plus-square" style={{ fontSize: 24 }} />
                <Text
                    style={{
                        fontFamily: 'Lobster',
                        fontSize: 24,
                        fontWeight: '500',
                    }}
                >
                    BOT Gram
                </Text>
                <Feather name="navigation" style={{ fontSize: 24 }} />
            </View>
            <ScrollView>
                <Stories />
                <Post />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                    }}
                >
                    <Ionic
                        name={'ios-reload-circle-sharp'}
                        style={{ fontSize: 60, opacity: 0.2 }}
                    ></Ionic>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home
