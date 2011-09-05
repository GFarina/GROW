function OnTriggerEnter (other:Collider)
{
    if (other.gameObject.tag == "enemy")
    {
    	     yield WaitForSeconds(3);   
       Destroy(other.gameObject);
     
    }
} 