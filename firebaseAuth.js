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
const database = firebase.database();
let clickCounter = 0;

const login = document.querySelector("#login");
const register = document.querySelector("#register");
const logout = document.querySelector("#logout");
const emailVal = document.querySelector("#emailVal");
const passwordVal = document.querySelector("#passwordVal");
const clickBtn = document.querySelector("#click-button")
let clickVal = document.querySelector("#click-value")

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
      return userCred.user.displayName ? console.log(userCred.user.displayName) : console.log(userCred.user.updateProfile({ displayName: "ELEPHANT" }))
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
      // click()
      // User is signed in.
      console.log(user)
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


//Check real time database
clickBtn.addEventListener("click", function () {
  var currUser = firebase.auth().currentUser
      if (currUser) {

        // Add to clickCounter
        clickCounter++;

        //Store Click Data to Firebase in a JSON property called clickCount
        //Note how we are using the Firebase .set() method
        //Remember to update rules to allow user to read and/or write
        database.ref().set({
          clickCount: clickCounter
        })
      } else {
        // User is signed out.
        console.log("user is not logged in")
      }
})

// MAIN PROCESS + INITIAL CODE
    // --------------------------------------------------------------------------------

    // Using .on("value", function(snapshot)) syntax will retrieve the data
    // from the database (both initially and every time something changes)
    // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
    database.ref().on("value", function(snapshot) {

      // Then we console.log the value of snapshot
      console.log(snapshot.val());

      // Update the clickCounter variable with data from the database.
      clickCounter = snapshot.val().clickCount;

      // Then we change the html associated with the number.
      // $("#click-value").text(snapshot.val().clickCount);
      clickVal.textContent = clickCounter;


      // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
      // Again we could have named errorObject anything we wanted.
    }, function(errorObject) {

      // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
    });