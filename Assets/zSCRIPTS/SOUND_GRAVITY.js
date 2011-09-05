
function OnCollisionEnter(collision : Collision) {
// Debug-draw all contact points and normals
for (var contact : ContactPoint in collision.contacts) {
Debug.DrawRay(contact.point, contact.normal, Color.white);
}

// Play a sound if the coliding objects had a big impact.
if (collision.relativeVelocity.magnitude > 9.2)
audio.Play();
}