import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import {ChatScreen, Feeds, Profile} from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                borderTopWidth: 0,
                backgroundColor: "transparent",
                elevation: 0
            }
        }}>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => <FontAwesome5 name="user" size={24}/>
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: () => <FontAwesome5 name="comment" size={24}/>
                }}
            />
            <Tab.Screen
                name="Feeds"
                component={Feeds}
                options={{
                    tabBarIcon: () => <FontAwesome5 name="newspaper" size={24}/>
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs