var test : GameObject;
var tapAndHoldTimeWindow : float = 2;
private var tapTimer : float = 0.0;

var touch : iPhoneTouch = iPhoneInput.GetTouch(3);
tapTimer += Time.deltaTime;

if ( touch.phase == iPhoneTouchPhase.Stationary )
{
if ( tapTimer >= tapAndHoldTimeWindow)
{



Instantiate(test, transform.position, Quaternion.identity);
				    Debug.Log("Position" + transform.position);
  Destroy(gameObject);



}
}

if ( touch.phase == iPhoneTouchPhase.Ended || touch.phase == iPhoneTouchPhase.Canceled )
{
tapTimer = 0.0;
}