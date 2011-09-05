var hitPoints = 100.0;
var RandomObjects : Rigidbody[];
var dieSound : AudioClip;

function ApplyDamage (damage : float) {
// We already have less than 0 hitpoints, maybe we got killed already?
if (hitPoints <= 0.0)
return;

hitPoints -= damage;
if (hitPoints <= 0.0)
{
Detonate();
}
}

function Detonate () {
// Destroy ourselves
Destroy(gameObject);

// Play a dying audio clip
if (dieSound)
AudioSource.PlayClipAtPoint(dieSound, transform.position);

// Replace ourselves with the dead body
    if(RandomObjects){   
    var dead : Rigidbody = Instantiate(RandomObjects[Random.Range(0,RandomObjects.Length)], transform.position, transform.rotation);

    }}
  
