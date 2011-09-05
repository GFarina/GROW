function Update ()
{
if ( iPhoneInput.touchCount == 2 )
{
//iPhoneTouch touch1 = iPhoneInput.GetTouch(0);
//iPhoneTouch touch2 = iPhoneInput.GetTouch(1);

var touch1 : iPhoneTouch = iPhoneInput.GetTouch( 1 );
var touch2 : iPhoneTouch = iPhoneInput.GetTouch( 0 );

// Find out how the touches have moved relative to eachother:
var curDist : Vector2 = touch2.position - touch1.position;
var prevDist : Vector2 = (touch2.position - touch2.positionDelta) - (touch1.position - touch1.positionDelta);

var touchDelta : float = curDist.magnitude - prevDist.magnitude;

// move camera in world coordinates
//Camera.main.transform.position -= new Vector3(0, 0, touchDelta * .5f);

// translate along local coordinate space
//Camera.main.transform.Translate(0,0,touchDelta*.5f );
transform.Translate(0,-touchDelta*.3f, 0);

}
} 