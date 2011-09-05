// Applies an upwards force to all rigidbodies that enter the trigger.



function OnTriggerStay (other : Collider) {
	
	if (other.attachedRigidbody) 
 {
 	
other.attachedRigidbody.AddForce (5, 1, 0);
 yield
 
  WaitForSeconds(2); // wait five seconds
 
  //other.attachedRigidbody.AddForce (5, 0, 0);

 }}
      
