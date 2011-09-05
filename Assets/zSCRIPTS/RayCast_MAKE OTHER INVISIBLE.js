var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;          
var RandomObjects : Rigidbody[];
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
     if(iPhoneInput.GetTouch(0).tapCount == 1)  {
         var ray = camera.main.ScreenPointToRay(evt.position);
         if (Physics.Raycast(ray, hit, 1000) ) {
            var hitObject : GameObject = hit.transform.gameObject;
            var hitTransform : Transform = hitObject.transform;
            if ( hitObject.tag == "test" ) {
              
              //GameObject.FindGameObjectsWithTag ("tint");
        
   (GameObject.Find("tint").GetComponent("Visible_FALSE")as Behaviour ).enabled = false;
   
               Debug.Log(" Disable ");   
                        
              //renderer.enabled = false;
              //GetComponent("Visible_FALSE").enabled = true;
               Debug.Log(" Enable ");      
    }}}}}}
    
    

    
    
                
                
   
    