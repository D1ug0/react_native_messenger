import React, {useEffect} from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Avatar} from 'react-native-paper'
import styled from "styled-components/native";
import {AuthContext} from "../context";
import axios from "axios";
import { AsyncStorage } from 'react-native';

const Profile = () => {

    const { signOut } = React.useContext(AuthContext)

    // const _retrieveData = async () => {
    //     try {
    //         const JWT = await AsyncStorage.getItem('jwt');
    //         if (JWT !== null) {
    //             // We have data!!
    //             console.log(JWT);
    //         }
    //     } catch (error) {
    //         // Error retrieving data
    //     }
    // };
    //
    // useEffect(() => {
    //     _retrieveData().then(data => setProducts(data));
    // }, []);

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