var deadReplacement : Rigidbody;
var deadReplacementPosition : Vector3;
var deadReplacementRotation : Quaternion;
var dieSound : AudioClip;
var dieSound2 : AudioClip;
var explosion : Transform;
var damagesound : AudioClip;
var explosionRadius = 5.0;
var explosionPower = 10.0;
var initialDelay = 0.0;
var fadeSpeed = 1.0;
var explosionDamage = 25.0;
var explosionTime = 1.0;
var myTransform : Transform;
var hit : RaycastHit;

function Start () {
   var explosionPosition = transform.position;
   var colliders : Collider[] = Physics.OverlapSphere (explosionPosition, explosionRadius);
    for (var hit in colliders){
      if (!hit)
         continue;
      Debug.Log( " hit.collider.tag = " + hit.collider.tag);
      if (hit.collider.tag == ("Fossil") ) {
         Debug.Log(" enemy hit");
         var closestPoint = hit.ClosestPointOnBounds(explosionPosition);
         var distance = Vector3.Distance(closestPoint, explosionPosition);
         var hitPoints = 1.0;
         hitPoints *= explosionDamage;
         hit.collider.SendMessageUpwards("ApplyDamage", hitPoints, SendMessageOptions.DontRequireReceiver);
 
        
            }
   }
}

 