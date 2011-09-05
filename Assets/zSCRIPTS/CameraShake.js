var cam : Camera;
var startingShakeDistance = .8;
var decreasePercentage = .5;
var shakeSpeed = 55.0;
var numberOfShakes = 3;

function Start () {


	var hitTime = Time.time;
	var originalPosition = cam.transform.localPosition.x;
	var shakeCounter = numberOfShakes;
	var shakeDistance = startingShakeDistance;

	while (shakeCounter > 0) {
		// Make timers always start at 0 
		var timer = (Time.time - hitTime) * shakeSpeed;
		cam.transform.localPosition.x = originalPosition + Mathf.Sin(timer) * shakeDistance;
		// See if we've gone through an entire sine wave cycle, reset distance timer if so and do less distance next cycle
		if (timer > Mathf.PI * 2.0) {
			hitTime = Time.time;
			shakeDistance *= decreasePercentage;
			shakeCounter--;
		}
		yield;
	}
	cam.transform.localPosition.x = originalPosition;
}