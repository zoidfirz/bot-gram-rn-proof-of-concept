import {
    StatusBar,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Animated,
} from 'react-native'
import imageStyleSheet from '../../../models/StyleSheet'
import ProfileImage from './accViews/ProfileImage'
import Ionic from 'react-native-vector-icons/Ionicons'
import StoryImage from './accViews/StoryImage'
import Feather from 'react-native-vector-icons/Feather'
import { useEffect, useState } from 'react'
import AnimatedView from 'react-native-reanimated/lib/types/reanimated2/component/View'

const Status = ({ route, navigation }) => {
    const { name } = route.params
    const { image } = route.params

    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack()
        }, 5000)
        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start()
        return () => clearTimeout(timer)
    }, [])

    const [progress, setProgress] = useState(new Animated.Value(0))
    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%'],
    })

    return (
        <View
            style={{
                backgroundColor: 'black',
                height: '100%',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <StatusBar backgroundColor="black" barStyle="dark-content" />
            <View
                style={{
                    height: 3,
                    width: '95%',
                    borderWidth: 1,
                    backgroundColor: 'gray',
                    position: 'absolute',
                    top: 18,
                }}
            >
                <Animated.View
                    style={{
                        height: '100%',
                        width: progressAnimation,
                        backgroundColor: 'white',
                    }}
                ></Animated.View>
            </View>
            <View
                style={{
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 12,
                    left: 0,
                    width: '90%',
                }}
            >
                <ProfileImage source={image} />
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 15,
                            paddingLeft: 10,
                        }}
                    >
                        {name}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Ionic
                            name={'close'}
                            style={{
                                fontSize: 20,
                                color: 'white',
                                opacity: 0.6,
                            }}
                        ></Ionic>
                    </TouchableOpacity>
                </View>
            </View>
            <StoryImage source={image} />
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginVertical: 10,
                    width: '100%',
                }}
            >
                <TextInput
                    placeholder="Send Message"
                    placeholderTextColor="white"
                    style={{
                        borderColor: 'white',
                        borderRadius: 25,
                        width: '85%',
                        height: 50,
                        paddingLeft: 20,
                        borderWidth: 1,
                        fontSize: 20,
                        color: 'white',
                    }}
                ></TextInput>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Feather
                        name={'navigation'}
                        style={{ fontSize: 30, color: 'white' }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Status
