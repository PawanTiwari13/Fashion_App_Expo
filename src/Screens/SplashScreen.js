import {Image, Text, View} from "react-native";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

function SplashScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
navigation.navigate('LoginScreen');
        }, 3000)
    }, [])
    return (
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Image source={require('../Images/Fashion.png')} style={{width:200,height:200}}/>
        </View>
    )
}

export default SplashScreen;
