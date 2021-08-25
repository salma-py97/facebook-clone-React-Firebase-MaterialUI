import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Ft5m6PU7a_MDEbu0z7mD0-gliEqRf1U",
  authDomain: "facebook-clone-782aa.firebaseapp.com",
  projectId: "facebook-clone-782aa",
  storageBucket: "facebook-clone-782aa.appspot.com",
  messagingSenderId: "390676671408",
  appId: "1:390676671408:web:86c05960ad6b638a880475",
  measurementId: "G-MYGL1KE708"
};

// connecting front-end to back-end
const firebaseApp = firebase.initializeApp(firebaseConfig)
// database
const db = firebaseApp.firestore()

// auth
const auth = firebase.auth()
// provider
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider } 
export default db