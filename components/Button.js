import { TouchableOpacity, View, Text, Image } from 'react-native'
import { SIZES, COLORS, SHADOWS, FONTS } from '../constants'

export const CircleButton = ({imgUrl, handLePrees, ...props}) => {
  return (
    <TouchableOpacity
    style={{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        position:"absolute",
        borderRadius: SIZES.extraLarge,
        alignItems:"center",
        justifyContent:"center",
        ...SHADOWS.light, 
        ...props,      
    }}
    onPress={handLePrees}
    >
    <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
            width:24,
            height:24,
        }}

    />
    </TouchableOpacity>
  )
}

export const RectButton = () => {
    return (
        <View>
         <Text>Button</Text>
        </View>
    )
}
