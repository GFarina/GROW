var OBJECT1 : GameObject;




    
	yield WaitForSeconds(15);   

Detonate();



function Detonate () {
// Destroy ourselves
//Destroy(gameObject);

                 Instantiate(OBJECT1, transform.position, transform.rotation); 
                
                   //(Instantiate(OBJECT2, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform;   
                

                Destroy(gameObject);
}  
