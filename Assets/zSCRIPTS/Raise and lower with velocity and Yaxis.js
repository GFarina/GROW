var speed = -5.0;
var object : GameObject;
var swipeVector = Vector2.zero;
var velocity: Vector2;
var friction = 0.8;   // ...or whatever gives the right effect. 
function Update ()

{

	//if (iPhoneInput.touchCount > 1) {
		if ( iPhoneInput.touchCount == 2 ){
		
   var phase = iPhoneInput.GetTouch(1).phase;
   if (phase == iPhoneTouchPhase.Moved || phase == iPhoneTouchPhase.Began) {
    // Get movement of the finger since last frame
       velocity = iPhoneInput.GetTouch(1).deltaPosition * speed;
}
   }

   object.transform.position += velocity;
   velocity *= Mathf.Pow(friction, Time.deltaTime);
   //transform.position.x = 6.335849;
   transform.position.y = Mathf.Clamp(transform.position.y, -14, 52);
	}