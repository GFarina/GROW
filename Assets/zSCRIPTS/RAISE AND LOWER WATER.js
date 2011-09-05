// Moves object according to finger movement on the screen

var speed : float = 0.1;
function Update () {
//if (Input.touchCount > 1 &&
if (Input.touchCount == 2 &&

Input.GetTouch(1).phase == TouchPhase.Moved) {

// Get movement of the finger since last frame
var touchDeltaPosition:Vector2 = Input.GetTouch(1).deltaPosition;

// Move object across XY plane
//transform.Translate (-touchDeltaPosition.x * speed,
//touchDeltaPosition.y * speed, 0);


transform.Translate (0,touchDeltaPosition.y * speed, 0 );
transform.Translate (0,touchDeltaPosition.x * speed, 0 );

}
}