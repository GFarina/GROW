function Update() {
   

   for (var i : int = 0; i < iPhoneInput.touchCount; i++)
   {
   var touch : iPhoneTouch = iPhoneInput.GetTouch(i);
      //Debug.Log (touch.phase);
         //Debug.Log (touch.positionDelta);
         var moveDirection = 0;
         var x = (touch.positionDelta.x);
         
         
   transform.Rotate(0, -x, 0);
   
    

   }}