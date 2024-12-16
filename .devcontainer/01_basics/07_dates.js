const myDate = new Date()
console.log(myDate.toString())             //Mon Dec 16 2024 11:22:33 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())         //Mon Dec 16 2024
console.log(myDate.toISOString())         //2024-12-16T11:22:33.298Z
console.log(myDate.toJSON())              //2024-12-16T11:22:33.298Z
console.log(myDate.toLocaleDateString())  //12/16/2024
console.log(myDate.toLocaleString())     //12/16/2024, 11:22:33 AM
console.log(myDate.toLocaleTimeString())  //11:22:33 AM
console.log(typeof myDate) ;             //object


let myCreateddated = new Date(2024,12,24)