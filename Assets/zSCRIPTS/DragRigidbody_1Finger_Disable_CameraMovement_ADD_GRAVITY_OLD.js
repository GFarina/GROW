var spring : float = 50.0;
var damper : float = 5.0;
var drag : float = 10.0;
var angularDrag : float = 5.0;
var raycastDistance : float = 1000;
var maxDistance : float = 0.2;
var minDistance : float = 0;
var attachToCenterOfMass : boolean = false;
var mainCamera : Camera;

private var dragger : GameObject;
private var springJoint : SpringJoint;
private var touch : iPhoneTouch;


function Start() {
   
   if (!mainCamera) {
      mainCamera = Camera.main;
   }

}


//function Update() {
function FixedUpdate() {
   
   // Make sure the user thouched the screen at least once and then iterate through all the available touches to find a suitable one.
   var touchCount : int = iPhoneInput.touchCount;
   if (!touchCount) {
      return;
   }
   
   var hit : RaycastHit;
   for (var i : int = 0; i < touchCount; i++) {
      touch = iPhoneInput.GetTouch(i);

      // We need to actually hit an object, so lets cast a ray to the position of the touch.
      if (
        Physics.Raycast(mainCamera.ScreenPointToRay(touch.position),hit,raycastDistance) &&
        touch.phase != iPhoneTouchPhase.Ended &&
        touch.phase != iPhoneTouchPhase.Canceled    
      ) {
      
         // We need to hit a rigidbody that is not kinematic, and if found we make it accessible to gravity
         if (!hit.rigidbody || hit.rigidbody.isKinematic) {
            return;
         }
         hit.rigidbody.useGravity = true;
         
               (GameObject.Find("Main Camera").GetComponent("TOUCH_TO_MOVE_CONSTRAINED_YAXIS_FRICTION_Good")as Behaviour ).enabled = false;
               Debug.Log(" Disable ");

         
         
         
         
         if (!springJoint) {
            // gotta find a way to destroy this object at some point 'cause once the rigidbody is out of touch it'll just linger there needlessley and possibly consume resources.
            dragger = new GameObject("Rigidbody dragger");
            springJoint = dragger.AddComponent(SpringJoint);
            dragger.rigidbody.isKinematic = true;
         }
         springJoint.transform.position = hit.point;

         if (attachToCenterOfMass) {
            springJoint.anchor = springJoint.transform.InverseTransformPoint(hit.rigidbody.transform.position + transform.TransformDirection(hit.rigidbody.centerOfMass));
         }
         else {
            springJoint.anchor = Vector3.zero;
         }
   
         springJoint.spring = spring;
         springJoint.damper = damper;
         springJoint.maxDistance = maxDistance;
         springJoint.minDistance = minDistance;
         springJoint.connectedBody = hit.rigidbody;
   
         StartCoroutine("DragObject",hit.distance);
         break;
      }
   }   
   
}


function DragObject(distance : float) {

   var oldDrag : float = springJoint.connectedBody.drag;
   var oldAngularDrag : float = springJoint.connectedBody.angularDrag;
   springJoint.connectedBody.drag = drag;
   springJoint.connectedBody.angularDrag = angularDrag;
   
   var ray : Ray;
   while (
     touch.phase != iPhoneTouchPhase.Ended &&
     touch.phase != iPhoneTouchPhase.Canceled
   ) 
   
   
 
   
   
   {
      ray = mainCamera.ScreenPointToRay(touch.position);
      springJoint.transform.position = ray.GetPoint(distance);
      yield;
   }
   
   if (springJoint.connectedBody) {
      springJoint.connectedBody.drag = oldDrag;
      springJoint.connectedBody.angularDrag = oldAngularDrag;
      springJoint.connectedBody = null;
   }
  Destroy(dragger);
  
   (GameObject.Find("Main Camera").GetComponent("TOUCH_TO_MOVE_CONSTRAINED_YAXIS_FRICTION_Good")as Behaviour ).enabled = true;
               Debug.Log(" Enabled ");
} 








