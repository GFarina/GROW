var OBJECT1 : GameObject;
var allIn : boolean[]=new boolean[3];
var i = 0;



function OnTriggerStay (other:Collider){
	// Check the Object tag and set the corresponding bool. Returns early if none
 if(other.collider.gameObject.tag == "SOIL") allIn[0]=true;
	else  if(other.collider.gameObject.tag == "NUTRIENTS") allIn[1]=true;
   else  if(other.collider.gameObject.tag == "AIR") allIn[2]=true;


	
	//else if(other.tag=="SUNLIGHT_MED_BUTTON") allIn[2]=true;
	
	else return;
	
	// Check array is all false
	var doIt=true;
	
	for(i=0; i<3; i++)
		if(! allIn[i]) 
			doIt=false;
	
	// Do something if we have all 7 inside
	if(doIt)
		{
		
		
var parentTransform : Transform = this.transform.parent.gameObject.transform;
                 (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
         Destroy(gameObject);     
rigidbody.isKinematic = true;


    


		
		
		Debug.Log("GROWTH NEEDS MET");
		}
}

function OnTriggerExit (other:Collider){
	//Check Object tags and unflag leaving objects
	
 if(other.collider.gameObject.tag == "SOIL") allIn[0]=false;
	else  if(other.collider.gameObject.tag == "NUTRIENTS") allIn[1]=false;
	else  if(other.collider.gameObject.tag == "AIR") allIn[2]=false;
	//else if(other.tag=="SUNLIGHT_MED_BUTTON") allIn[2]=false;
	else return;
	
	var doIt=false;
	
	for(i=0; i<3; i++)
		if(! allIn[i]) 
			doIt=true;
	
	// Do something if we DON'T have all 7 inside
	if(doIt)
		{
		
	
		
   
   
   
   
   
			Debug.Log("NEEDS NOT MET");
      }}     
    
		

	
	
	