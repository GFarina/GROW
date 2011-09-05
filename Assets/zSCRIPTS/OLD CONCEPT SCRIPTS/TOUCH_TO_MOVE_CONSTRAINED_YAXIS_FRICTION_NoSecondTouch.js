var speed = -5.0;
var object : GameObject;
var swipeVector = Vector2.zero;
var velocity: Vector2;
var friction = 0.8;   // ...or whatever gives the right effect. 
function Update ()

{
    if (iPhoneInput.touchCount > 0 && iPhoneInput.GetTouch(0).phase == iPhoneTouchPhase.Moved) {
    // Get movement of the finger since last frame
        velocity = iPhoneInput.GetTouch(0).deltaPosition * speed;
   }

   object.transform.position += velocity;
   velocity *= Mathf.Pow(friction, Time.deltaTime);
   transform.position.x = 6.082253;
   transform.position.y = Mathf.Clamp(transform.position.y, -6.785822, 20);
}

