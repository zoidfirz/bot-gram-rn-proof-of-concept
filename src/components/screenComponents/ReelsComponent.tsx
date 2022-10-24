import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { color } from 'react-native-reanimated'
import SwiperFlatList from 'react-native-swiper-flatlist'
import SingleReel from './SingleReel'
import { VideoData } from './Database'

const ReelsComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleChangeIndexValue = ({ index }) => {
        setCurrentIndex(index)
    }

    return (
        <SwiperFlatList
            vertical={true}
            onChangeIndex={handleChangeIndexValue}
            data={VideoData}
            renderItem={({ item, index }) => (
                <SingleReel
                    item={item}
                    index={index}
                    currentIndex={currentIndex}
                />
            )}
            keyExtractor={(item, index) => index}
        />
    )
}

export default ReelsComponent
