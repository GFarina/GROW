var OBJECT1 : GameObject;



function OnParticleCollision(other : GameObject){
	
    if (other.gameObject.tag == "PHYTOPLANKTON")
    {
    	
Destroy(gameObject);
var parentTransform : Transform = this.transform.parent.gameObject.transform;
                 (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
              
rigidbody.isKinematic = true;

    
    }





// yield WaitForSeconds(.1);  

    

   



}