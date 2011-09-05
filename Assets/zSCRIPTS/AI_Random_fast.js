public var waiting : boolean = false;
var randomPosition : Vector3;
var moveDelay : float = 1;
function FixedUpdate () 
{
	
	if (waiting == false)
	{
		SendMessage("LerpCube");
	}
		else
		{
		transform.position = Vector3.Lerp (transform.position, randomPosition, Time.deltaTime*1);
		}
}


function LerpCube()
{
	randomPosition = Vector3 (Random.Range( 6,-6 ), Random.Range( 4, -4 ));
	waiting = true;
	yield WaitForSeconds (moveDelay);
	waiting = false;
	//Debug.Log ("waited");
}