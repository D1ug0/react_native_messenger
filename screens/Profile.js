import React from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Avatar} from 'react-native-paper'
import styled from "styled-components/native";
import {AuthContext} from "../context";
import axios from "axios";

const Profile = () => {

    let userToken = localStorage.getItem('token')
    React.useEffect(()=>{
        try {
            axios.get("https://mgupi.herokuapp.com/user", { headers: { Authorization : `Bearer ${userToken}` } } ).then((response) => {
                console.log('this is semcode',response.data);
            });
        }catch (e) {
            console.error(`Error received from axios.get: ${JSON.stringify(e)}`);
        }
    })

    const { signOut } = React.useContext(AuthContext)

    //"firstName": "test4",
    // "lastName": "test4",
    // "patronymic": "test5",
    // "phoneNumber": "test6",
    // "department": "КБ-4"

    function renderProfile() {
        return (
            <Block>
                <Avatar.Image source={{
                    uri: "http://cdn.onlinewebfonts.com/svg/download_504581.png",
                }}
                              size={200} style={{backgroundColor: 'white'}}/>
                <TextTitle>Имя: </TextTitle>
                <TextTitle>Фамилия: </TextTitle>
                <TextTitle>Отчество: </TextTitle>
                <TextTitle>Телефон: </TextTitle>
                <TextTitle>Кафедра: </TextTitle>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> signOut()}
                >
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Выйти</Text>
                </TouchableOpacity>
            </Block>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderProfile()}
        </SafeAreaView>
    )
}



const TextTitle = styled.Text`
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
`

const Block = styled.View`
  display: flex;
  align-items: center;
  padding: 50px;
`

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: 'red',
        width: 200,
        height: 50,
        borderRadius: 20
    }
})

export default Profile