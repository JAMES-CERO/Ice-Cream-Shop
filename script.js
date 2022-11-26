// function action(){
//     console.log("eat")
// }
// console.log("I");

// // This will be shown after 2 seconds

// setTimeout(()=>{
//   return action()
// },2000)

// console.log("Ice Cream")

//Storing the ingredients
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid:["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings:["chocolate", "peanuts"]
}
// We need two functions order & production\

let order = (fruit_name, call_production) => {

     setTimeout(function(){

        console.log(`${stocks.fruits[fruit_name]} was selected`)
    
//order placed, call production 

        call_production();
     }, 2000)
};

let production = () => {

    setTimeout(() => {
        console.log("production has started")

        setTimeout(() => {
            console.log("The fruit has been chopped")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} added!`)

                setTimeout(() => {
                    console.log("The machine has started ")

                    setTimeout(() => {
                        console.log(`item will be place on ${stocks.holder[1]}`)

                        setTimeout(() => {
                            console.log(`You have choose ${stocks.toppings[1]} & ${stocks.toppings[0]} as a toppings`)

                            setTimeout(() => {
                                console.log("Serve Ice Cream!,  Your welcome! vuelvas prontos ")

                            }, 2000)

                        }, 3000)

                    }, 2000 )

                }, 1000)

            }, 1000)

        }, 2000)

    }, 0000)
   
};

//trigger
order(0, production);
