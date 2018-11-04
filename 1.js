var a,b,c,d;
var e;
function get() {
   a = document.getElementById("money").value;
   b = document.getElementById("select").value;
   c = document.getElementById("select2").value;

    d = a * b / c;
if (c == 1) {
    e = "VND";
}
if (c == 23000){
    e = "USD";
}
if (c == 27000){
    c = "EUR";
}
if (a == 0) {
    document.getElementById("display").innerHTML = 'Input the number';
}
else
    document.getElementById("display").innerHTML = 'Result = ' + d + e ;

 }