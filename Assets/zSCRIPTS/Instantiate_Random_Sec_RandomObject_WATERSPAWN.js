



var OBJECT : Rigidbody[];
var minWait = 1.0;
var maxWait = 10.0;


 function Start ()
{




 
	

 while(true)
   {
       yield WaitForSeconds(Random.Range(minWait, maxWait));

	  
        var OBJECT : Rigidbody = Instantiate(OBJECT[Random.Range(0,OBJECT.Length)], transform.position, Quaternion.identity);
 
           }
}




