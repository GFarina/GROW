var explosion : GameObject;


function OnTriggerEnter(collision : Collider) {
	
	
	if (collision.gameObject.tag == "Cloud")
	{
		Destroy (collision.gameObject);
	}

}