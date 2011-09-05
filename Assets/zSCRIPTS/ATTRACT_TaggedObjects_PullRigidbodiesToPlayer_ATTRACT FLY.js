var radius = 30.0;
var power = -90.0;
function Update () {
// Applies an explosion force to all nearby rigidbodies
var explosionPos = transform.position;
var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);

for (var hit in colliders) {
if (!hit)
continue;

if (hit.collider.gameObject.tag == "FLY")




{
hit.rigidbody.AddExplosionForce(power, explosionPos, radius, 0.0);
}
}
} 