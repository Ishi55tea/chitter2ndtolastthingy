
//ADD YOUR FIREBASE LINKS HERE

//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
function addRoom() {
      room_name = document.getElementById ("room_name").value;
      firebase.database().ref ("/").child (room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem ("room_name", room_name)
      window.location = "chitter_page.html"
}
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "chitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}