var clipStorage : AudioClip[];

function OnCollisionEnter(collision:Collision){
   

   if (collision.relativeVelocity.magnitude > 10)
   {
   audio.PlayOneShot(clipStorage[Random.Range(0,clipStorage.Length)]);
   }
} 