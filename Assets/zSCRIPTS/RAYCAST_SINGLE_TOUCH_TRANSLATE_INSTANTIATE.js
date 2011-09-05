var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;          
var RandomDeadReplacements : Rigidbody[];
var RandomDeadReplacements2 : Rigidbody[];
var deadReplacement : GameObject;
var hit : RaycastHit;
var dieSound : AudioClip;
var initialDelay = 1.0;
var fadeSpeed = 1.0;
var explosion : Transform;
var damagesound : AudioClip;
var myTransform : Transform;

function Awake() {
   myTransform = transform; // this objects transform
}

function Update () {
   
   for (var evt : iPhoneTouch in iPhoneInput.touches) {

      if (evt.phase == iPhoneTouchPhase.Ended) {
     	         


     	
     	
         var ray = camera.main.ScreenPointToRay(evt.position);
         if (Physics.Raycast(ray, hit, 2000) ) {
            var hitObject : GameObject = hit.transform.gameObject;
            var hitTransform : Transform = hitObject.transform;
            if ( hitObject.tag == "SUN" ) 
          
            
            //if ( hitObject.tag == "TEST" ) 
            
            

            
            
            
            
            {
               if ( myTransform.position.x == hitTransform.position.x) {       // matches x position
                  if ( myTransform.position.z == hitTransform.position.z) { 
                  	if ( myTransform.position.y == hitTransform.position.y) {  // matches z position
                     // so this is the object touched in the 2d space
                     deadReplacementPosition = hit.transform.position;
                     deadReplacementRotation = hit.transform.rotation;
                 

                 
                       
                     
                     // Play a dying audio clip
                     if (dieSound) {
                        AudioSource.PlayClipAtPoint(dieSound, transform.position);
                     }
                     
   
  //if(RandomDeadReplacements){   
   // var dead : Rigidbody = Instantiate(RandomDeadReplacements[Random.Range(0,RandomDeadReplacements.Length)], transform.position, transform.rotation);

 // Replace ourselves with a deadbody
	//if (deadReplacement) {
		//var dead2 : Rigidbody = Instantiate(deadReplacement, transform.position, transform.rotation);


 Instantiate(deadReplacement, transform.position, transform.rotation);
	       transform.Translate(Vector3.up*10000);
		// For better effect we assign the same velocity to the exploded object
		//dead2.rigidbody.velocity = rigidbody.velocity;
		//dead2.angularVelocity = rigidbody.angularVelocity;
      
    }}}}}}}}
    















  
  


