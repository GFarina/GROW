var speed = -5.0;
var object : GameObject; 
var swipeVector = Vector2.zero;
function Update ()
{
    if (iPhoneInput.touchCount > 0 && iPhoneInput.GetTouch(0).phase == iPhoneTouchPhase.Moved) {
    // Get movement of the finger since last frame
        var touchDeltaPosition:Vector2 = iPhoneInput.GetTouch(0).deltaPosition;
  object.transform.position -= (Vector3.up * touchDeltaPosition.y * Time.deltaTime * speed);


 // (Vector3.up * touchDeltaPosition.x * Time.deltaTime * speed);

  
   }

transform.position.x = Mathf.Clamp(transform.position.x, 6.082253, 6.082253);
transform.position.y = Mathf.Clamp(transform.position.y, -6.785822, 20.67718); 
}






