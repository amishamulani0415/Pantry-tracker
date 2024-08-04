// firebase.js or firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK4JLRQFQ1DHiVS0vtvQBFI_oQUhSfG1o",
  authDomain: "pantry-tracker-f7f2f.firebaseapp.com",
  projectId: "pantry-tracker-f7f2f",
  storageBucket: "pantry-tracker-f7f2f.appspot.com",
  messagingSenderId: "890674094881",
  appId: "1:890674094881:web:32b0ad0d5a69ab4cdd9460",
  measurementId: "G-9SEV2CNE8M"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
