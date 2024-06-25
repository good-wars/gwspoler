const ARRAY = [1, 3, 4, 2];

var a = 0;
var userArray = [];

document.getElementById('b1').onclick = b1;
document.getElementById('b2').onclick = b2;
document.getElementById('b3').onclick = b3;
document.getElementById('b4').onclick = b4;

function b1() {
    a = 1;
    userArray.push(a);
    check();
    console.log(userArray);
}

function b2() {
    a = 2;
    userArray.push(a);
    check();
    console.log(userArray);
}

function b3() {
    a = 3;
    userArray.push(a);
    check();
    console.log(userArray);
}

function b4() {
    a = 4;
    userArray.push(a);
    check();
    console.log(userArray);
}

function check() {
    if (userArray.length === 4 && arraysEqual(userArray, ARRAY)) {
        console.log("ОК")
        window.location.href = 'secret/main/main.html';
    } else {
        if (userArray.length === 4) {
            userArray = [];
            console.log("Лист очищен!");
            console.log(userArray);
        }
    }
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}