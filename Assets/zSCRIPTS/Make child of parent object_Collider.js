//var NewObject : Transform;

//var minWait = 1.0;
//var maxWait = 10.0;
var OBJECT1 : GameObject;


       // yield WaitForSeconds(Random.Range(minWait, maxWait));
//transform.parent = hit.transform; 

var parentTransform : Transform = this.transform.parent.gameObject.transform;
                 (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
              
rigidbody.isKinematic = true;
    	//

//Destroy(gameObject);

    
    
    
    
