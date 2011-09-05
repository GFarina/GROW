
var deadReplacement : GameObject;
var deadReplacement2 : GameObject;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;

var hit : RaycastHit;
var dieSound : AudioClip;
var initialDelay = 1.0;
var fadeSpeed = 1.0;
var explosion : Transform;
var damagesound : AudioClip;

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
            if ( hitObject.tag == "ACTIVATE" ) {
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
                        var dead : GameObject = Instantiate(deadReplacement2, deadReplacementPosition, deadReplacementRotation);
                        dead.transform.parent = parentTransform;
                     }
                     
                     
                     
                     // Replace ourselves with a deadbody
                     if (deadReplacement) {
                        var dead2 : GameObject = Instantiate(deadReplacement, deadReplacementPosition, deadReplacementRotation);
                        dead2.transform.parent = parentTransform;
                   
                }}}}}}}}}}
                
         


 
var normalCollisionCount = 1;

var moveLimit = .5;
var collisionMoveFactor = .01;
var addHeightWhenClicked = 0.0;
var freezeRotationOnDrag = true;
var cam : Camera;
private var myRigidbody : Rigidbody;
private var myTransform : Transform;
private var canMove = false;
private var yPos : float;
private var gravitySetting : boolean;
private var freezeRotationSetting : boolean;
private var sqrMoveLimit : float;
private var collisionCount = 0;
private var camTransform : Transform;

function Start () {
    myRigidbody = rigidbody;
    myTransform = transform;
    if (!cam) {
        cam = Camera.main;
    }
    if (!cam) {
        Debug.LogError("Can't find camera tagged MainCamera");
        return;
    }
    camTransform = cam.transform;
    sqrMoveLimit = moveLimit * moveLimit;   // Since we're using sqrMagnitude, which is faster than magnitude
}

function OnMouseDown () {
    canMove = true;
    myTransform.Translate(Vector3.up*addHeightWhenClicked);
    gravitySetting = myRigidbody.useGravity;
    freezeRotationSetting = myRigidbody.freezeRotation;
    myRigidbody.useGravity = false;
    myRigidbody.freezeRotation = freezeRotationOnDrag;
    yPos = myTransform.position.y;
}

function OnMouseUp () {
    canMove = false;
    myRigidbody.useGravity = gravitySetting;
    myRigidbody.freezeRotation = freezeRotationSetting;
    if (!myRigidbody.useGravity) {
        myTransform.position.y = yPos-addHeightWhenClicked;
    }
}

function OnCollisionEnter () {
    collisionCount++;
}

function OnCollisionExit () {
    collisionCount--;
}

function FixedUpdate () {
    if (!canMove) return;
   
    myRigidbody.velocity = Vector3.zero;
    myRigidbody.angularVelocity = Vector3.zero;
    myTransform.position.y = yPos;
    var mousePos = Input.mousePosition;
    var move = cam.ScreenToWorldPoint(Vector3(mousePos.x, mousePos.y, camTransform.position.y - myTransform.position.y)) - myTransform.position;
    move.y = 0.0;
    if (collisionCount > normalCollisionCount) {
        move = move.normalized*collisionMoveFactor;
    }
    else if (move.sqrMagnitude > sqrMoveLimit) {
        move = move.normalized*moveLimit;
    }
   
    myRigidbody.MovePosition(myRigidbody.position + move);
}

@script RequireComponent(Rigidbody)