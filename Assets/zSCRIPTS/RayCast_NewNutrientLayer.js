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
var OBJECT1 : GameObject;
   var particle : GameObject;
function Awake() {
   myTransform = transform; // this objects transform
}

function Update () {
   //for (var evt : iPhoneTouch in iPhoneInput.touches) {
     // if (evt.phase == iPhoneTouchPhase.Ended) {
             

				  for (var event : iPhoneTouch in iPhoneInput.touches) {
				  	
				  	
				  	if(event.tapCount == 1 && event.phase == iPhoneTouchPhase.Began)
       
              
        var ray = camera.main.ScreenPointToRay(event.position);

       
       
         if (Physics.Raycast(ray, hit, 1000) ) {
            var hitObject : GameObject = hit.transform.gameObject;
            var hitTransform : Transform = hitObject.transform;
            if ( hitObject.tag == "RAIN1" ) {
               if ( myTransform.position.x == hitTransform.position.x) {       // matches x position
                  if ( myTransform.position.z == hitTransform.position.z) { 
                  	if ( myTransform.position.y == hitTransform.position.y) {  // matches z position
                     // so this is the object touched in the 2d space
                     deadReplacementPosition = hit.transform.position;
                     deadReplacementRotation = hit.transform.rotation;
                 

                 
                       //Destroy( hit.collider.gameObject );
                     
                     // Play a dying audio clip
                     if (dieSound) {
                        AudioSource.PlayClipAtPoint(dieSound, transform.position);
                     }
                     
   
  //if(RandomDeadReplacements){   
   // var dead : Rigidbody = Instantiate(RandomDeadReplacements[Random.Range(0,RandomDeadReplacements.Length)], transform.position, transform.rotation);

 // Replace ourselves with a deadbody
      Instantiate(particle, hit.point, Quaternion.identity);

//var parentTransform : Transform = this.transform.parent.gameObject.transform;
               //  (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
                
                   //(Instantiate(OBJECT2, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform;   
                
      
    }}}}}}}
    
    
    
    

	