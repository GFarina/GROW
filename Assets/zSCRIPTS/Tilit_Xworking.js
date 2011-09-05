public var force:float = 1.0;
public var simulateAccelerometer:boolean = false;


function FixedUpdate () {
	var dir : Vector3 = Vector3.zero;

	if (simulateAccelerometer)
	{
		// using joystick input instead of iPhone accelerometer
		dir.y = Input.GetAxis("Horizontal");
		dir.y = Input.GetAxis("Vertical");
	}
	else
	{
		// we assume that device is held parallel to the ground
		// and Home button is in the right hand
		
		// remap device acceleration axis to game coordinates
		// 1) XY plane of the device is mapped onto XZ plane
		// 2) rotated 90 degrees around Y axis
		dir.x = iPhoneInput.acceleration.z;
		dir.x = -iPhoneInput.acceleration.z;
		
		//use below for tilt on z
		//dir.y = iPhoneInput.acceleration.z;
		//dir.y = -iPhoneInput.acceleration.z;
		// clamp acceleration vector to unit sphere
		if (dir.sqrMagnitude > 1)
			dir.Normalize();
	}
	
	rigidbody.AddForce(dir * force);
}