import React from 'react';
import {View, Text} from 'react-native'

const Message = ( {item} ) => {

    return (
        <View>
            <Text>
                Message Screen {item.community}
            </Text>
        </View>
    );
};

export default Message;