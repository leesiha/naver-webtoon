// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyACbkDIbmCRC-qkEjrTtLFSr6fqoDop5J4",
    authDomain: "naver-webtoon-41c1d.firebaseapp.com",
    projectId: "naver-webtoon-41c1d",
    storageBucket: "naver-webtoon-41c1d.appspot.com",
    messagingSenderId: "886932278131",
    appId: "1:886932278131:web:cd6ff969bd1aaf27961306"
};

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
export const firebaseInstance = firebase;