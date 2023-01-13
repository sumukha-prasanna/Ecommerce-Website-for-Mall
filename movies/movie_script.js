var count=0;
var total=0;
var seats=document.getElementsByClassName("seat");
if(seats){for(var i=0;i<seats.length;i++){
var item=seats[i];
item.addEventListener("click",(event)=>{
var price= document.getElementById("movie").value;
if (!event.target.classList.contains('occupied') && !event.target.classList.contains('selected') ){
count++;        
total=count*price;
event.target.classList.add("selected");
document.getElementById("count").innerText=count;
document.getElementById("total").innerText=total;}})}}
function check(){
if(count!=0)
window.open('pay.html','_self');
else
alert("Please select the seats");}
var cc=document.getElementById("cc");
var dd=document.getElementById("dd");
if(cc){
cc.innerHTML="Seats Booked:"+count;
dd.innerHTML="Total Cost:"+total;}