var NewObject : Transform;



function OnCollisionEnter (other : Collision)
     //function OnTriggerEnter (hit : Collider)
      
     {  
           
 //if(hit.collider.gameObject.tag == "FRAME"){
  if(other.collider.gameObject.tag == "FRAME"){	
    	rigidbody.isKinematic = true;
    	//transform.parent = hit.transform; 
         transform.parent = other.transform; 
yield WaitForSeconds(2);

Instantiate (NewObject, transform.position, Quaternion.identity);


Destroy(gameObject);
 //Instantiate (NewObject, transform.parent.position, transform.parent.rotation);
   
    
    }}
  
   


                 

                 
                       //Destroy( hit.collider.gameObject );
                     //var parentTransform : Transform = hit.transform.parent.gameObject.transform;
                   
                     // Play a dying audio clip
                    // if (dieSound) {
                    //    AudioSource.PlayClipAtPoint(dieSound, transform.position);
                  //   }
                     
                         // Replace ourselves with a deadbody
                 //    if (deadReplacement) {
                //        var dead : GameObject = Instantiate(deadReplacement, deadReplacementPosition, deadReplacementRotation);
                //        dead.transform.parent = parentTransform;
                //     }
                     
                     
   
   
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
