import {StyleSheet,Text, TouchableOpacity} from "react-native";
import {pixelNormalize} from "../../Constants/Size";

const ButtonComponent=({onPress,title,bgColor,textColor})=>{
return(
    <>
    <TouchableOpacity style={{
        backgroundColor:bgColor,alignItems:'center',
        justifyContent:'center',
        width:'85%',
        height:pixelNormalize(50),
        borderRadius:pixelNormalize(10),
        alignSelf:'center',
        marginTop:pixelNormalize(50),
    }
    }
    onPress={()=>{
        onPress()
    }}>
        <Text style={{color:textColor,fontSize:pixelNormalize(18),fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
    </>
)
}
export default ButtonComponent
const styles=StyleSheet.create({
button:{

}
})
