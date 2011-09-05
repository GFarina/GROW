
var throwClip : AudioClip;
var explosion : GameObject;
function OnCollisionEnter (collision : Collision) {
       

var contact : ContactPoint = collision.contacts[0];
   

 var transform = Quaternion.FromToRotation(Vector3.up, contact.normal);
       

var instantiatedExplosion : GameObject = Instantiate (explosion, contact.point,
   

    

    

 transform);
   

 Destroy(gameObject);
 audio.PlayOneShot(throwClip);
} 