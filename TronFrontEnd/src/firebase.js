import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import firebase from "firebase/compat/app";

//https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB0zPl4V8rmuYAna6ruiFeSCNshhz7ZrNs",
  authDomain: "tron-abed4.firebaseapp.com",
  projectId: "tron-abed4",
  storageBucket: "tron-abed4.appspot.com",
  messagingSenderId: "134258254001",
  appId: "1:134258254001:web:567995005089ce6e8b0290",
  measurementId: "G-SH1DXK6VX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
const db = getFirestore(app)