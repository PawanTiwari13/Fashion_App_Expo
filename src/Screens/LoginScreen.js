import {Image, StyleSheet, Text, View} from "react-native";
import {pixelNormalize} from "../Constants/Size";
import InputComponent from "./Components/InputComponent";
import ButtonComponent from "./Components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

function LoginScreen(){
   const [email, setEmail]=useState('');
   const [password, setPassword]=useState('');
   const navigate = useNavigation();
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptyPassword, setEmptyPassword] = useState(false)
    const handleLogin = () => {
        if (email === '') {
            setEmptyEmail(true);
        } else {
            setEmptyEmail(false);
        }
         if (password  === '') {
            setEmptyPassword(true);
        } else {
            setEmptyPassword(false)
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
                {emptyEmail === true && (
                    <Text style={{marginTop: pixelNormalize(10), marginLeft: pixelNormalize(30), color: 'red'}}> Please
                        Enter Email</Text>
                )}
                <InputComponent placeholder='Enter Email Password'
                                type='password'
                                value={password}
                                onChange={(text)=>{
                                    setPassword(text)
                                }}
                />
                {emptyPassword === true && (
                    <Text style={{marginTop: pixelNormalize(10), marginLeft: pixelNormalize(30), color: 'red'}}> Please
                        Enter Password</Text>
                )}

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
                }}> Create New Account?</Text>
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
