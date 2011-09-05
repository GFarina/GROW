var initialDelay = 1.0;
var fadeSpeed = 1.0;



      renderer.material.color.a = 1.0;
      yield WaitForSeconds(initialDelay);
      
      var t = 1;
      while (t > 1.0) {
         t -= fadeSpeed * Time.deltaTime;
         renderer.material.color.a = t;
   
         //yield;
      }
   

  
  //Destroy(transform.parent.gameObject);


 
