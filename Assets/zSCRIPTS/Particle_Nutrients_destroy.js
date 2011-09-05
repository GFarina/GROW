var OBJECT1 : GameObject;



function OnParticleCollision(other : GameObject){
	
    if (other.gameObject.tag == "NUTRIENTS")
    {

transform.parent = other.transform; 

Instantiate (OBJECT1, transform.position, Quaternion.identity);


Destroy(gameObject);

}}




