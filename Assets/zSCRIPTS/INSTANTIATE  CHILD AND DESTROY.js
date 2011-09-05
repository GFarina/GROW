var OBJECT : GameObject;
var minWait = 2.0;
var maxWait = 10.0;






   // yield WaitForSeconds(Random.Range(minWait, maxWait));

      (Instantiate(OBJECT, transform.position, transform.rotation) as GameObject).transform.parent = gameObject.transform;
   
         //Instantiate (OBJECT, transform.position, Quaternion.identity);     
       



    