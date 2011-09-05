#pragma downcast
var up=Mathf.Atan2(-iPhoneInput.acceleration.y,iPhoneInput.acceleration.x)*Mathf.Rad2Deg; 
var rotay = up; 
var smoothTime = 0.3;
var smoothVelocity = 0.3; 

function Update () { 
up=Mathf.Atan2(-iPhoneInput.acceleration.y,iPhoneInput.acceleration.x)*Mathf.Rad2Deg; 
rotay = Mathf.SmoothDampAngle(rotay, up, smoothVelocity, smoothTime); 
transform.eulerAngles.y = rotay;
}