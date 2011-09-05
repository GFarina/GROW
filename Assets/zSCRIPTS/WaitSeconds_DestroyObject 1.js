


var deadReplacement : Rigidbody;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;
var dieSound : AudioClip;
var dieSound2 : AudioClip;
var explosion : Transform;
var damagesound : AudioClip;
var myTransform : Transform;
var hit : RaycastHit;





var initialDelay = 2.0;
var fadeSpeed = 3.0;

  yield WaitForSeconds(3);  

    
  Detonate();


function Detonate () {
   // Destroy ourselves
   Destroy(gameObject);
    
   // Play a dying audio clip
   if (dieSound)
      AudioSource.PlayClipAtPoint(dieSound, transform.position);
      
         // Play a dying audio clip
   if (dieSound2)
      AudioSource.PlayClipAtPoint(dieSound2, transform.position);

	// Replace ourselves with a deadbody
	if (deadReplacement) {
		var dead : Rigidbody = Instantiate(deadReplacement, transform.position, transform.rotation);



		// For better effect we assign the same velocity to the exploded object
		dead.rigidbody.velocity = rigidbody.velocity;
		dead.angularVelocity = rigidbody.angularVelocity;

			}
		
	}
    