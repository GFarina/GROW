
function OnTriggerEnter (other : Collider)
{

if(other.collider.gameObject.tag == "FRAME")  {	

    (GameObject.Find("WATERSPAWN").GetComponent("Instantiate_Random_Sec_RandomObject_WATERSPAWN")as Behaviour ).enabled = false;

               Debug.Log(" Disable ");
}
}

 

function OnTriggerExit ( other : Collider)

{

if(other.collider.gameObject.tag == "FRAME")  {	
	
  (GameObject.Find("WATERSPAWN").GetComponent("Instantiate_Random_Sec_RandomObject_WATERSPAWN")as Behaviour ).enabled = true;
               Debug.Log(" Disable ");	
	

}
}



