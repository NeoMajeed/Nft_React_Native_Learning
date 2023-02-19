import { View, Text } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'


export const SubInfo = () => {
  return (
    <Text style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,

    }}>
    NFTData
    </Text>
  )
}
