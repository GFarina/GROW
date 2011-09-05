//var explosion : GameObject;


function OnTriggerEnter(collision : Collider) {
	
	
	if (collision.gameObject.tag == "MAGGOT")
	{
		Destroy(transform.parent.gameObject);
	}

}


