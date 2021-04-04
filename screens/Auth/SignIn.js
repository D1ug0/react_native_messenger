import React from 'react';
import {Text} from "react-native-paper";
import {View, Button, TextInput, StyleSheet} from "react-native";
import {AuthContext} from "../../context";
import styled from 'styled-components/native'

const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);

    const [username, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            <TextTitle>
                Авторизация
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
            <Button title="Войти" onPress={()=> signIn({username,password})}/>
            <Button title="Создать аккаунт" onPress={()=> navigation.push('CreateAccount')} />
        </View>
    );
}

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
        margin: 12,
        borderWidth: 1,
        borderRadius: 30
    },
});

export default SignIn;