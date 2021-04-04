import React from 'react';
import {View, Button, TextInput, StyleSheet} from "react-native";
import styled from 'styled-components/native'
import {AuthContext} from "../../context";

const CreateAccount = ({ navigation }) => {

    const { signUp } = React.useContext(AuthContext);

    const [username, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');

    return (
        <View style={styles.container}>
            <TextTitle>
                Регистрация
            </TextTitle>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                placeholder="Введите email или username"
                value={username}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Введите password"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeFirstName}
                value={firstName}
                placeholder="Введите Имя"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeLastName}
                value={lastName}
                placeholder="Введите Фамилию"
            />
            <Button title="Зарегистрироваться" onPress={()=> signUp({username,password,firstName,lastName, navigation})}/>
        </View>
    );
};

const TextTitle = styled.Text`
  margin-bottom: 20px;
  font-weight: bold;
  font-style: normal;
  font-size: 30px;
`

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        paddingLeft: 20,
        paddingRight: 20,
        width: 250,
        height: 50,
        margin: 8,
        borderWidth: 1,
        borderRadius: 30
    },
});

export default CreateAccount;