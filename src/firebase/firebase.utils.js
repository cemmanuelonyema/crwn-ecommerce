// // Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCB2hiI2nKMms1wvNjtmUBmfeMsDgA7sH4",
    authDomain: "crwn-ecommerce-91636.firebaseapp.com",
    projectId: "crwn-ecommerce-91636",
    storageBucket: "crwn-ecommerce-91636.appspot.com",
    messagingSenderId: "560037652353",
    appId: "1:560037652353:web:058100c13cc6f7bcd76a80",
    measurementId: "G-FKV6550Q7W"
};

firebase.initializeApp;
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export const analytics = getAnalytics(app);

const provider = new firebase
    .auth
    .GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth
    .signInWithPopup(provider)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

export const createUserProfileDocument = async(userAuth, ...otherData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`)
    console.log(userRef);
    const snapShot =  await userRef.get();
    console.log(snapShot)

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,  email, createdAt, ...otherData
            })
            
        } catch (err) {
            console.error(' Error creating user', err.message);
        }
    }
    return  userRef
}
export default firebase;
