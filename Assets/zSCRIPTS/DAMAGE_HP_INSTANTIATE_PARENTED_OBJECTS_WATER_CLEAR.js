var hitPoints = 4;
var dieSound : AudioClip;
var initialDelay = 0.2;
private var originalColor : Color;
var OBJECT1 : GameObject;
//var OBJECT2 : GameObject;

function ApplyDamage (damage : float) {
	
	
      
      //yield WaitForSeconds(initialDelay);
      
// originalColor = renderer.material.color;
//        renderer.material.color = Color.green;
 //       renderer.material.color.a = 0.2;
 //       yield WaitForSeconds(initialDelay);
 //       renderer.material.color = originalColor;
        
      
         yield;
// We already have less than 0 hitpoints, maybe we got killed already?
if (hitPoints <= 0.0)
return;

hitPoints -= damage;
if (hitPoints <= 0.0)
{
Detonate();
}
}

function Detonate () {
// Destroy ourselves
//Destroy(gameObject);
var parentTransform : Transform = this.transform.parent.gameObject.transform;
                 (Instantiate(OBJECT1, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 
                //(Instantiate(OBJECT2, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform; 

                   //(Instantiate(OBJECT2, transform.position, transform.rotation) as GameObject).transform.parent = parentTransform.transform;   
                

               Destroy(gameObject);
                 }
  
