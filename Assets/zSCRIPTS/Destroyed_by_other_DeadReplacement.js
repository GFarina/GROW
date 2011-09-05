
var deadReplacement : Rigidbody;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;
var dieSound : AudioClip;




function Update () {
}

 // Play a dying audio clip
   if (dieSound)
      AudioSource.PlayClipAtPoint(dieSound, transform.position);

	// Replace ourselves with a deadbody
	if (deadReplacement) {
		var dead : Rigidbody = Instantiate(deadReplacement, transform.position, transform.rotation);



		// For better effect we assign the same velocity to the exploded object
		dead.rigidbody.velocity = rigidbody.velocity;
		dead.angularVelocity = rigidbody.angularVelocity;

			}
		
	
         
         
  