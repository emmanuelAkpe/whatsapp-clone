import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDxBJuNcZMyPTCVG4EHuqMBiyTKe4AAHZQ",
  authDomain: "whatsapp-73efa.firebaseapp.com",
  projectId: "whatsapp-73efa",
  storageBucket: "whatsapp-73efa.appspot.com",
  messagingSenderId: "859731929898",
  appId: "1:859731929898:web:5ff23ce6d8923e37544c53",
  measurementId: "G-T2QQNPGY6M"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;