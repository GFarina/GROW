#pragma downcast
var allIn : boolean[]=new boolean[3];
var i = 0;

function OnTriggerEnter (other:Collider){
	// Check the Object tag and set the corresponding bool. Returns early if none
	if(other.tag=="object1") allIn[0]=true;
	else if(other.tag=="object2") allIn[1]=true;
	else if(other.tag=="object3") allIn[2]=true;
	else return;
	
	// Check array is all true
	var doIt=true;
	
	for(i=0; i<3; i++)
		if(! allIn[i]) 
			doIt=false;
	
	// Do something if we have all 3 inside
	if(doIt)
		{
			//Destroy (gameObject);
		Debug.Log("GOT ALL 3!! :)");
		}
}

function OnTriggerExit (other:Collider){
	//Check Object tags and unflag leaving objects
	if(other.tag=="object1") allIn[0]=false;
	else if(other.tag=="object2") allIn[1]=false;
	else if(other.tag=="object3") allIn[2]=false;
	Debug.Log("Need more cubes :)");
}