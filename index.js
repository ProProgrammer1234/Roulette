let username = document.getElementById("username")
let button = document.getElementById("btn")

// console.log(username);
// console.log(button);

function roulette() {
    if(username.value.trim().length > 0) {
        localStorage.setItem("Username", username.value)
        console.log(username.value);
        location.href = "roulette.html"
    }
}



