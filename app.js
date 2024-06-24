let cities = ["Karachi", "Lahore", "Islamabad", "Quetta"]
let userCity = prompt("Enter Your City")

let firstLetter = userCity.slice(0, 1).toUpperCase()
let remainingLetter = userCity.slice(1).toLowerCase()
let newUserCity = firstLetter + remainingLetter

let found = false


for(let i = 0; i < cities.length; i++) {
    if(newUserCity === cities[i]) {
        found = true
        alert("Alert! City found...")
        break
    }
}

console.log(found) // agr array se match hgya t uske undr found ki true value hgi wo bahar bh true hi rhegi.
if(found === false) {
    alert("Oops! Your city is not found")
}