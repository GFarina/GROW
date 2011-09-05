#pragma strict
var allIn : boolean[]=new boolean[3];
//var newObject1 : Transform;
var newObject1 : GameObject; 
var initialDelay = 1.0;
var i = 0;

function OnTriggerEnter (other:Collider){
	// Check the Object tag and set the corresponding bool. Returns early if none
if(other.tag=="SUNLIGHT_LOW_TRIGGER") allIn[0]=true;
	else if(other.tag=="SYSTEM") allIn[1]=true;
	//else if(other.tag=="SUNLIGHT_MED_BUTTON") allIn[2]=true;
	
	else return;
	
	// Check array is all false
	var doIt=true;
	
	for(i=0; i<2; i++)
		if(! allIn[i]) 
			doIt=false;
	
	// Do something if we have all 7 inside
	if(doIt)
		{
		
		

      //yield WaitForSeconds(initialDelay);

 
  // Instantiates prefab somewhere between -10 and 10 on the x-z plane

//var position = Vector3(Random.Range(-48, 48), Random.Range(-10, 10));
//Instantiate(newObject1, position, Quaternion.identity);

Instantiate(newObject1,Vector3(-46,0,0), Quaternion.identity);
		
		
		
		Debug.Log("GOT ALL OBJECTS");
		}}


function OnTriggerExit (other:Collider){
	//Check Object tags and unflag leaving objects
	
if(other.tag=="SUNLIGHT_LOW_TRIGGER") allIn[0]=false;
	else if(other.tag=="SYSTEM") allIn[1]=false;
	//else if(other.tag=="SUNLIGHT_MED_BUTTON") allIn[2]=false;
	else return;
	
	var doIt=false;
	
	for(i=0; i<2; i++)
		if(! allIn[i]) 
			doIt=true;
	
	// Do something if we DON'T have all 7 inside
	if(doIt)
		{
			
			
			//Destroy(this.transform.gameObject);
Destroy(GameObject.Find("WATERBORN_TEMPERATE_SPAWN_POINT(Clone)"));
			
			
			
			//Destroy (gameObject);
		Debug.Log("MISSING OBJECTS");
		}


}




