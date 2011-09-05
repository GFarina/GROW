var object : GameObject;
var speed = 5.0;

function Update () {
   
   if(iPhoneInput.touchCount > 0) {
     
      var touch = iPhoneInput.GetTouch(0);

      object.transform.localPosition -= touch.positionDelta * Time.deltaTime * speed;
    }
} 