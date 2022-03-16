//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAfYwHepWOMXPUwFCNVllhD-fCsQ6cKqpE",
      authDomain: "kwitter-3f6c1.firebaseapp.com",
      databaseURL: "https://kwitter-3f6c1-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f6c1",
      storageBucket: "kwitter-3f6c1.appspot.com",
      messagingSenderId: "645557015189",
      appId: "1:645557015189:web:9a75fbfd1c46b23d5d419c"
    }

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value= "";
}