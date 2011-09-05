// Disables gravity on all rigid bodies entering this collider.
function OnTriggerEnter (other : Collider)
{
if (other.attachedRigidbody)
{
other.attachedRigidbody.useGravity = false;
}
}
// Turn this collider into a trigger on startup
collider.isTrigger = true;


 

function OnTriggerExit ( other : Collider)
{
	if (other.attachedRigidbody)
{
other.attachedRigidbody.useGravity = true;
}
}