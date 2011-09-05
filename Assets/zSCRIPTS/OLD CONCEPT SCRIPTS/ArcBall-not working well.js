var numberAverages : int = 3;

private var originalRotation : Quaternion;
private var offsetRotation : Quaternion;

// Make sure there is always a Rigidbody
@script RequireComponent (Rigidbody)
@script RequireComponent (SphereCollider)


function Awake () {
   
   numberAverages = Mathf.Clamp (numberAverages, 1, numberAverages);
   
}

function Update () {
   var hit : RaycastHit;
   var dir : Vector3;

   
   if (iPhoneInput.touchCount > 0) {      
         rigidbody.angularVelocity = Vector3.zero;

      // Get movement of the finger since last frame
      var touchPosition:Vector2 = iPhoneInput.GetTouch(0).position;

         // Record initial variables
         if (Physics.Raycast (camera.main.ScreenPointToRay(touchPosition), hit)) {
            originalRotation = transform.rotation;
            dir = hit.point - transform.position;
            offsetRotation = Quaternion.Inverse (Quaternion.LookRotation (dir));
            Spin (dir);
         }
   }
}


function Spin (dir : Vector3) {
   var hit : RaycastHit;
   var previousDirList : Array = new Array ();
   var currentDir : Vector3;
   var touchPosition:Vector2;
   var touched : boolean;
   
   // Initialize previous dir list
   for (var i : int = 0; i < numberAverages; i++) {
      previousDirList.Add (currentDir);
   }
   
   currentDir = dir;
      
   touchPosition = iPhoneInput.GetTouch(0).position;
   while (iPhoneInput.touchCount > 0 && Physics.Raycast (camera.main.ScreenPointToRay(touchPosition), hit)) {
        touchPosition = iPhoneInput.GetTouch(0).position;
      // Remove first element of the array
      previousDirList.RemoveAt (0);
      // Add current dir to the end
      previousDirList.Add (currentDir);
      currentDir = hit.point - transform.position;
     
      transform.rotation =  Quaternion.LookRotation (currentDir) * offsetRotation * originalRotation;
      yield;
   }
   
   // User let go of the mouse so make the object spin on its own
   var avgPreviousDir : Vector3 = Vector3.zero;
   for (dir in previousDirList) {
        var d : Vector3 = dir;
      avgPreviousDir = avgPreviousDir + d;
   }
   
   avgPreviousDir /= numberAverages;
   Kick (currentDir, avgPreviousDir);
}


function Kick (r2 : Vector3, r1 : Vector3) {
   var linearVelocity : Vector3;
   var angVelocity : Vector3;
   
   // Calculate the angular velocity:  omega = r x v / r^2
   linearVelocity = (r2 - r1) / Time.deltaTime;
   rigidbody.angularVelocity = Vector3.Cross (r2, linearVelocity) / r2.sqrMagnitude;

} 