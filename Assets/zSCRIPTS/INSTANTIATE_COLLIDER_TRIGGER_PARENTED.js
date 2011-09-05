var dieSound : AudioClip;

var initialDelay = 1.0;

var deadReplacement : GameObject;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;

var hit : RaycastHit;
var fadeSpeed = 1.0;
var explosion : Transform;
var damagesound : AudioClip;
var myTransform : Transform;









function OnTriggerEnter ( other : Collider) {
  if (other.gameObject.tag == "Water_Pathfinder") 
	{
		
		Detonate();
	}
}

                    function Detonate () {
	// Destroy ourselves
	Destroy(gameObject);    

	

                  // so this is the object touched in the 2d space
                     deadReplacementPosition = transform.position;
                     deadReplacementRotation = transform.rotation;
       
                     var parentTransform : Transform = transform.parent.gameObject.transform;
                   
                     // Play a dying audio clip
                     if (dieSound) {
                        AudioSource.PlayClipAtPoint(dieSound, transform.position);
                     }
                     // Replace ourselves with a deadbody
                     if (deadReplacement) {
                        var dead : GameObject = Instantiate(deadReplacement, deadReplacementPosition, deadReplacementRotation);
                        dead.transform.parent = parentTransform;
			}}





