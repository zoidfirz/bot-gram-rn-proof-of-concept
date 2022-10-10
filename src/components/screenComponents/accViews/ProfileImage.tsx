import { Image, View } from 'react-native'
import imageStyleSheet from '../../../../models/StyleSheet'

function ProfileImage(props: { source: any }) {
    return (
        <View style={imageStyleSheet.profileImageWrapperView}>
            <Image
                source={props.source}
                style={imageStyleSheet.profileImageInnerView}
            ></Image>
        </View>
    )
}

export default ProfileImage
