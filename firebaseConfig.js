import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth';

// firebase init goes here
const config = {
    apiKey: "AIzaSyAHdlRstqLJuwtSYX3GlBQPLOf3FNlBG1w",
    authDomain: "tallerframeworkjs.firebaseapp.com",
    databaseURL: "https://tallerframeworkjs.firebaseio.com",
    projectId: "tallerframeworkjs",
    storageBucket: "tallerframeworkjs.appspot.com",
    messagingSenderId: "227883648235",
    appId: "1:227883648235:web:aaced749f3ddea433eaaae",
    measurementId: "G-RMMZWZF62Z"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const dependenciesCollection = db.collection('dependencies')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    dependenciesCollection
}