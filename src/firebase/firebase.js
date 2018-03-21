import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDpVleUKBG126rrx_MQnKHLyUImTT0fuwg",
    authDomain: "finanzapp-f16d6.firebaseapp.com",
    databaseURL: "https://finanzapp-f16d6.firebaseio.com",
    projectId: "finanzapp-f16d6",
    storageBucket: "finanzapp-f16d6.appspot.com",
    messagingSenderId: "1034951993194"
};

firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default }







