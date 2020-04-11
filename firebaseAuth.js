  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCSF3vkTZkaIMDZtFCx1Epk88dBRtQyJ34",
    authDomain: "fir-auth-ea0eb.firebaseapp.com",
    databaseURL: "https://fir-auth-ea0eb.firebaseio.com",
    projectId: "fir-auth-ea0eb",
    storageBucket: "fir-auth-ea0eb.appspot.com",
    messagingSenderId: "534760419104",
    appId: "1:534760419104:web:14313e70ad292a4228f145",
    measurementId: "G-V7XDPKLFLQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());