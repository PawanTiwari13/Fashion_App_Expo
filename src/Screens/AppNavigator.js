import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import header from "@react-navigation/stack/src/views/Header/Header";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";

function AppNavigator(){
const Stack=createStackNavigator();
    return(
        <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen
             name='SplashScreen'
             options={{
                 headerShown:false
             }}
             component={SplashScreen}/>
<Stack.Screen name='LoginScreen'
              options={{
                  headerShown:false
              }}
component={LoginScreen}
/>
         </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator
