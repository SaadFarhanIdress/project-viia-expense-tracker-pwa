importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDa1mi9eC1U7ah3I7bWYboqYES6wabzRBQ",
    authDomain: "notification-app-32265.firebaseapp.com",
    projectId: "notification-app-32265",
    storageBucket: "notification-app-32265.appspot.com",
    messagingSenderId: "729218370356",
    appId: "1:729218370356:web:95e806cb53ff79d1893361"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const title = "Hello world!";
    const options = {
        body: payload.data.status
    }
    return self.registration.showNotification(title, options);
})