menu_list_array = ["Veg Margherita Pizza",
                   "Chicken Tandoori Pizza",
                   "Veg Supreme Pizza",
                   "Panner Tikka Pizza",
                   "Deluxe Veggie Pizza",
                   "Veg Extravegenza Pizza",
];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
}
htmldata+htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for (var i=0;i<menu_list_array.length;i++){

htmldata=htmldata+'(section class="cards")'
+ '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGw-t7MZ7l-6Q78dSDyVO33lyTB4_XNlCJw&usqp=CAU">'
+ menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;

}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}