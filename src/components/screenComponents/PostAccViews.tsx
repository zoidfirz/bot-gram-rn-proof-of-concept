import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

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

function PostCommentTray(props: { like: boolean; data: PostInterface }) {
    return (
        <View style={{ paddingHorizontal: 15 }}>
            <Text>
                Liked by {props.like ? 'you and' : ''} {props.data.likes} others
            </Text>
            <Text
                style={{
                    fontWeight: '700',
                    fontSize: 14,
                    paddingVertical: 2,
                }}
            >
                {props.data.postMessage}
            </Text>
            <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                View all comments (Feature not implemented)
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={props.data.postOwnerImage}
                        style={{
                            width: 25,
                            height: 25,
                            borderRadius: 100,
                            backgroundColor: 'orange',
                            marginRight: 10,
                        }}
                    ></Image>
                    <TextInput
                        placeholder="Add a comment"
                        style={{ opacity: 0.5 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Entypo
                        name="emoji-happy"
                        style={{
                            fontSize: 15,
                            color: 'green',
                            marginRight: 10,
                        }}
                    />
                    <Entypo
                        name="emoji-neutral"
                        style={{
                            fontSize: 15,
                            color: 'pink',
                            marginRight: 10,
                        }}
                    />
                    <Entypo
                        name="emoji-sad"
                        style={{
                            fontSize: 15,
                            color: 'red',
                            marginRight: 10,
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export { PostImageActionBar, PostCommentTray }
