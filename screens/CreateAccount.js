import React from 'react';
import {Text} from "react-native-paper";
import {View, Button} from "react-native";
import {AuthContext} from "../context";

const CreateAccount = ({ navigation }) => {
    const { signUp } = React.useContext(AuthContext);
    return (
        <View>
            <Text>
                Create Account
            </Text>
            <Button title="Sign Up" onPress={()=> signUp()}/>
        </View>
    );
}

export default CreateAccount;