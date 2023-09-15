import {Alert, Image, StyleSheet, Text, View} from "react-native";
import {pixelNormalize} from "../Constants/Size";
import InputComponent from "./Components/InputComponent";
import ButtonComponent from "./Components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

function LoginScreen(){
   const [email, setEmail]=useState('');
   const [password, setPassword]=useState('');
   const navigate = useNavigation();
    const handleLogin = () => {
        if (!email && !password) {
            // Both email and password are empty
            Alert.alert(
                'Empty Fields',
                'Please enter your email and password to proceed.',
                [{ text: 'OK', onPress: () => {} }]
            );
        } else if (!email) {
            // Email is empty
            Alert.alert(
                'Empty Email',
                'Please enter your email to proceed.',
                [{ text: 'OK', onPress: () => {} }]
            );
        } else if (!password) {
            // Password is empty
            Alert.alert(
                'Empty Password',
                'Please enter your password to proceed.',
                [{ text: 'OK', onPress: () => {} }]
            );
        } else {
            // Perform the login logic here
            // If email and password are not empty
            // You can make an API request, validate the credentials, etc.
        }
    };
    return (
        <>
            <View style={{flex: 1}}>
                <Image style={styles.image} source={require('../Images/fshn-modified.png')}></Image>
                <Text style={styles.textLogin}> Login</Text>
                <InputComponent placeholder='Enter Email Password'
                                value={email}
                                onChange={(text)=>{
                                    setEmail(text)
                                }}
                />
                <InputComponent placeholder='Enter Email Password'
                                type='password'
                                value={password}
                                onChange={(text)=>{
                                    setPassword(text)
                                }}
                />
                <ButtonComponent title='Login'
                                 bgColor='#212121'
                                 textColor='#ffff'
                                 onPress={() => {
                                     handleLogin()
                                 }}/>
                <Text style={{
                    fontSize: pixelNormalize(15),
                    fontWeight: '800',
                    alignSelf: 'center',
                    marginTop: pixelNormalize(20),

                }}
                onPress={()=>{
                    navigate.navigate('SignUpScreen')
                }}> Create New Account ?</Text>
            </View>

        </>
)
}
export default LoginScreen;
const styles = StyleSheet.create({
    image: {
        width: pixelNormalize(100),
        height: pixelNormalize(100),
        alignSelf: "center",
        marginTop: pixelNormalize(70),
    },
    textLogin: {
        marginTop: pixelNormalize(50),
        alignSelf: 'center',
        fontSize: pixelNormalize(30),
        fontWeight: '600',
        color: '#212121'
    },

})
