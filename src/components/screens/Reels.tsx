import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import ReelsComponent from '../screenComponents/ReelsComponent'

const Reels = () => {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    return (
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <View
                style={{
                    width: windowWidth,
                    height: windowHeight,
                    position: 'relative',
                    backgroundColor: 'black',
                }}
            >
                <View
                    style={
                        {
                            // position: 'absolute',
                            // left: 0,
                            // right: 0,
                            // top: 0,
                            // flexDirection: 'row',
                            // justifyContent: 'space-between',
                            // zIndex: 1,
                            // padding: 10,
                        }
                    }
                >
                    <ReelsComponent />
                    <Feather
                        name="camera"
                        style={{ fontSize: 25, color: 'white' }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Reels
