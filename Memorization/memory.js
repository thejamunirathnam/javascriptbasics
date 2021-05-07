
const prev_val=[];

function square (n) {

   if(prev_val[n] != null){
       return prev_val[n];
   } 

    var result=0;
     for (var i=1; i <= n ; i ++) {
        for (var j=1; j <= n ; j ++) {
           result += 1;
        }
     }
     prev_val[n]=result;
    return result;
}


console.log(square(50000));
console.log(square(50000));

console.log(square(50000));

console.log(square(50000));

console.log(square(50000));
console.log(square(50000));
