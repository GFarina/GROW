//var OBJECT1 : GameObject;
var initialDelay = 0.0;
var fadeSpeed = 3.0;



    
	yield WaitForSeconds(30);   

Detonate();



function Detonate () {
	
	
renderer.material.color.a = 0.2;

yield new WaitForSeconds(initialDelay);

while (renderer.material.color.a < 1.0)
{
  var color = renderer.material.color;
  color.a = -0.2;
   renderer.material.color = Color.Lerp(renderer.material.color, color, fadeSpeed * Time.deltaTime);
  

 yield;
}}