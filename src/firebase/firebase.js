import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBAIOwiYePyi8fypA2aYZpeFT9M1mKLZpg",
    authDomain: "crimereport-84825.firebaseapp.com",
    databaseURL: "https://crimereport-84825.firebaseio.com",
    projectId: "crimereport-84825",
    storageBucket: "crimereport-84825.appspot.com",
    messagingSenderId: "424224837605"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
  auth,
};