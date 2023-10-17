import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import HomePage from "./Components/HomePage";

function AppNavigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='SplashScreen'
                    options={{
                        headerShown: false,
                        headerTintColor: '#620031'
                    }}
                    component={SplashScreen}/>
                <Stack.Screen name='LoginScreen'
                              options={{
                                  headerShown: true,
                                  headerStyle: {backgroundColor: '#95004b'}
                              }}
                              component={LoginScreen}
                />
                <Stack.Screen name='SignUpScreen'
                              component={SignUpScreen}
                              options={{
                                  headerShown: true,
                                  headerStyle: {backgroundColor: '#95004b'}

                              }}/>
                <Stack.Screen name='HomePage' component={HomePage}
                              options={{
                    headerShown: true,
                    headerStyle: {backgroundColor: '#95004b'}
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
