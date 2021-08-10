import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDa1mi9eC1U7ah3I7bWYboqYES6wabzRBQ",
    authDomain: "notification-app-32265.firebaseapp.com",
    projectId: "notification-app-32265",
    storageBucket: "notification-app-32265.appspot.com",
    messagingSenderId: "729218370356",
    appId: "1:729218370356:web:95e806cb53ff79d1893361"
};

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();

export const configureNotifications = () => {
    Notification.requestPermission()
        .then(permission => {
            console.log(permission);
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

messaging.onMessage(function(payload) {
    console.log('onMessage ', payload);
})