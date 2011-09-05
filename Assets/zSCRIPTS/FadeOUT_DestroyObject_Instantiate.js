var initialDelay = 1.0;
var fadeSpeed = 3.0;
var newObject1 : Transform; 

renderer.material.color.a = 1.0;
yield WaitForSeconds(initialDelay);
      
var t = 1.0;

while (t > 0.0) {
	t -= fadeSpeed * Time.deltaTime;
	renderer.material.color.a = t;
	yield;
}

Destroy(gameObject);

Instantiate(newObject1,Vector3(-2.002046,4.949787,-11.52041), Quaternion.identity);
