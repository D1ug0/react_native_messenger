// import React from 'react';
// import {View, Text} from 'react-native'
// import Stomp from 'stompjs'
// import SockJS from 'sockjs-client'
// import axios from 'axios'
// let stompClient_test4 = null
//
// const Sample = () => {
//
//     // axios.get('http://172.20.10.2:8080/').then(res=>console.log(res.data))
//     // let socket = new WebSocket("http://172.20.10.2:8080/ws");
//     //
//     // socket.onopen = function(e) {
//     //     alert("[open] Соединение установлено");
//     //     alert("Отправляем данные на сервер");
//     //     socket.send("Меня зовут Джон");
//     // };
//     // SockJS = require("sockjs-client");
//
//     let SockJS = new SockJS("https://mgupi.herokuapp.com/ws");
//     stompClient_test4 = Stomp.over(SockJS);
//
//     stompClient_test4.connect({login : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjE3OTI2NDAwfQ.ShxsZnzNmmmjQtLYmlMyH1kUe-4VQcsYQwY-O90k_c7TpH0-4RDcGt768gFf6aFoz3nc7gXo1qqwKy1FociNqw'}, onConnected, error_callback);
//
//     return(
//         <View>
//             <Text>
//                 Привет
//             </Text>
//         </View>
//     )
// }
//
// const onConnected = () => {
//     console.log("connected");
// // test1
//     let headers_good = {Authentication:
//             'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImV4cCI6MTYxNzc0MjgwMH0.wb0CjLe4LSlz7LTB_wbrw7-Sp5o3y7Tct3ziqD3_GPYiLyZfmbAphTb7KpO2fK0EXrKAMYhOvujqTBQnLOAqxw'
//     };
//
//     let quote_good = { content : "Hello world", recipient : "test" }
//     stompClient_test4.send("/messenger/chat", headers_good, JSON.stringify(quote_good));
//
//     stompClient_test4.subscribe(
//         "/user/test1/messages",
//         error_callback,
//         headers_good
//     );
//
//
// };
//
// let error_callback = function(error) {
// // display the error's message header:
//
// };
//
// export default Sample


// function connect() {
//     var socket = new SockJS('/gs-guide-websocket');
//     stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//         setConnected(true);
//         console.log('Connected: ' + frame);
//         stompClient.subscribe('/topic/greetings', function (greeting) {
//             showGreeting(JSON.parse(greeting.body).content);
//         });
//     });
// }
//
// function disconnect() {
//     if (stompClient !== null) {
//         stompClient.disconnect();
//     }
//     setConnected(false);
//     console.log("Disconnected");
// }
//
// function sendName() {
//     stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
// }

let stompClient = null
import {View, Text} from 'react-native'
import React from 'react';

const Stomp = require("stompjs");
let SockJS = require("sockjs-client");

import { AsyncStorage } from 'react-native';

const Sample =  () => {

    SockJS = new SockJS("https://mgupi.herokuapp.com/ws");
    stompClient = Stomp.over(SockJS);

    stompClient.connect({login : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjE3OTI2NDAwfQ.ShxsZnzNmmmjQtLYmlMyH1kUe-4VQcsYQwY-O90k_c7TpH0-4RDcGt768gFf6aFoz3nc7gXo1qqwKy1FociNqw`}, onConnected, error_callback);

    return(
        <View>
            <Text>
                Привет
            </Text>
        </View>)
};

const onConnected = async () => {
    const JWT = await AsyncStorage.getItem('jwt');
    console.log("connected");
// test1
//     let headers_good = {Authentication:
//             'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImV4cCI6MTYxNzc0MjgwMH0.wb0CjLe4LSlz7LTB_wbrw7-Sp5o3y7Tct3ziqD3_GPYiLyZfmbAphTb7KpO2fK0EXrKAMYhOvujqTBQnLOAqxw'
//     };

    let headers_good = {
        Authentication:
            `Bearer ${JWT}`,

    };

    stompClient.subscribe(
        "/user/test/messages",
        callback,
        headers_good
    );


};

let error_callback = function(error) {
    // display the error's message header:
    alert(error.headers.message);
};

const callback = function(message) {
    // called when the client receives a STOMP message from the server
    if (message.body) {
        console.log("got message with body " + message.body)
    } else {
        console.log("got empty message");
    }
};

export default Sample;