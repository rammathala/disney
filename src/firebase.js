
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALZ69P5MndHTAJOYRKMZEixOVsKGKxV6Q",
  authDomain: "disneyclone-e796b.firebaseapp.com",
  projectId: "disneyclone-e796b",
  storageBucket: "disneyclone-e796b.appspot.com",
  messagingSenderId: "953473435528",
  appId: "1:953473435528:web:50965b2778e6ca5773dc3d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;