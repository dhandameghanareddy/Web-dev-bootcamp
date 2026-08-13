//alert("welcome to web bootcamp");

 var users = [
     {
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
     }
 ]
 var curId = 0;

 function toggleUser(){
    curId=(curId+1)%3;

    var userName = document.getElementById("user-name");
    //var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");   

    userName.innerHTML = users[curId].name;
    //userGender.innerHTML = users[curId].gender;
    userImage.src = users[curId].image;
 }
/*let h2=document.querySelector("h2");
let img=document.querySelector("img");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
   h2.innerText="showrya";
   img.src="showrya.jpeg";
});
btn.addEventListener("mouseover",()=>{
   h2.innerText="chandrika";
   img.src="chandrika.jpeg";
});*/


