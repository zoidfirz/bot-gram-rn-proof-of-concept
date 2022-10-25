import { Image, SafeAreaView } from 'react-native'

function StoryImage(props: { source: any }) {
    return (
        <Image
            source={props.source}
            style={{ position: 'absolute', width: '100%', height: 600 }}
        ></Image>
    )
}

export default StoryImage
