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
    const handleLogin = () => {
        if (!name && !number && !email && password && !confirmPassword) {
            // Both email and password are empty
            Alert.alert(
                'Empty Fields',
                'Please enter your email and password to proceed.',
                [{ text: 'OK', onPress: () => {} }]
            );
        } else if (!name) {
            // Email is empty
            Alert.alert(
                'Empty Email',
                'Please enter your email to proceed.',
                [{ text: 'OK', onPress: () => {} }]
            );
        } else if (!number) {
            // Password is empty
            Alert.alert(
                'Empty Password',
                'Please enter your password to proceed.',
                [{ text: 'OK', onPress: () => {} }]
            );

        }
     else if (!email) {
        // Password is empty
        Alert.alert(
            'Empty Password',
            'Please enter your password to proceed.',
            [{ text: 'OK', onPress: () => {} }]
        );

    } else if (!password) {
    // Password is empty
    Alert.alert(
        'Empty Password',
        'Please enter your password to proceed.',
        [{ text: 'OK', onPress: () => {} }]
    );

}

     else if (!confirmPassword) {
        // Password is empty
        Alert.alert(
            'Empty Password',
            'Please enter your password to proceed.',
            [{ text: 'OK', onPress: () => {} }]
        );

    }

    else {
            // Perform the login logic here
            // If email and password are not empty
            // You can make an API request, validate the credentials, etc.
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
                   <InputComponent placeholder='Enter Mobile Number' value={number} onChange={(text) =>{
                       setNumber(text)
                   }}/>
                   <InputComponent placeholder='Enter Email ID' value={email}
                                   onChange={(text) =>{
                                       setEmail(text)
                                   }}/>
                   <InputComponent placeholder='Enter  Password' type='password' value={password} onChange={(text) =>{
                       setPassword(text)
                   }}/>
                   <InputComponent placeholder='Enter Confirm Password' type='password' value={confirmPassword}
                                   onChange={(text) =>{
                                       setConfirmPassword(text)
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
