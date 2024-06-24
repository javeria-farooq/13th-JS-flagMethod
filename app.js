let cities = ["karachi", "lahore", "islamabad", "quetta"]
let userCity = prompt("Enter Your City")
let found = false

for(let i = 0; i < cities.length; i++) {
    if(userCity === cities[i]) {
        found = true
        console.log("found")
        break
    }
}

console.log(found) // agr array se match hgya t uske undr found ki true value hgi wo bahar bh true hi rhegi.
if(found === false) {
    console.log("not found")
}