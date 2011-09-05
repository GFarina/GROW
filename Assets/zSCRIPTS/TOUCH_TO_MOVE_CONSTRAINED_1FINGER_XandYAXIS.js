
var object : GameObject; 
var speed = -5.0;
var swipeVector = Vector2.zero;

function Update () {
  if(iPhoneInput.touchCount > 0) {
    var touch = iPhoneInput.GetTouch(0);
    swipeVector = touch.positionDelta * Time.deltaTime * speed;
    object.transform.position -= swipeVector;
  } 

transform.position.x = Mathf.Clamp(transform.position.x, 6.153383, 6.153383);
transform.position.y = Mathf.Clamp(transform.position.y, 0.9505672, 20.67718); 
}






 