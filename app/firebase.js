// Import the functions you need from the SDKs you need //
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBfXPOveU6HYIgCtRIgRlf9kjKYrXR1sBk',
  authDomain: 'mayapan-sm.firebaseapp.com',
  projectId: 'mayapan-sm',
  storageBucket: 'mayapan-sm.firebasestorage.app',
  messagingSenderId: '763146721844',
  appId: '1:763146721844:web:8563beb6c912c60d144861',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
