function Update () {
var finalAngle = Input.acceleration.y*90;
transform.localEulerAngles.z = finalAngle;
}