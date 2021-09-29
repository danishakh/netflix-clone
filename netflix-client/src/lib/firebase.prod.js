import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

// we need a config here
const firebaseConfig = {
	apiKey: "AIzaSyBDdhlOuXEXL6b-p5hAHtntnJ7YLO7DcT8",
	authDomain: "netflix-clone-f86c6.firebaseapp.com",
	projectId: "netflix-clone-f86c6",
	storageBucket: "netflix-clone-f86c6.appspot.com",
	messagingSenderId: "849774996185",
	appId: "1:849774996185:web:d9efacfe9b8cec3a512cc8",
	measurementId: "G-QG22GGF2PF",
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seed the firestore with our data. already did this once, keep this commented out so that duplicate data isn't seeded in our firestore when the code initializes our firebase app
// seedDatabase(firebase);

export { firebase };
