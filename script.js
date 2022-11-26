
// Storing the ingredients
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid:["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings:["chocolate", "peanuts"]
}
// //  We need two functions order & production\

// let order = (fruit_name, call_production) => {

//      setTimeout(function(){

//         console.log(`${stocks.fruits[fruit_name]} was selected`)
    
// // order placed, call production 

//         call_production();
//      }, 2000)
// };

// let production = () => {

//     setTimeout(() => {
//         console.log("production has started")

//         setTimeout(() => {
//             console.log("The fruit has been chopped")

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} added!`)

//                 setTimeout(() => {
//                     console.log("The machine has started ")

//                     setTimeout(() => {
//                         console.log(`item will be place on ${stocks.holder[1]}`)

//                         setTimeout(() => {
//                             console.log(`You have choose ${stocks.toppings[1]} & ${stocks.toppings[0]} as a toppings`)

//                             setTimeout(() => {
//                                 console.log("Serve Ice Cream!,  Your welcome! vuelvas prontos ")

//                             }, 2000)

//                         }, 3000)

//                     }, 2000 )

//                 }, 1000)

//             }, 1000)

//         }, 2000)

//     }, 0000)
   
// };

//     //trigger
// order(0, production);

let is_shop_open = false;

// our promise has 2 parts ; resolve (IC delivered) , rejected ( costumer didnt get IC)


let order = (time, work) => {
    return new Promise((resolve, reject) => {

        if(is_shop_open){
            setTimeout(() => {

                resolve(work())
            }, time)
            
        }else {
            reject(console.log("Our shop is closed"))
        }
        
    })
}
 //step 1
order (2000, () =>console.log(`${stocks.fruits[0]} was selected`))
//step 2 
  .then(() => {
   return order(0000, () =>console.log("production has started"))
})
//step3
  .then(() => {
    return order(2000, () =>console.log("fruit has been chopped"))
  })
  //step4
  .then(() => {
    return order(1000, () =>console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} have been add!`))
  })
  //step 5 
  .then(() => {
    return order(1000, () =>console.log("The machine has started "))
  })
// step 6 
.then(() => {
    return order(2000, () =>console.log(`item will be place on ${stocks.holder[1]}`))
})
// step 7 
.then(() => {
    return order(3000, () =>console.log(`You have choose ${stocks.toppings[1]} & ${stocks.toppings[0]} as a toppings`))
})
// stop 8
.then(() => {
    return order(2000, () =>console.log("Serve Ice Cream!,  Your welcome! vuelvas prontos "))
})

.catch(() => {
    console.log("Homer fell asleep")
})

.finally(() => {
    console.log("End of the day")
})