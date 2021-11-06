var firebaseConfig = {
    apiKey: "AIzaSyDpHucZF6sR1dcs-3miW2Ivj9PPNSb_5jo",
    authDomain: "project-chatter-a3dae.firebaseapp.com",
    databaseURL: "https://project-chatter-a3dae-default-rtdb.firebaseio.com",
    projectId: "project-chatter-a3dae",
    storageBucket: "project-chatter-a3dae.appspot.com",
    messagingSenderId: "160217299244",
    appId: "1:160217299244:web:bfe37e1230155373445489"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("username").innerHTML="Welcome" +user_name +"!";
  function addroom()
  {
        var Room_name=document.getElementById(room_name).value;
        firbase.database().ref("/").child(Room_name).update({
            purpose:"adding room name"  
        });
        localStorage.setItem("Room_name",Room_name);
        window.location="Kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name"- +Room_names);
   row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
   document.getElementById("output").innerHTML+=row;

   //End code
   });});}
getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("Room_name",name);
   window.location="Kwitter_page.html";
}6

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

