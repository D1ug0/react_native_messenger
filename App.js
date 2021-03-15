import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from "./context";
import Tabs from './navigation/tabs'
import {Provider} from "react-redux";
import store from "./store/store-reducer";
import {CreateAccount, SignIn, Splash} from "./screens";
import axios from 'axios'
import 'localstorage-polyfill';
import {AsyncStorage} from "react-native";

const Stack = createStackNavigator();

export default function App() {
    const [isLoading, setLoading] = React.useState(true)
    const [userToken, setUserToken] = React.useState(null)


    const authContext = React.useMemo(() => {
        return {
            signIn:
                async ({username, password}) => {
                    try {
                        await axios.post(
                            'https://mgupi.herokuapp.com/auth',
                            {
                                username: username,
                                password: password
                            }
                        ).then(res => {
                            try {
                                localStorage.setItem('token', JSON.stringify(res.data.jwtToken))
                                setLoading(false);
                                setUserToken(res.data.jwtToken)
                            } catch (e) {
                                console.log('error', e)
                            }
                        })

                        // console.log(response.data.jwtToken)
                        //
                        // if (response.data.jwtToken !== "None"){
                        //     setLoading(false);
                        //     setUserToken(response.data.jwtToken)
                        // }
                        // else {
                        //     alert("Неправильный логин или пароль!")
                        // }
                    } catch (error) {
                        // handle error
                        alert(error.message);
                    }
                }
            ,
            signUp: () => {
                setLoading(false);
                setUserToken('abcd')
            },
            signOut: () => {
                localStorage.removeItem('token')
                setLoading(false);
                setUserToken(null)
            },
        }
    }, [])

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    })

    if (isLoading) {
        return <Splash/>
    }

    return (
        <AuthContext.Provider value={authContext}>
            <Provider store={store}>
                <NavigationContainer>
                    {userToken ?
                        <Stack.Navigator
                            screenOptions={{headerShown: false}}
                            initialRouteName={"ChatScreen"}
                        >
                            <Stack.Screen name="ChatScreen" component={Tabs}/>
                            <Stack.Screen name="Profile" component={Tabs}/>
                            <Stack.Screen name="Feeds" component={Tabs}/>
                        </Stack.Navigator>
                        :
                        <Stack.Navigator>
                            <Stack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
                            <Stack.Screen name="CreateAccount" component={CreateAccount}
                                          options={{title: 'Create Account'}}/>
                        </Stack.Navigator>}
                </NavigationContainer>
            </Provider>
        </AuthContext.Provider>
    );
}

