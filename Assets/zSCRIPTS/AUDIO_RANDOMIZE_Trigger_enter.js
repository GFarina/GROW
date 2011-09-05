var clipStorage : AudioClip[];

 
 
     
   
   
   
   
   function OnTriggerEnter ( other : Collider) {
  //if (other.gameObject) {
  	
   	
     audio.PlayOneShot(clipStorage[Random.Range(0,clipStorage.Length)]);
  }
  
  
  
  
  
  
//function OnCollisionEnter(collision:Collision){
   

  // if (collision.relativeVelocity.magnitude > 10)