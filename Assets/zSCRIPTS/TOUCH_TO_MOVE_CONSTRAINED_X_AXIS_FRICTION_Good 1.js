var speed = 5.0;
var object : GameObject;
var swipeVector = Vector2.zero;
var velocity: Vector2;
var friction = 0.8;   // ...or whatever gives the right effect. 
function Update ()

{
if (iPhoneInput.touchCount > 0) {
   var phase = iPhoneInput.GetTouch(0).phase;
   if (phase == iPhoneTouchPhase.Moved || phase == iPhoneTouchPhase.Began) {
    // Get movement of the finger since last frame
       velocity = iPhoneInput.GetTouch(0).deltaPosition * speed;
}
   }

   object.transform.position += velocity;
   velocity *= Mathf.Pow(friction, Time.deltaTime);
   transform.position.y = 21.07562;
   transform.position.x = Mathf.Clamp(transform.position.x, -1.209392, 5.721612);
}
