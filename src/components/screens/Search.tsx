import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Image,
    SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import SearchBox from '../screenComponents/SearchBox'
import SearchContent from '../screenComponents/SearchContent'
import AntDesign from 'react-native-vector-icons/AntDesign'
import OverlayImage from '../screenComponents/OverlayImage'

const Search = () => {
    const [image, setImage] = useState(null)
    const getData = (data) => {
        setImage(data)
    }
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    return (
        <SafeAreaView
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                position: 'relative',
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBox />
                <SearchContent data={getData} />
                {/*Plus button*/}
                {/*<TouchableOpacity*/}
                {/*    style={{*/}
                {/*        margin: 25,*/}
                {/*        justifyContent: 'center',*/}
                {/*        alignItems: 'center',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <AntDesign*/}
                {/*        name="pluscircleo"*/}
                {/*        style={{ fontSize: 40, opacity: 0.5 }}*/}
                {/*    />*/}
                {/*</TouchableOpacity>*/}
            </ScrollView>
            <OverlayImage
                image={image}
                windowHeight={windowHeight}
                windowWidth={windowWidth}
            />
        </SafeAreaView>
    )
}

export default Search
