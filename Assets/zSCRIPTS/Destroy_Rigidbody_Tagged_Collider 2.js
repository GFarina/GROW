function OnTriggerStay (other:Collider)
{
    if (other.gameObject.tag == "GRASS")
    {
       Destroy(gameObject);
     
    }
} 