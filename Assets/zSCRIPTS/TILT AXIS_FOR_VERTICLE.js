var turnSpeed : float = 3.0;
var maxTurnLean : float = 70.0;
var maxTilt : float = 50.0;

var sensitivity : float = 0.5;

var forwardForce : float = 5.0;
var guiSpeedElement : Transform;
var craft : GameObject;

private var normalizedSpeed : float = 0.2;
private var euler : Vector3 = Vector3.zero;

var horizontalOrientation : boolean = true;



function FixedUpdate () {

	if(GameObject.FindWithTag("SYSTEM"))
	{
		GameObject.FindWithTag("SYSTEM").rigidbody.AddRelativeForce(0, 0, normalizedSpeed * (forwardForce*3));
	
		var accelerator : Vector3 = iPhoneInput.acceleration;

		if (horizontalOrientation)
		{
			var t : float = accelerator.y;
			
					
			accelerator.x = -accelerator.x;
			accelerator.y = t;
		}
	
		// Rotate turn based on acceleration		
		euler.z += accelerator.y * turnSpeed;
		// Since we set absolute lean position, do some extra smoothing on it
		euler.z = Mathf.Lerp(euler.z, -accelerator.x * maxTurnLean, 0.2);

		// Since we set absolute lean position, do some extra smoothing on it
		euler.z = Mathf.Lerp(euler.z, accelerator.z * maxTilt, 0.2);
	
		// Apply rotation and apply some smoothing
		var rot : Quaternion = Quaternion.Euler(euler);
		
		GameObject.FindWithTag("SYSTEM").transform.rotation = Quaternion.Lerp (transform.rotation, rot, sensitivity);
	}}

