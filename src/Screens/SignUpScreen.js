import {Alert, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import InputComponent from "./Components/InputComponent";
import ButtonComponent from "./Components/ButtonComponent";
import {pixelNormalize} from "../Constants/Size";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

const SignUpScreen=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigation();
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptyName, setEmptyName] = useState(false)
    const [emptyNumber, setEmptyNumber] = useState(false)
    const [emptyPassword, setEmptyPassword] = useState(false)
    const [emptyConfirmPassword, setEmptyConfirmPassword] = useState(false)
    const handleLogin = () => {
        if (name === '') {
            setEmptyName(true);
        } else {
            setEmptyName(false);
        }
        if (number ==='') {
            setEmptyNumber(true);
        } else if (number.length<10) {
            setEmptyNumber(true)
        }
        else {
            setEmptyNumber(false)
        }
        if (email  === '') {
            setEmptyEmail(true);
        } else {
            setEmptyEmail(false)
        } if (password  === '') {
            setEmptyPassword(true);
        } else {
            setEmptyPassword(false)
        } if ( confirmPassword === '') {
            setEmptyPassword(true);
        } else {
            setEmptyConfirmPassword(false)
        }
        if (password!==confirmPassword){
            setEmptyConfirmPassword(true)
        }
        else {
          setEmptyConfirmPassword(false);
        }
    };
    return(
        <>
            <View style={{flex: 1 }}>
               <ScrollView>
                   <Image style={styles.image} source={require('../Images/fshn-modified.png')}></Image>
                   <Text style={styles.textLogin}>Create New Account</Text>
                   <InputComponent placeholder='Enter Name' value={name} onChange={(text) =>{
                       setName(text)
                   }}/>
                   {emptyName === true && (
                       <Text style={{marginTop: pixelNormalize(10), marginLeft: pixelNormalize(30), color: 'red'}}> Please
                           Enter Name</Text>
                   )}

                   <InputComponent placeholder='Enter Mobile Number' value={number} onChange={(text) =>{
                       setNumber(text)
                   }}/>
                   {emptyNumber === true && (
                       <Text style={{marginTop: pixelNormalize(10), marginLeft: pixelNormalize(30), color: 'red'}}> Please
                           Enter Number</Text>
                   )}

                   <InputComponent placeholder='Enter Email ID' value={email}
                                   onChange={(text) =>{
                                       setEmail(text)
                                   }}/>
                   {emptyEmail === true && (
                       <Text style={{marginTop: pixelNormalize(10), marginLeft: pixelNormalize(30), color: 'red'}}> Please
                           Enter Email</Text>
                   )}

                   <InputComponent placeholder='Enter  Password' type='password' value={password} onChange={(text) =>{
                       setPassword(text)
                   }}/>
                   {emptyPassword === true && (
                       <Text style={{marginTop: pixelNormalize(10), marginLeft: pixelNormalize(30), color: 'red'}}> Please
                           Enter Password</Text>
                   )}

                   <InputComponent placeholder='Enter Confirm Password' type='password' value={confirmPassword}
                                   onChange={(text) =>{
                                       setConfirmPassword(text)
                                   }}
                   />
                   {emptyConfirmPassword === true && (
                       <Text style={{marginTop: pixelNormalize(10), marginLeft: pixelNormalize(30), color: 'red'}}> Please
                           Enter Confirm Password</Text>
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
                       marginBottom:pixelNormalize(25),
                   }}
                         onPress={()=>{
                             navigate.goBack();
                         }}> Already Have Account ?</Text>
               </ScrollView>

            </View>

        </>
    )
}
export default SignUpScreen;
const styles = StyleSheet.create({
    image: {
        width: pixelNormalize(100),
        height: pixelNormalize(100),
        alignSelf: "center",
        marginTop: pixelNormalize(50),
    },
    textLogin: {
        marginTop: pixelNormalize(25),
        alignSelf: 'center',
        fontSize: pixelNormalize(30),
        fontWeight: '600',
        color: '#212121'
    },

})
