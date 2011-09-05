
// fuelCellGlowLookAt: Forces the object to always face the camera.
// (Used for the 'glowing halo' effect behind the collectable items.)
	var rotateSpeed : float = 5.0;

function Update() 
{



	transform.LookAt(Camera.main.transform);
}	


function OnBecameVisible()
{
	enabled = true;	
}

function OnBecameInvisible()
{
	enabled = false;	
}