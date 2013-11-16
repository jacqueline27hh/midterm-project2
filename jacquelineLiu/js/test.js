
var images = new Array();
index = 0;

//library of images
function show() {

images [0] = "img/01.jpeg";
images [1] = "img/10.jpeg";
images [2] ="img/03.jpeg";
images [3] ="img/04.jpeg";
images [4] ="img/05.jpeg";
images [5] ="img/06.gif";
images [6] ="img/07.jpeg";
images [7] ="img/08.jpeg";
images [8] ="img/09.jpeg";
images [9] ="img/02.jpeg";


 
//innerHTML = what is inside of html 
document.getElementById("gallery").innerHTML = 
"<img src='"+images[index]+"' width='700px' height='457px' />";
//sliders
index++;
if(index  == 10){index = 0;}
setTimeout("show()", 3000)

}
//forward
function forward()
{
	index ++;
	if(index == 10){index = 0;}
	document.getElementById("gallery").innerHTML = 
"<img src='"+images[index]+"' width='700px' height='457px' />";


}
//backward
function backward()
{
	index --;
	if(index == -1){index = 2;}
	document.getElementById("gallery").innerHTML = 
"<img src='"+images[index]+ "' width='700px' height='450px' />";
	
}