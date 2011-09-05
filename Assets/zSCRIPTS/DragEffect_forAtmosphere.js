var dragAmount = 0.0;

function OnTriggerEnter ( other : Collider) {
  if (other.gameObject) {
     other.rigidbody.drag = dragAmount;
  }
} 
function OnTriggerExit ( other : Collider) {
  if (other.gameObject) {
  other.rigidbody.drag = 0;
  }
} 


//function OnTriggerEnter ( other : Collider) {
//FOR SPECIFIC TAGS: if (other.gameObject.tag == "enemy")