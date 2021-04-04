import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert} from 'react-native'

import {AuthContext} from "./context";
import Tabs from './navigation/tabs'
import {Provider} from "react-redux";
import store from "./store/store-reducer";
import {CreateAccount, Message, SignIn, Splash} from "./screens";
import axios from 'axios'
import {AsyncStorage} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
    const [isLoading, setLoading] = React.useState(true)
    const [userToken, setUserToken] = React.useState('None')


    const authContext = React.useMemo(() => {
        return {
            signIn:
                async ({username, password, navigation}) => {
                    try {
                        await axios.post(
                            'https://mgupi.herokuapp.com/auth',
                            {
                                username: username,
                                password: password
                            }
                        ).then(res => {
                            try {
                                console.log(res.data.jwtToken)
                                setLoading(false);
                                AsyncStorage.setItem('jwt', `${res.data.jwtToken}`);
                                setUserToken(res.data.jwtToken)
                            } catch (e) {
                                console.log('error', e)
                            }
                        })
                    } catch (error) {
                        alert(error.message);
                    }
                }
            ,
            signUp:
                async ({username, password, firstName, lastName, navigation}) => {
                    try {
                        await axios.get(`https://mgupi.herokuapp.com/registration/checkUsername/${username}`)
                            .then(res => {
                                if (!res.data) {
                                    alert('Логин занят!')
                                } else {
                                    axios.post(
                                        'https://mgupi.herokuapp.com/registration',
                                        {
                                            username,
                                            password,
                                            firstName,
                                            lastName
                                        }
                                    ).then(res => {
                                        try {
                                            setLoading(false);
                                            Alert.alert(
                                                "Авторизация прошла успешно!",
                                                `${res.data.username} - Поздравляем вас!`,
                                                [
                                                    {text: "OK", onPress: () => navigation.navigate('SignIn')}
                                                ]
                                            );
                                        } catch (e) {
                                            console.log('error', e)
                                        }
                                    })
                                }
                            })
                    } catch (error) {
                        alert(error.message);
                    }
                }
            ,
            signOut: () => {
                setLoading(false);
                AsyncStorage.removeItem('jwt');
                setUserToken('None')
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
                    {userToken !== 'None' ?
                        <Stack.Navigator
                            screenOptions={{headerShown: false}}
                            initialRouteName={"ChatScreen"}
                        >
                            <Stack.Screen name="ChatScreen" component={Tabs}/>
                            <Stack.Screen name="Message" component={Message}/>
                            <Stack.Screen name="Profile" component={Tabs}/>
                            <Stack.Screen name="SampleComponent" component={Tabs}/>
                        </Stack.Navigator>
                        :
                        <Stack.Navigator>
                            <Stack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
                            <Stack.Screen name="CreateAccount" component={CreateAccount}
                                          options={{title: 'Create Account'}}/>
                        </Stack.Navigator>
                    }
                </NavigationContainer>
            </Provider>
        </AuthContext.Provider>
    );
}
