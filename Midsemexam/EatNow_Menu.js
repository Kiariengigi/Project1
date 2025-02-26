//1. Personalized Greeting
let FirstName = prompt("Enter your first name.");
if (!FirstName){
    FirstName = "Guest"; 
}
//2. Welcome Message
alert('Welcome to EatNow Cafe, ' + FirstName + '!');

//3. Diplay Menu Items
let menu = ["Chapati", "Masala Tea", "Samosa", "Mandazi","Nduma"];

console.log("EatNow Menu: "); 
for (let i = 0; i < menu.length; i++){
    console.log(i+1 + ". " + menu[i]);
}

//4, Adding a new dish
let dishsuggest = prompt("Please suggest a new dish to add to our menu."); 
if(!dishsuggest){
    console.log("Please enter a valid dish."); 
}else{
    menu.push(dishsuggest);
    console.log("Updated EatNow Menu: "); 
    for (let i = 0; i < menu.length; i++){
        console.log(i+1 + ". " + menu[i]);
    }
}