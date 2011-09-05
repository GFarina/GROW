var deadReplacement : Rigidbody;   
var hit : RaycastHit;
var dieSound : AudioClip;
var initialDelay = 1.0;
var fadeSpeed = 1.0;
var explosion : Transform;
var damagesound : AudioClip;

function Update ()
{
   for (var evt : iPhoneTouch in iPhoneInput.touches)   
   {
        if (evt.phase == iPhoneTouchPhase.Began)
        {
            var ray = camera.main.ScreenPointToRay(evt.position);
     
           if(Physics.Raycast(ray, hit, 5) && hit.collider.tag == ("enemy"))
           {
                Destroy( hit.collider.gameObject );
                // Play a dying audio clip
                if (dieSound)
                    AudioSource.PlayClipAtPoint(dieSound, transform.position);

                // Replace ourselves with a deadbody
                if (deadReplacement)   
                    var dead : Rigidbody = Instantiate(deadReplacement, hit.transform.position, hit.transform.rotation);
                 
            }
        }
    }
} 