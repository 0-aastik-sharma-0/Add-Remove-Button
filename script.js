var h5 = document.querySelector("h5")
var addFriend = document.querySelector("#add")

var check = 0

addFriend.addEventListener("click", function(){
   if (check == 0){
    h5.innerHTML = "Friends"
    h5.style.color = "green"

    addFriend.innerHTML = "Remove Friend"
    addFriend.style.backgroundColor = '#dadada';
    addFriend.style.color = "black"

    check = 1
   }else{
    h5.innerHTML = "Stranger"
    h5.style.color = "red"

    addFriend.innerHTML = "Add Friend"
    addFriend.style.backgroundColor = "cadetblue"
    addFriend.style.color = "white"

    check = 0
   }
});
