import {Image, Text, View} from "react-native";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {pixelNormalize} from "../Constants/Size";


function SplashScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
navigation.navigate('LoginScreen');
        }, 3000)
    }, [])
    return (
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center' ,backgroundColor:'#620031'}}>
          <Image source={require('../Images/fshn.jpeg')} style={{width:pixelNormalize(450),height:pixelNormalize(450)}}/>
        </View>
    )
}

export default SplashScreen;
