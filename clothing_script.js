var one1=document.getElementById("1");
var two2=document.getElementById("2");
var three3=document.getElementById("3");
var four4=document.getElementById("4");
var five5=document.getElementById("5");
var eight8=document.getElementById("8");
const x1=parseInt(one1.innerHTML.substring(1,3));
const x2=parseInt(two2.innerHTML.substring(1,3));
const x3=parseInt(three3.innerHTML.substring(1,3));
const x4=parseInt(four4.innerHTML.substring(1,3));
const x5=parseInt(five5.innerHTML.substring(1,3));
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var a1=parseInt(one.value)*x1;
var a2=parseInt(two.value)*x2;
var a3=parseInt(three.value)*x3;
var a4=parseInt(four.value)*x4;
var a5=parseInt(five.value)*x5;
one.onchange=()=>{
    a1=parseInt(one.value)*x1;
    one1.innerHTML="₹"+a1;
    eight8.innerHTML="₹"+sum();
}
two.onchange=()=>{
    a2=parseInt(two.value)*x2;
    two2.innerHTML="₹"+a2;
    eight8.innerHTML="₹"+sum();
}
three.onchange=()=>{
    a3=parseInt(three.value)*x3;
    three3.innerHTML="₹"+a3;
    eight8.innerHTML="₹"+sum();
}
four.onchange=()=>{
    a4=parseInt(four.value)*x4;
    four4.innerHTML="₹"+a4;
    eight8.innerHTML="₹"+sum();
}
five.onchange=()=>{
    a5=parseInt(five.value)*x5;
    five5.innerHTML="₹"+a5;
    eight8.innerHTML="₹"+sum();
}
function sum(){
    return parseInt(a1)+parseInt(a2)+parseInt(a3)+parseInt(a4)+parseInt(a5);
}
