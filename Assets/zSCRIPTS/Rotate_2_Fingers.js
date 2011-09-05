

function Update () {
  if(iPhoneInput.touchCount > 1) {
    var touch = iPhoneInput.GetTouch(1);
      //Debug.Log (touch.phase);
         //Debug.Log (touch.positionDelta);
         var moveDirection = -1;
         var x = (touch.positionDelta.x);
         
         
   transform.Rotate(0, -x, 0); 
   }}