//var NewObject : Transform;

var minWait = 1.0;
var maxWait = 10.0;
//var OBJECT1 : GameObject;

function OnCollisionEnter (other : Collision)
     //function OnTriggerEnter (hit : Collider)
      
     {  
           
 //if(hit.collider.gameObject.tag == "FRAME"){
  if(other.collider.gameObject.tag == "FRAME"){	
    	//rigidbody.isKinematic = true;
    	//transform.parent = hit.transform; 
         transform.parent = other.transform; 
         

    //    yield WaitForSeconds(Random.Range(minWait, maxWait));

//var parentTransform : Transform = this.transform.parent.gameObject.transform;
          //       (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
               


//Destroy(gameObject);

    }}
    
    
    
