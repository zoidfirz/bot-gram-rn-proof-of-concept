import { TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'

function PostImageActionBar(props: { like: boolean }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity>
                    <AntDesign
                        name={props.like ? 'heart' : 'hearto'}
                        style={{
                            paddingRight: 10,
                            fontSize: 20,
                            color: props.like ? 'red' : 'black',
                        }}
                    ></AntDesign>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionic
                        name={'ios-chatbubble-outline'}
                        style={{
                            fontSize: 20,
                            paddingRight: 20,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather
                        name={'navigation'}
                        style={{
                            fontSize: 20,
                        }}
                    />
                </TouchableOpacity>
            </View>
            <Feather name={'bookmark'} style={{ fontSize: 20 }} />
        </View>
    )
}

export default PostImageActionBar
