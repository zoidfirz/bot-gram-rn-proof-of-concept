import { Image, Text, TouchableOpacity, View } from 'react-native'

const SearchContent = (props) => {
    const searchData = [
        {
            id: 0,
            images: [
                require('../../storage/Images/katie-azi-eX_f0ueFhtg-unsplash.jpg'),
                require('../../storage/Images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg'),
                require('../../storage/Images/anita-cavalcanti-76N_rYYn_RY-unsplash.jpg'),
                require('../../storage/Images/anita-cavalcanti-76N_rYYn_RY-unsplash.jpg'),
                require('../../storage/Images/dmitrii-vaccinium-kt_DBpVIBIw-unsplash.jpg'),
                require('../../storage/Images/eiliv-aceron-uMuLAicIdDQ-unsplash.jpg'),
                require('../../storage/Images/elisa-photography-V7GkPmHMUz8-unsplash.jpg'),
            ],
        },
        {
            id: 1,
            images: [
                require('../../storage/Images/filip-rankovic-grobgaard-8u2xKgXJBgo-unsplash.jpg'),
                require('../../storage/Images/frankie-cordoba-n_qhHDVRusI-unsplash.jpg'),
                require('../../storage/Images/fynn-zentner-1L3czBXJwwo-unsplash.jpg'),
                require('../../storage/Images/may-gauthier-s3mR42Spras-unsplash.jpg'),
                require('../../storage/Images/kevin-wang-UKyqM9Z6L14-unsplash.jpg'),
                require('../../storage/Images/neil-webb-2zfHAHgA6Y8-unsplash.jpg'),
                require('../../storage/Images/neil-webb-2zfHAHgA6Y8-unsplash.jpg'),
            ],
        },
        {
            id: 2,
            images: [
                require('../../storage/Images/katie-azi-eX_f0ueFhtg-unsplash.jpg'),
                require('../../storage/Images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg'),
                require('../../storage/Images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg'),
                require('../../storage/Images/anita-cavalcanti-76N_rYYn_RY-unsplash.jpg'),
                require('../../storage/Images/dmitrii-vaccinium-kt_DBpVIBIw-unsplash.jpg'),
                require('../../storage/Images/eiliv-aceron-uMuLAicIdDQ-unsplash.jpg'),
                require('../../storage/Images/elisa-photography-V7GkPmHMUz8-unsplash.jpg'),
            ],
        },
    ]
    return (
        <View>
            {searchData.map((data, index) => {
                return (
                    <View key={index}>
                        {data.id === 0 ? (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {data.images.map((imageData, imageIndex) => {
                                    return (
                                        <TouchableOpacity
                                            onPressIn={() =>
                                                props.data(imageData)
                                            }
                                            onPressOut={() => props.data(null)}
                                            style={{ paddingBottom: 2 }}
                                        >
                                            <Image
                                                source={imageData}
                                                style={{
                                                    width: 129,
                                                    height: 150,
                                                }}
                                            ></Image>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        ) : null}
                        {data.id === 1 ? (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        width: 261,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {data.images
                                        .slice(0, 4)
                                        .map((imageData, imageIndex) => {
                                            return (
                                                <TouchableOpacity
                                                    onPressIn={() =>
                                                        props.data(imageData)
                                                    }
                                                    onPressOut={() =>
                                                        props.data(null)
                                                    }
                                                    style={{
                                                        paddingBottom: 2,
                                                    }}
                                                >
                                                    <Image
                                                        source={imageData}
                                                        style={{
                                                            width: 129,
                                                            height: 150,
                                                        }}
                                                    ></Image>
                                                </TouchableOpacity>
                                            )
                                        })}
                                </View>
                                <TouchableOpacity
                                    onPressIn={() => props.data(data.images[5])}
                                    onPressOut={() => props.data(null)}
                                    style={{ marginLeft: 2 }}
                                >
                                    <Image
                                        source={data.images[5]}
                                        style={{ width: 129, height: 300 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : null}
                        {data.id == 2 ? (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <TouchableOpacity
                                    onPressIn={() => props.data(data.images[2])}
                                    onPressOut={() => props.data(null)}
                                    style={{ paddingRight: 2 }}
                                >
                                    <Image
                                        source={data.images[2]}
                                        style={{ width: 260, height: 300 }}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        width: 130,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {data.images
                                        .slice(0, 2)
                                        .map((imageData, imageIndex) => {
                                            return (
                                                <TouchableOpacity
                                                    onPressIn={() =>
                                                        props.data(imageData)
                                                    }
                                                    onPressOut={() =>
                                                        props.data(null)
                                                    }
                                                    style={{ paddingBottom: 2 }}
                                                >
                                                    <Image
                                                        source={imageData}
                                                        style={{
                                                            width: 129,
                                                            height: 150,
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        })}
                                </View>
                            </View>
                        ) : null}
                    </View>
                )
            })}
        </View>
    )
}

export default SearchContent
