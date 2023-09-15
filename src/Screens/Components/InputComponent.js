import {StyleSheet, TextInput, View} from "react-native";
import {pixelNormalize} from "../../Constants/Size";

const InputComponent = ({value, onChange, placeholder, type}) => {
    return (
        <>
            <View style={styles.inputText}>
                <TextInput placeholder={placeholder}
                           maxLength={20}
                           secureTextEntry={type ? true : false}
                           style={{marginLeft: pixelNormalize(10)}}/>
            </View>
        </>
    )
}
export default InputComponent;
const styles = StyleSheet.create({
    inputText: {
        width: '90%',
        height: pixelNormalize(50),
        borderRadius: pixelNormalize(10),
        borderWidth: pixelNormalize(0.5),
        alignSelf: 'center',
        paddingLeft: pixelNormalize(20),
        paddingRight: pixelNormalize(20),
        marginTop: pixelNormalize(30),
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: pixelNormalize(30),
        height: pixelNormalize(30),

    }
});
