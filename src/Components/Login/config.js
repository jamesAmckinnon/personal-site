import firebase from 'firebase/app'


const config = {
  apiKey: "AIzaSyCEEZ1v0k0zeuH9T5gNqigdj6JyOPKzGuY",
  authDomain: "james-documentation.firebaseapp.com",
  databaseURL: "https://james-documentation-default-rtdb.firebaseio.com",
  projectId: "james-documentation",
  storageBucket: "james-documentation.appspot.com",
  messagingSenderId: "91029183370",
  appId: "1:91029183370:web:b306082384b37850464673"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();