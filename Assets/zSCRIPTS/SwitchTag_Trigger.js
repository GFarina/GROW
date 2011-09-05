


function OnTriggerEnter (other:Collider)
{
    if (other.gameObject.tag == "switch")
    {
    	   
       gameObject.tag = "enemy";
     
    }
} 