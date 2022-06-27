var firebaseConfig = {
    apiKey: "AIzaSyAprmx9wGUYLuSA8SaV3hMV6RWBJlo1srI",
    authDomain: "social-website-kwitter-207f8.firebaseapp.com",
    databaseURL: "https://social-website-kwitter-207f8-default-rtdb.firebaseio.com",
    projectId: "social-website-kwitter-207f8",
    storageBucket: "social-website-kwitter-207f8.appspot.com",
    messagingSenderId: "417661921430",
    appId: "1:417661921430:web:44859b907f458750767ab7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('Connected');
uname = localStorage.getItem('myUnAme');
document.getElementById('user_name_display').innerHTML = uname;

function logout() {
    localStorage.removeItem('myUnAme');
    window.location = "index.html";
}

function addRoom() {
    messageval = document.getElementById("roomName").value;
    firebase.database().ref("/").child(messageval).update({
        'Room Name': messageval
    });
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log(Room_names)
                roomnamewithhash = "#" + Room_names;
                outputthing = "<div id=" + Room_names + " onclick='redirectToRoomname(this.id)'>" + roomnamewithhash + "</div><hr>"
                document.getElementById('output').innerHTML += outputthing;
                //End code
            });
        });
}
getData();
function redirectToRoomname(roomid){
    localStorage.setItem('chatRoomId', roomid)
}