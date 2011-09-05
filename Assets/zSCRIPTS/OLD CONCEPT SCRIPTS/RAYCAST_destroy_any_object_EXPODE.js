var hit : RaycastHit;
var explosion : Transform;
var damagesound : AudioClip;
var explosionRadius = 5.0;
var explosionPower = 10.0;
var explosionDamage = 100.0;
var explosionTime = 1.0;

var deadReplacement : Rigidbody;

function Update () {
   

   for (var evt : iPhoneTouch in iPhoneInput.touches)   
     {
         if (evt.phase == iPhoneTouchPhase.Ended)
          {
      var ray = camera.main.ScreenPointToRay(evt.position);
     
           if(Physics.Raycast(ray, hit, 900) && hit.collider.tag == ("enemy"))
          

		Destroy( hit.collider.gameObject ); 

          
   	// Replace ourselves with a deadbody
	if (deadReplacement) {
		var dead : Rigidbody = Instantiate(deadReplacement, transform.position, transform.rotation);

			
					
	

		}}}}