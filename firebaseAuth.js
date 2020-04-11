  // Your web app's Firebase configuration
  const firebaseConfig = {
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
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const logout = document.querySelector("#logout");
const emailVal = document.querySelector("#emailVal");
const passwordVal = document.querySelector("#passwordVal");

//Login
login.addEventListener("click", e => {
  e.preventDefault();
  console.log("login clicked")

  let email = emailVal.value;
  let password = passwordVal.value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)
  });

})


// //Sign Up
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// // Logout
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });