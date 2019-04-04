
let now = new Date()
console.log(now.getHours(), 'This is the new time')
let newHour = new Date().getHours()
let greetMessage
switch (true) {
    case (newHour < 12 && newHour > 1):
        greetMessage = 'Good Morning'
        break;
    case (newHour > 12 && newHour < 17):
        greetMessage = 'Good Afternoon'
        break;
    case (newHour > 17 && newHour < 25):
        greetMessage = 'Good Evening'
        break;
    default:
        greetMessage = 'Good Night'
        break;
}
console.log(greetMessage)
// let greet = function () { if (newHour <= 12) { return 'Good Morning'} 
//     else if (newHour > 12) { return 'Good Afternoon'} 
//     else if (newHour > 17) { return 'Good Evening'} 
//     else { return 'Good Night'} }
// undefined
// greet
// ƒ () { if (newHour <= 12) { return 'Good Morning'} else if (newHour > 12) { return 'Good Afternoon'} else if (newHour > 17) { return 'Good Evening'} else { return 'Good Night'} }
// console.log(greet)
// undefined
// alert(greet)
// undefined
// greet.valueOf
// ƒ valueOf() { [native code] }
// let greetMsg = greet
// undefined
// greetMsg
// ƒ () { if (newHour <= 12) { return 'Good Morning'} else if (newHour > 12) { return 'Good Afternoon'} else if (newHour > 17) { return 'Good Evening'} else { return 'Good Night'} }
// greetMsg.toString
// ƒ toString() { [native code] }