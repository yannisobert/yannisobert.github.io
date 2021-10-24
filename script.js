var element = document.getElementById("item1_popup");
var element2 = document.getElementById("item2_popup");
var element3 = document.getElementById("item3_popup");

function myFunction1() {
    element.classList.toggle("mystyle");
    element2.classList.remove("mystyle");
    element3.classList.remove("mystyle");
}

function myFunction2() {
    element.classList.remove("mystyle");
    element2.classList.toggle("mystyle");
    element3.classList.remove("mystyle");
}

function myFunction3() {
    element.classList.remove("mystyle");
    element2.classList.remove("mystyle");
    element3.classList.toggle("mystyle");
}

