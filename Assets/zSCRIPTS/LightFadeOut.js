// Fades light over time

var lightIntensity = 1.0;
var fadeSpeed = 1.0;

function Update () {
	lightIntensity = Mathf.Max (lightIntensity - Time.deltaTime*fadeSpeed, 0.0);
	light.intensity = lightIntensity;
}