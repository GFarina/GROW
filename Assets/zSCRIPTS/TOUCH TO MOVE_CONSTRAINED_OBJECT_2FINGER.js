
var object : GameObject; 
var speed = 5.0;
var swipeVector = Vector2.zero;

function Update () {
  if(iPhoneInput.touchCount > 1) {
    var touch = iPhoneInput.GetTouch(1);
    swipeVector = touch.positionDelta * Time.deltaTime * speed;
    object.transform.position += swipeVector;
  } 
transform.position.x = Mathf.Clamp(transform.position.x, 6.930123, 6.930123);
transform.position.y = Mathf.Clamp(transform.position.y, 6.47, 7.311327);  
}
