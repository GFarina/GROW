  
  
var cam1 : Camera;
var cam2 : Camera;
var cam = 1;

cam2.active = false;



function OnGUI ()
{ 
  
   
  
  if (GUI.Button (Rect (220,-10,50,50), "+ -")) {
    if(cam == 1){
           cam2.active = true;
           cam1.active = false;
      cam = 2;
      return;
    }else if(cam == 2){
      cam2.active = false;
      cam1.active = true;
      
      cam = 1;
    }
  } 
}