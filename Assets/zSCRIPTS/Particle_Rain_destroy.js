var OBJECT1 : GameObject;



//function OnParticleCollision(other : GameObject){

	 function OnTriggerEnter (other : Collider)
{

if(other.collider.tag == "RAIN") 
	 
	 
	 
	//if (other.collider.tag == "RAIN")
  //  if (other.gameObject.tag == "RAIN")
    {
    	
Destroy(gameObject);
var parentTransform : Transform = this.transform.parent.gameObject.transform;
                 (Instantiate(OBJECT1, transform.position, Quaternion.identity) as GameObject).transform.parent = parentTransform.transform; 
              
rigidbody.isKinematic = true;

    
    }





// yield WaitForSeconds(.1);  

    

   



}