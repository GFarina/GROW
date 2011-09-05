


function Awake () {


rigidbody.Sleep();
}

function OnTriggerExit (other : Collider) {
   if (other.attachedRigidbody) {  	

  rigidbody.WakeUp(); 


      }}
      
      
      
