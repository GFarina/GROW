var target : Transform;
var vel_vec : Vector3;
var speed : float;
var distance_byte : float;
//var player_life : Player_life_script;

function Update()
{
vel_vec = target.position - transform.position; // creates the vector from the enemy to you.
transform.LookAt(target); // enemy looks to you
transform.Translate(Vector3.forward * speed * Time.deltaTime); // enemy walks to you
if (vel_vec.magnitude <= distance_byte) //if is near
{
animation.Play("byte", PlayMode.StopAll);
//player_life.hp -= 1;
vel_vec = Vector3.zero;
}
else if (vel_vec.magnitude > distance_byte + 5) // if is far
animation.Play("walk", PlayMode.StopAll);
}