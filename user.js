const service = require('./service');

const response = {};

class User {
    createuser = function (req, res) {
        // res.send(["thejasree", "thejas@gmail.com"])
        service.addition(req.body,(error,success)=>{
             if(error){
                 response.success = false;
                 response.error = error.error;
                 response.data= error.message;
                 return res.status(400).send(response);
             }
             else{
                 
                 response.success = true;
                 response.error = success.success;
                 response.data= success.message;
                 console.log(response)
                 return res.status(200).send(response);
             }
        })
    }
    createmovies = function (req, res) {
        res.send(["DHOOOOMMM", "ROBOOOOO"])
    }
}

module.exports= new User();