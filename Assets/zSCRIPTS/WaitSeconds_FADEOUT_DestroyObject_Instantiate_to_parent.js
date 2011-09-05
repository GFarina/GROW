var OBJECT1 : GameObject;
var initialDelay = 0.0;
var fadeSpeed = 3;



    
	yield WaitForSeconds(30);   

Detonate();



function Detonate () {
	
	
	  renderer.material.color.a = 1;
      yield WaitForSeconds(initialDelay);
      var t = 1.0;
       while (t > 0.0) {
        t -= fadeSpeed * Time.deltaTime;
         renderer.material.color.a = t;
   
   
         yield;
	
       }
	
// Destroy ourselves
//Destroy(gameObject);
//var parentTransform : Transform = this.transform.parent.gameObject.transform;
                // (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
                
                   //(Instantiate(OBJECT2, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform;   
                
  Instantiate(OBJECT1, transform.position, transform.rotation);
                Destroy(gameObject);
}  









    
      
   

