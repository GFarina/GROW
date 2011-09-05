var newObject: GameObject;

function Start() {
   while (true) {
      yield WaitForSeconds(5);
      Instantiate(newObject, transform.position, transform.rotation);
   
   }
} 