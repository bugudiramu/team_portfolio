import * as firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3Dqkix40X8qnEM0pWmrC2oJytd-agF6I',
  authDomain: 'team-portfolio.firebaseapp.com',
  databaseURL: 'https://team-portfolio.firebaseio.com',
  projectId: 'team-portfolio',
  storageBucket: 'team-portfolio.appspot.com',
  messagingSenderId: '395305126970',
  appId: '1:395305126970:web:11ed4ad92d84c2878af903',
  measurementId: 'G-B65DHZT3R1',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
