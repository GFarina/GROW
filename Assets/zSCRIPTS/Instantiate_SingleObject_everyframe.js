var OBJECT : Transform;

function Update ()
{ 

       // yield WaitForSeconds(Random.Range(minWait, maxWait));
        Instantiate (OBJECT, transform.position, transform.rotation);
    }
