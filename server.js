const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("frontend"));

app.use(express.json());

var users = [
    {
        "id": 1,
        "name": "Emanuel",
        "gender": "Male",
        "image": "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
        "id": 2,
        "name":"Uriel",
        "gender": "Male",
        "image": "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
        "id": 3,
        "name":"Vilho",
        "gender": "Male",
        "image":"https://randomuser.me/api/portraits/men/77.jpg"
    },
    {
        "id": 4,
        "name":"Charles",
        "gender": "Male",
        "image":"https://randomuser.me/api/portraits/men/58.jpg"
    },
    {
        "id": 5,
        "name":"Magdalena",
        "gender": "Female",
        "image":"https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
        "id": 6,
        "name": "Indie",
        "gender": "Female",
        "image":"https://randomuser.me/api/portraits/women/69.jpg",
    },
    {
        "id": 7,
        "name":"Armen",
        "gender": "Male",
        "image":"https://randomuser.me/api/portraits/men/10.jpg"
    },{
        "id": 8,
        "name": "Jesse",
        "gender": "Male",
        "image":"https://randomuser.me/api/portraits/men/28.jpg"
    },
    {
        "id": 9,
        "name": "Yusra",
        "gender": "Female",
        "image":"https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
        "id": 10,
        "name":"Raymond",
        "gender": "Male",
        "image":"https://randomuser.me/api/portraits/men/23.jpg"
    }
]
var nextId = 11;

function findindex(id){
    for(var i=0;i<users.length;i++){
        if(id===users[i].id){
            return i;
        }
    }
    return -1;
}

app.get('/api/users', function(req,res){
    return res.json(users);
});

app.get('/api/users/:id', function(req,res){
    var id = req.params.id; 
    var index = findindex(id);
    if(index===-1){
        return res.status(404).json({"message": "User not found" + id});
    }
    var user = users[index];
    return res.json(user);
});

app.get("/api/random-user", function(req,res){
    if(users.length===0){
        return res.status(404).json({"message": "No users found"});
    }
    var randomIndex = Math.floor(Math.random()*users.length);
    return res.json(users[randomIndex]);
})

app.post("/api/users", function(req,res){
    var newUser = req.body;
    var tempUser={
        "id": nextId,
        "name": newUser.name,
        "gender": newUser.gender,
        "image": newUser.image
    };
    nextId++;
    users.push(tempUser);
    return res.status(201).json({"message": "User created successfully",
    })
})   











app.listen(port,function(){
    console.log("Server running on http://localhost:"+port);

});
