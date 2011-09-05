
var object : GameObject; 
var speed = 5.0;
var swipeVector = Vector2.zero;

function Update () {
  if(iPhoneInput.touchCount > 0) {
    var touch = iPhoneInput.GetTouch(0);
    swipeVector = touch.positionDelta * Time.deltaTime * speed;
    object.transform.position -= swipeVector;
  } else {

      
      var v = object.transform.position - swipeVector;
//now constrain v:
v.x = Mathf.Max(v.x,-1);
v.x = Mathf.Min(v.x, 1);
v.y = Mathf.Max(v.y,-1);
v.y = Mathf.Min(v.y, 1);

// and apply the newly constrained position to the transform
object.transform.position = v; 
      
      
      
      
    }
  }
