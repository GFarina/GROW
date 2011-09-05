



// Disables gravity on all rigid bodies entering this collider.
function OnTriggerEnter (other : Collider)
{
if (other.attachedRigidbody.tag == "ANT")

other.attachedRigidbody.useGravity = true;
// (GameObject.Find("ANT").GetComponent("AI_Random_movement")as Behaviour ).enabled = false;
              // Debug.Log(" Disable ");

}
// Turn this collider into a trigger on startup
collider.isTrigger = true;


 

function OnTriggerExit ( other : Collider)
{
if (other.attachedRigidbody.tag == "ANT")

other.attachedRigidbody.useGravity = false;

}