// Applies an upwards force to all rigidbodies that enter the trigger.
function OnTriggerEnter (other : Collider) {
if (other.attachedRigidbody) {
other.attachedRigidbody.AddForce(Vector3.up * 3550);
}
}