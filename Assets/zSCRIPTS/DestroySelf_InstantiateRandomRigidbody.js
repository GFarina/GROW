
var projectile : Rigidbody[];

function Update() {

  // Destroy ourselves
Destroy(gameObject);
      


    if(projectile){   
    var projectile : Rigidbody = Instantiate(projectile[Random.Range(0,projectile.Length)], transform.position, transform.rotation);
   }
} 
  
  
   
         