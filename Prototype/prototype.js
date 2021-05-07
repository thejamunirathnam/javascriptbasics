
 let arr = ["thejaaa", "sreee" ,"practicelabzzz"];

 let object = {
     Name: "theja",
     Mobile : "234567890",
     selfintro : function () {
         console.log("mym name is " + this.Name + " my number is  "+ this.Mobile);
     }
 }

 function fun (){

 }

 // arr.__proto__   example


 // example  never do this in real life
  let object2 = {
    Name: "SSSSSSSSSSSSSSSSSS",
  }

  object2.__proto__ = object;

//   object2.Name
// "SSSSSSSSSSSSSSSSSS"
// object2.__proto__
// {Name: "theja", Mobile: "234567890", selfintro: ƒ}Mobile: "234567890"Name: "theja"selfintro: ƒ ()__proto__: Object
// object2.Mobile
// "234567890"