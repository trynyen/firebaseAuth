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

  firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .catch(error => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)
  })
});

//Register
register.addEventListener("click", e => {
  e.preventDefault();
  console.log("login clicked")

  let email = emailVal.value;
  let password = passwordVal.value;

  firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(userCred => {
    return userCred.user.displayName ? console.log(userCred.user.displayName) : console.log(userCred.user.updateProfile({displayName:"ELEPHANT"}))
  })
  .catch(error => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)

  })
});

// Logout
logout.addEventListener("click", e => {
  e.preventDefault();

  firebase.auth()
  .signOut()
  .then(() => {
    console.log("Sign-out successful") 
  }).catch(function (error) {
    // An error happened.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)
  });
});

//Checking if user logged in out out 
firebase.auth()
.onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log("user is signed in")
    var displayName = user.displayName;
    var email = user.email;
    console.log(email, displayName)
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    
  } else {
    // User is signed out.
    console.log("user is signed out")
  }
});