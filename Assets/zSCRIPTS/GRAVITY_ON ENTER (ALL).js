// Disables gravity on all rigid bodies entering this collider.
function OnTriggerStay (other : Collider)
{
if (other.attachedRigidbody)
{
other.attachedRigidbody.useGravity = true;
}
}
// Turn this collider into a trigger on startup
collider.isTrigger = true;


 

function OnTriggerExit ( other : Collider)
{
	if (other.attachedRigidbody)
{
other.attachedRigidbody.useGravity = false;
}
}