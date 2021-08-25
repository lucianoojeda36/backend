import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const app = firebase.initializeApp({

    apiKey: "AIzaSyA0IudQskTfTdbg3fEy9p6EXXU3tR7gv1I",

    authDomain: "restaurante-a187f.firebaseapp.com",

    projectId: "restaurante-a187f",

    storageBucket: "restaurante-a187f.appspot.com",

    messagingSenderId: "664079127359",

    appId: "1:664079127359:web:42fb939ac947317aff398a"
  


});


const storage = firebase.storage();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export default app;

export { storage, firebase, googleAuthProvider,facebookAuthProvider };
