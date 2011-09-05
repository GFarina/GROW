var deadReplacement : Rigidbody;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;
var dieSound : AudioClip;
var dieSound2 : AudioClip;
var explosion : Transform;
var damagesound : AudioClip;
var explosionRadius = 5.0;
var explosionPower = 10.0;
var initialDelay = 0.0;
var fadeSpeed = 1.0;
var explosionDamage = 25.0;
var explosionTime = 1.0;
var myTransform : Transform;
var hit : RaycastHit;

// yield WaitForSeconds(6);   


function Start () {
   var explosionPosition = transform.position;
   var colliders : Collider[] = Physics.OverlapSphere (explosionPosition, explosionRadius);
    for (var hit in colliders){
      if (!hit)
         continue;
      Debug.Log( " hit.collider.tag = " + hit.collider.tag);
      if (hit.collider.tag == ("SYSTEM") ) {
         Debug.Log(" enemy hit");
         var closestPoint = hit.ClosestPointOnBounds(explosionPosition);
         var distance = Vector3.Distance(closestPoint, explosionPosition);
         var hitPoints = 1.0;
         hitPoints *= explosionDamage;
         hit.collider.SendMessageUpwards("ApplyDamage", hitPoints, SendMessageOptions.DontRequireReceiver);
 
        
            }
   }
}

  //Detonate();


//function Detonate () {
   // Destroy ourselves
  // Destroy(gameObject);
    
   // Play a dying audio clip
  // if (dieSound)
   //   AudioSource.PlayClipAtPoint(dieSound, transform.position);
      
         // Play a dying audio clip
 //  if (dieSound2)
   //   AudioSource.PlayClipAtPoint(dieSound2, transform.position);

	// Replace ourselves with a deadbody
	//if (deadReplacement) {
	//	var dead : Rigidbody = Instantiate(deadReplacement, transform.position, transform.rotation);



		// For better effect we assign the same velocity to the exploded object
	//	dead.rigidbody.velocity = rigidbody.velocity;
	//	dead.angularVelocity = rigidbody.angularVelocity;

	//		}
		
//	}
    