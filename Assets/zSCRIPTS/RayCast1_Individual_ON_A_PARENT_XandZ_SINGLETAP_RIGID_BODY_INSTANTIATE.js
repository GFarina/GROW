var hit : RaycastHit;
var explosion : Transform;
var damagesound : AudioClip;
var explosionRadius = 5.0;
var explosionPower = 10.0;
var explosionDamage = 100.0;
var explosionTime = 1.0;
var deadReplacement2 : Rigidbody;
var deadReplacement : Rigidbody;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;
var dieSound : AudioClip;
var initialDelay = 1.0;
var fadeSpeed = 1.0;




function Update () {
   

   for (var evt : iPhoneTouch in iPhoneInput.touches)   
     {
         if (evt.phase == iPhoneTouchPhase.Ended)
          {
      var ray = camera.main.ScreenPointToRay(evt.position);
     
           if(Physics.Raycast(ray, hit, 900) && hit.collider.tag == ("enemy"))
          
      {
                deadReplacementPosition = hit.transform.position;
                deadReplacementRotation = hit.transform.rotation;
                Destroy( hit.collider.gameObject );
                // Play a dying audio clip
                if (dieSound)
                    AudioSource.PlayClipAtPoint(dieSound, transform.position);

                // Replace ourselves with a deadbody
                if (deadReplacement)  { 
                    var dead : Rigidbody = Instantiate(deadReplacement, deadReplacementPosition, deadReplacementRotation);
      }         
      
      
      
                if (deadReplacement)  { 
                    var dead2 : Rigidbody = Instantiate(deadReplacement2, deadReplacementPosition, deadReplacementRotation);
      }           // Replace ourselves with a deadbody
	
		
		Destroy( hit.collider.gameObject ); 

           
   
			
			
		}}}}