var hitPoints = 100.0;
var deadReplacement : Rigidbody;
var dieSound : AudioClip;
var initialDelay = 1.0;





function ApplyDamage (damage : float) 
   {
          renderer.material.color.a = 20.0;
      renderer.material.color.b = 20.0;
      renderer.material.color.g = 20.0;
      renderer.material.color.r = 20.0;

      
      yield WaitForSeconds(initialDelay);

        renderer.material.color.a = 1.0;
     renderer.material.color.b = 1.0;
      renderer.material.color.g = 1.0;
      renderer.material.color.r = 1.0;

   
         yield;
      

   // We already have less than 0 hitpoints, maybe we got killed already?
   if (hitPoints <= 0.0)
      return;

   hitPoints -= damage;
   if (hitPoints <= 0.0)
   {
   	
   	

      Detonate();
   }
}

function Detonate () {
   // Destroy ourselves
   Destroy(gameObject);
    
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
		
	}
         
         
  