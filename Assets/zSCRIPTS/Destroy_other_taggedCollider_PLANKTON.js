var particle : GameObject;


function OnTriggerEnter(collision : Collider) {
	
	
	if (collision.gameObject.tag == "PHYTOPLANKTON")
	{
			Destroy (collision.gameObject);	}

}
