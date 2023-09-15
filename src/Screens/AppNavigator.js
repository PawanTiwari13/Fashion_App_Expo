import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import header from "@react-navigation/stack/src/views/Header/Header";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

function AppNavigator(){
const Stack=createStackNavigator();
    return(
        <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen
             name='SplashScreen'
             options={{
                 headerShown:false,
                 headerTintColor:'#620031'
             }}
             component={SplashScreen}/>
<Stack.Screen name='LoginScreen'
              options={{
                  headerShown:true,
                  headerStyle:{ backgroundColor:'#95004b'}
              }}
component={LoginScreen}
/>
             <Stack.Screen name='SignUpScreen'
             component={SignUpScreen}
             options={{
                 headerShown:true,
                 headerStyle:{ backgroundColor:'#95004b'}
             }}/>
         </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator
