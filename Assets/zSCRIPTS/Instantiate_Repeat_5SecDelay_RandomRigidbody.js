
var OBJECT : Rigidbody[];
var timeDelay = 5;

function Start() {
    while (true) {
        yield WaitForSeconds(timeDelay);
           var OBJECT : Rigidbody = Instantiate(OBJECT[Random.Range(0,OBJECT.Length)], transform.position, Quaternion.identity);
    }
}


  
  
   
         