const firebaseConfig = {
      apiKey: "AIzaSyARKQLyb8ADFR-tZWZ6VEJv5e9dC6IQu6w",
      authDomain: "letschat-9b3f2.firebaseapp.com",
      projectId: "letschat-9b3f2",
      storageBucket: "letschat-9b3f2.appspot.com",
      messagingSenderId: "391116766804",
      appId: "1:391116766804:web:0cffcea6b29df8f0a2b7c1"
    };
    
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
