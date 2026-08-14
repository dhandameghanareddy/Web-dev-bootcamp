//alert("welcome to web bootcamp");

 var users = [
   /* {
        "name": "meghana",
        "image": "meghana.jpeg"
     },
     {
        "name": "showrya",
        "image": "showrya.jpeg"
     },
     {
         "name": "chandrika",
         "image": "chandrika.jpeg"
     }*/
    {
      "name": "John Doe",
      "image": "john.png",
      "gender": "Male"
    },
    {
      "name": "Jane Doe",
      "image": "jane.png",
      "gender": "Female"
    }
 ]
 var curId = 0;

 function toggleUser(){
    curId=(curId+1)%2;

    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");   

    userName.innerHTML = users[curId].name;
    userGender.innerHTML = users[curId].gender;
    userImage.src = users[curId].image;
 }

 function randomUser(){
   fetch('https://randomuser.me/api/')
   .then(function(res){
     return res.json();
   })
   .then(function(data){
     console.log(data);
     var userName = document.getElementById("user-name");
     var userGender = document.getElementById("user-gender");
     var userImage = document.getElementById("user-image");
     var newUserName = data.results[0].name.first + " " + data.results[0].name.last;
     var newUserGender = data.results[0].gender;
     var newUserImage = data.results[0].picture.large;
     userName.innerHTML = newUserName;
     userGender.innerHTML = newUserGender;
     userImage.src = newUserImage;
   })
   .catch(function(err){
     console.log("Error occured while fetching data from API: " + err);
   })
 }
 
