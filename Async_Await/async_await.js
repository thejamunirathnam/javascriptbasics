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


async function displaydetails () {
    try{
    const user = await getuserlogin("th@gmail.com", 123456);
    const movie = await bookMovie(user);
    const snacks = await popcorn(movie); 
    }
    catch(err){
     console.log("error hadling ",err)
    }
}

displaydetails();


console.log("end");