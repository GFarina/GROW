//var NewObject : Transform;
var OBJECT : Transform;
var minWait = 1.0;
var maxWait = 10.0;


function OnTriggerStay (other : Collider)
     //function OnTriggerEnter (hit : Collider)
      
     {  
           
 //if(hit.collider.gameObject.tag == "FRAME"){
  if(other.collider.gameObject.tag == "FRAME"){	
    	rigidbody.isKinematic = true;
    	//transform.parent = hit.transform; 
         transform.parent = other.transform; 
         

       yield WaitForSeconds(Random.Range(minWait, maxWait));
       Instantiate(OBJECT, transform.position, Quaternion.identity);
       //Instantiate (OBJECT, transform.position, Quaternion.identity);     


Destroy(gameObject);

    }}
    
    
    
