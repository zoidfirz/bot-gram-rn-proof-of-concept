import { StyleSheet } from 'react-native'

const imageStyleSheet = StyleSheet.create({
    profileImageInnerView: {
        borderRadius: 100,
        backgroundColor: 'orange',
        resizeMode: 'cover',
        height: '92%',
        width: '92%',
    },
    profileImageWrapperView: {
        borderRadius: 100,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default imageStyleSheet
