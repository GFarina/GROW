// Applies an upwards force to all rigidbodies that enter the trigger.



function OnTriggerStay (other : Collider) {
	
	if (other.attachedRigidbody) 
 {
 	
other.attachedRigidbody.AddForce (0, 0, 151);
 
 
  

 }}
      
