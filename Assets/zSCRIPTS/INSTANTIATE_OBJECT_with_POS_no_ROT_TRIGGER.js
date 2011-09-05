var explosion : Transform;
var theClonedExplosion : Transform;

function OnTriggerEnter(Collider) {
  if (gameObject.tag == "Bonus") 
	

theClonedExplosion = Instantiate(explosion, transform.position, Quaternion.identity); 

	}