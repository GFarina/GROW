var things : ArrayList();

function OnTriggerEnter (other:Collider){
	// store the object
	things.Add(other.gameObject);
	
	//prepare the check array
	var allIn : boolean[]=new boolean[3];
	for(var i=0 i<3; i++)allIn[i]=false;
	
	// search all objects to see if we have all 3 parts
	for(i=0 i<things.Count; i++){
		if(things[i].tag=="object1") allIn[0]=true;
		if(things[i].tag=="object2") allIn[1]=true;
		if(things[i].tag=="object3") allIn[2]=true;
	}
	
	// see if the check array is all true's
	var doIt=true;
	for(var i=0 i<3; i++)if(! allIn[i]) doIt=false;
	
	// destroy the object if we should
	if(doIt) //if(doIt && whatWeHave.Count==3) // checks if ONLY the 3 objects we have are there.
		Destroy(other.gameObject);
}

function OnTriggerExit (other:Collider){
	// remove an object that has moved out of the trigger
	if(things.IndexOf(other.gameObject)>-1)things.Remove(other.gameObject);
}