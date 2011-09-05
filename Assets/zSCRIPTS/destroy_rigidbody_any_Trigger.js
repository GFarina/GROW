function OnTriggerStay (other:Collider)
{
    if (other.gameObject)
    {
    	    
       Destroy(other.gameObject);
     
    }
} 