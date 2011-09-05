var allIn : boolean[]=new boolean[6];
var i = 0;
function OnTriggerEnter (other:Collider){
	// Check the Object tag and set the corresponding bool. Returns early if none
	if(other.tag=="WATER_LEVEL_HIGH_BUTTON") allIn[0]=true;
	else if(other.tag=="TEMP_MED_BUTTON") allIn[1]=true;
	else if(other.tag=="SUNLIGHT_MED_BUTTON") allIn[2]=true;
	else if(other.tag=="SALINITY_MED_BUTTON") allIn[3]=true;
	else if(other.tag=="NUTRIENTS_MED_BUTTON") allIn[4]=true;
	else if(other.tag=="HUMIDITY_MED_BUTTON") allIn[5]=true;
	else if(other.tag=="CURRENT_MED_BUTTON") allIn[6]=true;
		
	
	// Check array is all true
	var doIt=true;
	
	for(i=0; i<1; i++)
		if(! allIn[i]) 
			doIt=true;
	
	// Do something if we have all 3 inside
	if(doIt)
		{
			//Destroy (gameObject);
		Debug.Log("GOT ALL 7");
		}
}

function OnTriggerExit (other:Collider){
	//Check Object tags and unflag leaving objects
	if(other.tag=="WATER_LEVEL_HIGH_BUTTON") allIn[0]=false;
	else if(other.tag=="TEMP_MED_BUTTON") allIn[1]=false;
	else if(other.tag=="SUNLIGHT_MED_BUTTON") allIn[2]=false;
	else if(other.tag=="SALINITY_MED_BUTTON") allIn[3]=false;
	else if(other.tag=="NUTRIENTS_MED_BUTTON") allIn[4]=false;
	else if(other.tag=="HUMIDITY_MED_BUTTON") allIn[5]=false;
	else if(other.tag=="CURRENT_MED_BUTTON") allIn[6]=false;
	
	else return;
		// Check array is all true
	var doIt2=true;
	
	for(i=0; i<0; i++)
		if(! allIn[i]) 
			doIt2=true;
	
	// Do something if we have all 3 inside
	if(doIt2)
		{
	
	
	
	Debug.Log("Need more cubes :)");
}}