import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import InputComponent from "./Components/InputComponent";
import ButtonComponent from "./Components/ButtonComponent";
import {pixelNormalize} from "../Constants/Size";
import {useNavigation} from "@react-navigation/native";

const SignUpScreen=()=>{
  const navigate=useNavigation();
    return(
        <>
            <View style={{flex: 1 }}>
               <ScrollView>
                   <Image style={styles.image} source={require('../Images/fshn-modified.png')}></Image>
                   <Text style={styles.textLogin}>Create New Account</Text>
                   <InputComponent placeholder='Enter Name'/>
                   <InputComponent placeholder='Enter Mobile Number'/>
                   <InputComponent placeholder='Enter Email ID'/>

                   <InputComponent placeholder='Enter Email Password' type='password'
                   />
                   <ButtonComponent title='Login'
                                    bgColor='#212121'
                                    textColor='#ffff'
                                    onPress={() => {
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
