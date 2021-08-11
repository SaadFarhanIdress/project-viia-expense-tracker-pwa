import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvHAsb6bC98hnE72_N6QyfYLA-KPBYDpE",
    authDomain: "expense-tracker-69475.firebaseapp.com",
    projectId: "expense-tracker-69475",
    storageBucket: "expense-tracker-69475.appspot.com",
    messagingSenderId: "291589673680",
    appId: "1:291589673680:web:63958fb909ad9bfe14c4d5"
};

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();

export const configureNotifications = () => {
    Notification.requestPermission()
        .then(permission => {
            console.log("Permission,", permission);
            if (permission === "granted") {
                messaging.getToken().then(currToken => {
                    if (currToken) {
                        console.log('Token ==> ', currToken);
                    } else {
                        console.log('No instance ID token available. Request permission to generate token.');
                    }
                })
            }
        })
        .catch(e => {
            console.log('An error while the token is bein retreived', e);
        })
}
