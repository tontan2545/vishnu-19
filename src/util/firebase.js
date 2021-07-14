import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDfWhw3Q6DMF4CnwGYQ1SMJKbtnss-0TeM",
    authDomain: "vishnu-105.firebaseapp.com",
    databaseURL: "https://vishnu-105-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vishnu-105",
    storageBucket: "vishnu-105.appspot.com",
    messagingSenderId: "409268475987",
    appId: "1:409268475987:web:ff2f31591d592d293dcea6",
    measurementId: "G-CY4RF3Q56D"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;