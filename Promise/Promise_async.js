const zomato = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("inside zomato")
        resolve({order:'biriyani'})
    },1000)
})

const swiggy = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("inside swiggy")
        resolve({item:'pizzaaa'})
    },7000)
})

Promise.all([zomato,swiggy])
.then((result)=>{
  console.log(result)
})