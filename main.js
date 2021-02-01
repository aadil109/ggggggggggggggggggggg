var menulistarray = ["chicken tandoori pizza","veg supreme pizza","paneer tikka pizza","deluxe veggie pizza","veg extravaganza pizza"];



function getm(){


    var htmldata = "<ol class='menulist'>";
    menulistarray.sort();

    for(var i=0;i<menulistarray.length;i++){


        htmldata=htmldata+"<li>"+menulistarray[i]+"</li>";
    }

    htmldata=htmldata+"</ol>";
    document.getElementById("aa").innerHTML=htmldata;
}

function aa(){
var htmldata;
var item=document.getElementById("add_item").value;
menulistarray.push(item);
menulistarray.sort();
htmldata="<section class='cards'>"

for(i=0;i<menulistarray.length;i++){

htmldata=htmldata+"<div class='card'>"+"<img src='pizzaimg.png'>"+menulistarray[i]+"</div>"

}
htmldata=htmldata+"</section>"
document.getElementById("aaa").innerHTML=htmldata
}