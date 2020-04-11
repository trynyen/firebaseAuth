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

let user = firebase.auth().currentUser;

if (user) {
  console.log("logged in")
} else {
  console.log("User logged out")
}

//Login
login.addEventListener("click", e => {
  e.preventDefault();
  console.log("login clicked")

  let email = emailVal.value;
  let password = passwordVal.value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)
    if (user) {
      console.log("logged in")
    }
  });
});


//Register
register.addEventListener("click", e => {
  e.preventDefault();
  console.log("login clicked")

  let email = emailVal.value;
  let password = passwordVal.value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)

  }).finally(data => {
    console.log(data)
  });
});


// Logout
logout.addEventListener("click", e => {
  e.preventDefault();
  console.log("logout clicked")

  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(`${errorCode}: ${errorMessage}`)
  });
});
