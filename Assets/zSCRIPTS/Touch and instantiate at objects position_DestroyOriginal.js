var test : GameObject;
private var dothis : boolean =  true;


function FixedUpdate (){
   if ((dothis) && (iPhoneInput.touchCount > 2))
   
   
   
   {
      Instantiate(test, transform.position, Quaternion.identity);
				    Debug.Log("Position" + transform.position);
      dothis = false;
      
 
     Destroy(gameObject);
      
   }
}
    
    
    
   