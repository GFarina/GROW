function OnTriggerEnter (other:Collider)
{
    if (other.gameObject.tag == "FRAME")
    {
       Destroy(gameObject);
     
    }
} 