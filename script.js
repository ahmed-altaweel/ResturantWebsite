const dollarRate=535;

function showGreeting(){
"use strict";
let name=window.prompt("ما اسمك؟");
let greet=document.getElementById("greet");
if(name===null||name.trim()===""){
greet.innerHTML="أهلاً بك في مطعمنا";
}else{
greet.innerHTML="أهلاً بك يا "+name.trim()+"، يسعدنا استقبالك";
}
greet.style.color="#f0a202";
}
window.onload=showGreeting;

(function showYear(){
document.getElementById("year").innerHTML=new Date().getFullYear();
}());

function reserveTable(){
"use strict";
let name=document.getElementById("guestName").value.trim();
let phone=document.getElementById("guestPhone").value.trim();
let date=document.getElementById("guestDate").value;
let time=document.getElementById("guestTime").value;
let guests=parseInt(document.getElementById("guestCount").value);
let message=document.getElementById("reserveMessage");
message.innerHTML="";
if(name===""||phone===""||date===""||time===""){
message.innerHTML="يرجى تعبئة الاسم والجوال والتاريخ والوقت.";
}else if(isNaN(guests)||guests<=0){
message.innerHTML="عدد الأشخاص يجب أن يكون أكبر من صفر.";
}else if(guests>12){
message.innerHTML="أقصى عدد للحجز الواحد هو 12 شخصاً.";
}else{
alert("تم استلام حجزك يا "+name+" لعدد "+guests+" أشخاص بتاريخ "+date+" الساعة "+time);
}
}

function convertDollarToRial(){
"use strict";
let amount=document.getElementById("usdAmount").value,
resultShow=document.getElementById("convertresult"),
message=document.getElementById("message");
message.innerHTML="";
resultShow.innerHTML="";
if(amount===""){
message.innerHTML="هذا الحقل لا يمكن أن يكون فارغاً.";
}else if(amount==0){
message.innerHTML="القيمة لا يمكن أن تكون صفراً.";
}else if(amount<0){
message.innerHTML="القيمة لا يمكن أن تكون سالبة.";
}else{
resultShow.innerHTML=amount+" دولار = "+amount*dollarRate+" ريال يمني";
}
}

function convertToYemeniRial(){
"use strict";
let currency=document.getElementById("currency");
let amount=document.getElementById("money").value,
kind=currency.value,
resultShow=document.getElementById("convertresult2"),
message=document.getElementById("message2");
message.innerHTML="";
resultShow.innerHTML="";
if(amount===""){
message.innerHTML="هذا الحقل لا يمكن أن يكون فارغاً.";
}else if(amount==0){
message.innerHTML="القيمة لا يمكن أن تكون صفراً.";
}else if(amount<0){
message.innerHTML="القيمة لا يمكن أن تكون سالبة.";
}else{
resultShow.innerHTML=amount+" "+currency.options[currency.selectedIndex].text+" = "+(kind*amount)+" ريال يمني";
}
}
