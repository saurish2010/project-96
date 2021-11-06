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
     room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 
//End code
      } });  }); }
getData();
function send(){
     msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}