import firebase from "firebase";

const config = {
  apiKey: "AIzaSyASQOCHFJb6XoA0YafiO-tLxTFYOGSGMk4",
  authDomain: "cookbook-ucn.firebaseapp.com",
  projectId: "cookbook-ucn",
  storageBucket: "cookbook-ucn.appspot.com",
  messagingSenderId: "31731996270",
  appId: "1:31731996270:web:13a266a74ca32c7628b87f"
};

firebase.initializeApp(config);

export default firebase;
