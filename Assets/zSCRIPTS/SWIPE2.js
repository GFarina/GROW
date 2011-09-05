var Wind : GameObject;
var startPosX = 0;
var endPosX = 0;
var startPosZ = 0;
var endPosZ = 0;
function Update () {

for (var event : iPhoneTouch in iPhoneInput.touches){
      
      if (event.phase == iPhoneTouchPhase.Began){
         startPosX = event.position.x;
         startPosZ = event.position.y;
         //print(startPosX);
      }
      
      if (event.phase == iPhoneTouchPhase.Ended){
         endPosX = event.positionDelta.x;
         endPosZ = -event.positionDelta.y;
         
         //print(startPos + " : " + endPos);
         if(startPosX > 0){
         print ("Negitive Direction");
         rigidbody.velocity.x = -0.2;
         
         if(endPosX > 0){
         print ("Positive Direction");   
         rigidbody.velocity.x = 0.2;
         
         if(startPosZ > 0){
         print ("Positive Direction Z");   
         rigidbody.velocity.z = 0.2;
         
         if(endPosZ > 0){
         print ("Negative Direction Z");   
         rigidbody.velocity.z = 0.2;
         
         
                  }
               }
            }   
         }                        
      }
   }
} 