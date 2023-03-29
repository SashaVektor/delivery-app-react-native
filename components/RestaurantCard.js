import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MapPinIcon } from "react-native-heroicons/outline"
import { StarIcon } from "react-native-heroicons/solid"
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id, imgUrl, title, rating, genre, address,
    short_description, dishes, long, lat
}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity className="bg-white mr-3 shadow-sm rounded-md" 
        onPress={() => {
            navigation.navigate("Restaurant", {
                id, imgUrl, title, rating,
                genre, address, short_description,
                dishes, long, lat
            })
        }}>
            <Image source={{
                uri: urlFor(imgUrl).url()
            }}
                className="h-36 w-64 rounded-md"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} />
                    <Text className="text-sm text-gray-500">
                        <Text className="text-green-500">{rating}</Text> - {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} size={22}/>
                    <Text className="text-sm text-gray-500">Nearby - {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard