var OBJECT1 : GameObject;
//var initialDelay = 0.0;
//var fadeSpeed = 3;



    
	yield WaitForSeconds(30);   

Detonate();



function Detonate () {
	
	

	
// Destroy ourselves

Destroy(gameObject);
var parentTransform : Transform = this.transform.parent.gameObject.transform;
                 (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
                
               
}  









    
      
   

