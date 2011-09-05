


var initialDelay = 2.0;
var fadeSpeed = 3.0;

renderer.material.color.a = 0.0;

yield new WaitForSeconds(initialDelay);

while (renderer.material.color.a < 1.0)
{
  var color = renderer.material.color;
  color.a = 0.1;
   renderer.material.color = Color.Lerp(renderer.material.color, color, fadeSpeed * Time.deltaTime);
   
   yield;
} 
