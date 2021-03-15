import React, {useEffect} from 'react';
import {LogBox, SafeAreaView, StyleSheet, Text, View} from "react-native";
import styled from 'styled-components/native'
import avatar from '../../assets/myImg/avatar.jpg'
import Swipeable from "react-native-swipeable-row";
import {FontAwesome5} from "@expo/vector-icons";

export default function Chat({items, navigate}) {

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    return (
        <WrapperChats>
            {items.map((item, index) => (

                    <Swipeable
                        rightButtons={[
                            <SwipeViewButton style={{ backgroundColor: '#B4C1CB', marginRight: 20 }}>
                                <FontAwesome5 name="volume-up" size={40}/>
                            </SwipeViewButton>,
                            <SwipeViewButton>
                                <FontAwesome5 name="trash-alt" size={40}/>
                            </SwipeViewButton>
                        ]}>
                        <ChatBlock onPress={navigate.bind(this, 'Profile')} key={index}>
                            <Avatar source={avatar}/>
                            <View>
                                <Community>
                                    {item.community}
                                </Community>
                                <Message>
                                    Я приболел, кто может заменить меня?
                                </Message>
                            </View>
                        </ChatBlock>
                    </Swipeable>

                )
            )}
        </WrapperChats>
    );
};

const ChatBlock = styled.TouchableOpacity`
  width: 380px;
  height: 70px;
  border-radius: 40px;
  background-color: #E0E0E0;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding-left: 12px;
`

const WrapperChats = styled.View`
  display: flex;
  padding-left: 10px;
`

const SwipeViewButton = styled.TouchableOpacity`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  height: 70px;
  width: 80px;
  border-radius: 30px;
`

const Avatar = styled.Image`
  width: 46px;
  height: 43px;
  border-radius: 50px;
  margin-right: 10px;
`

const Community = styled.Text`
  font-weight: bold;
  font-size: 14px;
`

const Message = styled.Text`
  font-weight: normal;
  font-size: 14px;
`



