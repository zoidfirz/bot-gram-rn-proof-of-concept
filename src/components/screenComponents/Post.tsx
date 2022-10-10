import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import imageStyleSheet from '../../../models/StyleSheet'
import Ionic from 'react-native-vector-icons/Ionicons'
import { PostCommentTray, PostImageActionBar } from './PostAccViews'
import Entypo from 'react-native-vector-icons/Entypo'

const Post = () => {
    const postInfo: PostInterface[] = [
        {
            postTitle: 'Daily Affirmations',
            postOwnerImage: require('../../storage/Images/userProgile.jpg'),
            postImage: require('../../storage/Images/tania-malrechauffe-Tq7lbAeF9BQ-unsplash.jpg'),
            likes: 765,
            isLiked: false,
            postMessage: 'Take it one call at a time.',
        },
        {
            postTitle: 'Driving Safety',
            postOwnerImage: require('../../storage/Images/userProgile.jpg'),
            postImage: require('../../storage/Images/filip-rankovic-grobgaard-8u2xKgXJBgo-unsplash.jpg'),
            likes: 300,
            isLiked: false,
            postMessage:
                'Remember to wear your seatbelt whenever the vehicle is in operation.',
        },
        {
            postTitle: 'Daily Affirmations',
            postOwnerImage: require('../../storage/Images/userProgile.jpg'),
            postImage: require('../../storage/Images/tania-malrechauffe-Tq7lbAeF9BQ-unsplash.jpg'),
            likes: 458,
            isLiked: false,
            postMessage:
                'Take care of yourself. You cannot help anyone if your hurt.',
        },
        {
            postTitle: 'BOT Special Projects',
            postOwnerImage: require('../../storage/Images/userProgile.jpg'),
            postImage: require('../../storage/Images/katie-azi-eX_f0ueFhtg-unsplash.jpg'),
            likes: 1000,
            isLiked: false,
            postMessage: 'Medic Screening signup is now available on LMS',
        },
        {
            postTitle: 'Operations',
            postOwnerImage: require('../../storage/Images/userProgile.jpg'),
            postImage: require('../../storage/Images/peter-steiner-x3sWIm5PVa0-unsplash.jpg'),
            likes: 765,
            isLiked: false,
            postMessage: 'Dont forget to submit your timesheet.',
        },
    ]
    return (
        <View>
            {postInfo.map((data, index) => {
                const [like, setLike] = useState(data.isLiked)
                return (
                    <View
                        key={index}
                        style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    source={data.postOwnerImage}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100,
                                    }}
                                />
                                <View style={{ paddingLeft: 5 }}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {data.postTitle}
                                    </Text>
                                </View>
                            </View>
                            <Feather
                                name="more-vertical"
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View
                            style={{
                                position: 'relative',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={data.postImage}
                                style={{ width: '100%', height: 400 }}
                            />
                        </View>

                        <PostImageActionBar like={like} />

                        <PostCommentTray like={like} data={data} />
                    </View>
                )
            })}
        </View>
    )
}

export default Post
