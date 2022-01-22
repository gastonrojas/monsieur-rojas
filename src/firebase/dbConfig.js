// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqeY466AweBiVesd54Coi43tBlKKwqf-g",
  authDomain: "monsieur-gaston---react.firebaseapp.com",
  projectId: "monsieur-gaston---react",
  storageBucket: "monsieur-gaston---react.appspot.com",
  messagingSenderId: "966937829207",
  appId: "1:966937829207:web:946851c06cce7d85372812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const getFirestoreApp = ()=> {
    return app
}