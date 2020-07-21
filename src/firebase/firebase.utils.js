import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzPoHRHMgjMzjhnM-oFu_QD4LAmHeZZtU",
  authDomain: "kings-db-85963.firebaseapp.com",
  databaseURL: "https://kings-db-85963.firebaseio.com",
  projectId: "kings-db-85963",
  storageBucket: "kings-db-85963.appspot.com",
  messagingSenderId: "1001557577842",
  appId: "1:1001557577842:web:f5719238c536f427a4b2eb",
  measurementId: "G-N2ENGLJ9J3",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
