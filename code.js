console.log('Connected')
function addUser(){
    uname = document.getElementById('uname').value;
    localStorage.setItem('myUnAme', uname);
    window.location = "main_room.html";
}
