import React, {useState} from 'react'
import {View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView} from 'react-native'
import styled from "styled-components/native";
import Chat from "./Chat/Chat";
import {connect} from "react-redux";
import axios from "axios";

const ChatScreen = (props) => {

    const [value, onChangeText] = useState('Поиск людей ');
    const {navigation} = props

    function renderNavbar(){
        return(
            <Navbar>
                <SafeAreaView>
                    <TextTitle>Чаты</TextTitle>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </SafeAreaView>
            </Navbar>
        )
    }

    function renderChats(){
        return(
            <ScrollView style={styles.scrollView}>
                <Chat navigate={navigation.navigate} items={props.items}/>
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderNavbar()}
            {renderChats()}
        </SafeAreaView>
    )
}

const Navbar = styled.View`
  padding: 0 21px;
  height: 178px;
  background: #568EE1;
  justify-content: center;
`

const TextTitle = styled.Text`
  margin-bottom: 17px;
  font-weight: bold;
  font-size: 24px;
  color: #E9E8E8;
`

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#EBEBEB",
    },
    input: {
        paddingLeft: 22,
        paddingRight: 22,
        height: 44,
        width: 313,
        color: '#C6C5C5',
        backgroundColor: '#E9E8E8',
        borderRadius: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#568EE1'
    }
});

let mapStateToProps = (state) => {
    return{
        items: state.chatPage.items,
    }
}

export default connect(mapStateToProps)(ChatScreen);