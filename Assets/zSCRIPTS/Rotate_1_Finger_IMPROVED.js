public var speed : float = -0.2;
function Update ()
{
    if (iPhoneInput.touchCount > 0 && iPhoneInput.GetTouch(0).phase == iPhoneTouchPhase.Moved) {
    // Get movement of the finger since last frame
        var touchDeltaPosition:Vector2 = iPhoneInput.GetTouch(0).deltaPosition;
  transform.Rotate(Vector3.up * touchDeltaPosition.x * Time.deltaTime * speed);
   }
}
         

    
