


function Awake () {


rigidbody.Sleep();
}

function OnTriggerEnter (other : Collider) {
     	if (other.attachedRigidbody) {

  rigidbody.WakeUp(); 


      }}
      
      
      
