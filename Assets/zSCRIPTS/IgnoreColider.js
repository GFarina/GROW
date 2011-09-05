// Instantiate a bullet and make it ignore collisions with this object.
var CraneArm : GameObject;
function Start () {
Physics.IgnoreCollision(CraneArm.collider, collider);
}