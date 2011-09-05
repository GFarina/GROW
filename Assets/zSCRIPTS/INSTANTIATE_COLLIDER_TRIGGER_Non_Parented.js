var dieSound : AudioClip;

var initialDelay = 1.0;

var deadReplacement : Rigidbody;


function OnTriggerEnter ( other : Collider) {
  if (other.gameObject.tag == "Finish") 
	{
		
		Detonate();
	}
}

function Detonate () {
	// Destroy ourselves
	Destroy(gameObject);
	

	// Replace ourselves with a deadbody
	if (deadReplacement) {
		var dead : Rigidbody = Instantiate(deadReplacement, transform.position, transform.rotation);

	
	// Play a dying audio clip
	if (dieSound)
		AudioSource.PlayClipAtPoint(dieSound, transform.position);


			
			}}





