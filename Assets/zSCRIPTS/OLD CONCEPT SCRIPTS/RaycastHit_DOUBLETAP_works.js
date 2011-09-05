var deadReplacement : Rigidbody;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;
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
       if (iPhoneInput.touchCount == 1) {     
     if(iPhoneInput.GetTouch(0).tapCount == 2) 
        {
            var ray = camera.main.ScreenPointToRay(evt.position);
     
           if(Physics.Raycast(ray, hit, 500) && hit.collider.tag == ("enemy"))
           {
                deadReplacementPosition = hit.transform.position;
                deadReplacementRotation = hit.transform.rotation;
                Destroy( hit.collider.gameObject );
                // Play a dying audio clip
                if (dieSound)
                    AudioSource.PlayClipAtPoint(dieSound, transform.position);

                // Replace ourselves with a deadbody
                if (deadReplacement)   
                    var dead : Rigidbody = Instantiate(deadReplacement, deadReplacementPosition, deadReplacementRotation);
                 
            }
        }
    }
} }