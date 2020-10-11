import * as firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebaseコンソールで作成した環境変数を定義(.envを参照)
const firebaseApp = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// reactcomponentから認証関係などのmoduleを使用できるように定義
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
