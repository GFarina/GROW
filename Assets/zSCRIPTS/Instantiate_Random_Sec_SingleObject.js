var evilsphere : Transform;
var minWait = 1.0;
var maxWait = 10.0;

function Start ()
{ 
    while(true)
    {
        yield WaitForSeconds(Random.Range(minWait, maxWait));
        Instantiate (evilsphere, transform.position, transform.rotation);
    }
}