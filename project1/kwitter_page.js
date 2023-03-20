//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDNOIznRIx9MM9_TmH2XNFr0_ierS9KRMA",
      authDomain: "kwiitter-20a2e.firebaseapp.com",
      databaseURL: "https://kwiitter-20a2e-default-rtdb.firebaseio.com",
      projectId: "kwiitter-20a2e",
      storageBucket: "kwiitter-20a2e.appspot.com",
      messagingSenderId: "314427197362",
      appId: "1:314427197362:web:3e7013242bb76e190e06ab"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
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
      window.location="kwitter_room.html";
}