console.log("start");

function getuserlogin(email, password) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("now we hav data")
            resolve({ emailvalue: email, passwordvalue: password });
        }, 5000);
    }) 
}

function bookMovie(email) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(email)
            resolve(["kathi", "teddy", "robo"]);
        }, 6000)
    }) 
}

function popcorn(movie) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(movie)
            resolve(["popcorn", "pepsi"]);
        }, 6000)
    })
}

// getuserlogin("th@gmail.com", 123456)
// .then((user)=>bookMovie(user))
// .then((movies)=>popcorn(movies));

// or 

// synchr way fro callig any api
const user = getuserlogin("th@gmail.com", 123456);
const movie = bookMovie(user);
const snacks =popcorn(movie);

console.log("end");