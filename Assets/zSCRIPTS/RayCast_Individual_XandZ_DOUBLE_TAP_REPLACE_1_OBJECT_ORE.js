
var deadReplacement : GameObject;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;

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
       if (iPhoneInput.touchCount == 1) {     
     if(iPhoneInput.GetTouch(0).tapCount == 2)  {
         var ray = camera.main.ScreenPointToRay(evt.position);
         if (Physics.Raycast(ray, hit, 1000) ) {
            var hitObject : GameObject = hit.transform.gameObject;
            var hitTransform : Transform = hitObject.transform;
            if ( hitObject.tag == "enemy" ) {
               if ( myTransform.position.x == hitTransform.position.x) {       // matches x position
                  if ( myTransform.position.z == hitTransform.position.z) { 
                  	if ( myTransform.position.y == hitTransform.position.y) {  // matches z position
                     // so this is the object touched in the 2d space
                     deadReplacementPosition = hit.transform.position;
                     deadReplacementRotation = hit.transform.rotation;
                 

                 
                       Destroy( hit.collider.gameObject );
                     var parentTransform : Transform = hit.transform.parent.gameObject.transform;
                   
                     // Play a dying audio clip
                     if (dieSound) {
                        AudioSource.PlayClipAtPoint(dieSound, transform.position);
                     }
                     
                         // Replace ourselves with a deadbody
                     if (deadReplacement) {
                        var dead : GameObject = Instantiate(deadReplacement, deadReplacementPosition, deadReplacementRotation);
                        dead.transform.parent = parentTransform;
                     }
                     
              
         


 

                                
                     
                
                
                
                
                
                  }
               }
            }               
         }
        }
    }
}}}