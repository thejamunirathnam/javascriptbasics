console.log("start");

function getuserlogin(email, password, callback) {
    setTimeout(() => {
        console.log("now we hav data")
        callback({ emailvalue: email, passwordvalue: password });
    }, 5000);
}

function bookMovie(email, callback) {
    setTimeout(() => {
        callback(["kathi", "teddy", "robo"]);
    }, 6000)
}

function popcorn(movie, callback) {
    setTimeout(() => {
        callback(["popcorn", "pepsi"]);
    }, 6000)
}


const user = getuserlogin("thwaj@gmail.com", 123456789, (userdata) => {    // if any error then it will become too complicate
    console.log(userdata);
    bookMovie(userdata.emailvalue, (movies) => {
        console.log(movies, "movies are available");
        popcorn(movies, (snacks) => {
            console.log(snacks, " snacks are avilable");
        })
    })
});



console.log("end");