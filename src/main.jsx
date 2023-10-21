import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhqgqRP2b9_3vUXY9KxU6sot2lRda0eYw",
  authDomain: "dg-cars-40d42.firebaseapp.com",
  projectId: "dg-cars-40d42",
  storageBucket: "dg-cars-40d42.appspot.com",
  messagingSenderId: "1067522031391",
  appId: "1:1067522031391:web:b0a7078cf9ec1b1c08fa2a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
