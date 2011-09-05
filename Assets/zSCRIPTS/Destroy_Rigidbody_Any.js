
function OnTriggerEnter (other : Collider)
{

		Destroy(other.attachedRigidbody.gameObject);

		Destroy(other.gameObject);
}

