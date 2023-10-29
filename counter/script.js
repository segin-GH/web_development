

let count = 0

function increment_counter() {
    count = count + 1
    document.getElementById("count").innerText = count
}

function decrement_counter() {
    count = count - 1
    document.getElementById("count").innerText = count
}
