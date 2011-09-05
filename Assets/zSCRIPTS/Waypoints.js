var waypoint : Transform[];

var speed : float = 20;

private var currentWaypoint : int;

var loop : boolean = false;

var Distance : float = 1;

function Awake(){

waypoint[0] = transform; //first waypoint is his starting position

} function Update () {

if(currentWaypoint < waypoint.length)
{
var target : Vector3 = waypoint[currentWaypoint].position;
var moveDirection : Vector3 = target - transform.position;

var velocity = rigidbody.velocity;
if(moveDirection.magnitude < Distance)
    {
        currentWaypoint++;
    }

else{
    velocity = moveDirection.normalized * speed;
}
}

else{
    if(loop)
        {
            currentWaypoint = 0;
        }
        else 
        {
            velocity = Vector3.zero;
        }
}
rigidbody.velocity = velocity;

}