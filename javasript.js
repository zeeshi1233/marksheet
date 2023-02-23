function show_result(){
let computer=document.querySelector("#computer").value;
let math=document.querySelector("#math").value;
let eng=document.querySelector("#english").value;
let html=document.querySelector("#html").value;
let css=document.querySelector("#css").value;

let obt=parseFloat(computer) + parseFloat(math)+parseFloat(eng) + parseFloat(html)+parseFloat(css);
document.querySelector('.obt').innerHTML="Total Marks : " + " " + obt;


document.querySelector('.to').innerHTML="Total Marks : " + " " + 500;
let per=Math.trunc((obt/500)*100);
document.querySelector('.per').innerHTML="Percentage " + " " + per + " % ";

if(per>=90){
document.querySelector(".gr").innerHTML="Grade "  + " " + "A+1";

}



else if(per>=80){
    document.querySelector(".gr").innerHTML="Grade "  + " "  + "A+";

}
else if(per>=70){
    document.querySelector(".gr").innerHTML="Grade "  + " " + "A";

}
else if(per>=60){
    document.querySelector(".gr").innerHTML="Grade " + " "  + "B";

}
else if(per>=50){
    document.querySelector(".gr").innerHTML="Grade " + " " + "C";

}
else if(per>=40){
    document.querySelector(".gr").innerHTML="Grade "  + " " + "D";

}
else if(per>=33){
    document.querySelector(".gr").innerHTML="Grade " + " "  + "E";

}
else if(per<33){
    document.querySelector(".gr").innerHTML="Grade " + " " + "F";

}
else{
    alert("Enter Right Marks")
}
if(per>=33){

    document.querySelector(".result h2").innerHTML="You Are Pass ";
}
else{
    document.querySelector(".result h2").innerHTML="You Are Fail ";
}
}