import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCChEXLLB12_Ua3S--clt5JcWdhzgQPiug",
  authDomain: "ecommerce-react-edb89.firebaseapp.com",
  projectId: "ecommerce-react-edb89",
  storageBucket: "ecommerce-react-edb89.appspot.com",
  messagingSenderId: "776416473017",
  appId: "1:776416473017:web:5bf6ea37be7c9b2c031068",
  measurementId: "G-Q47B1D0PFC"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
