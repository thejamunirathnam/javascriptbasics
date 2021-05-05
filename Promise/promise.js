console.log("start")
 // success 
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve ({user:"thejaaaaaa sree promsie"})
//     },4000)
// })

// promise.then((success)=>{
//  console.log(success)
// })

//failure message
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    reject (new Error("user not logged ijn "))
    },4000)
})

promise.then((success)=>{
 console.log(success)
})
.catch((err)=>console.log(err))

console.log("end")


