var OBJECT1 : GameObject;

function OnTriggerStay (other:Collider)
{
    if (other.gameObject.tag == "CLEANER")
    {

var parentTransform : Transform = this.transform.parent.gameObject.transform;
                 (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
                
                   //(Instantiate(OBJECT2, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform;   
                

                Destroy(gameObject);
                 }}