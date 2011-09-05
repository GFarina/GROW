var clipStorage : AudioClip[];

function OnCollisionEnter(collision:Collision){
   
   if (collision.gameObject.tag == "FRAME")
   if (collision.relativeVelocity.magnitude > 80)
   {
   audio.PlayOneShot(clipStorage[Random.Range(0,clipStorage.Length)]);
   }
} 