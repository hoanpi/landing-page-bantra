// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLjwtNwAEMKYp39IXZdVgxh1gSUkzuKyk',
  authDomain: 'contact-4685a.firebaseapp.com',
  projectId: 'contact-4685a',
  storageBucket: 'contact-4685a.appspot.com',
  messagingSenderId: '128320149028',
  appId: '1:128320149028:web:c1584c19916947b5e52ab1',
  measurementId: 'G-K84FRCNR65'
}

// Initialize Firebase
function initializeAppIfNecessary() {
  try {
    return getApp()
  } catch (any) {
    return initializeApp(firebaseConfig)
  }
}

export const app = initializeAppIfNecessary()
// export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)
