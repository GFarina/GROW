function OnGUI ()
{
   
   // two buttons on screen from left to right
   // show next/previous instructions screen or go to menu scene
   

   // show next instructions scene
   if (GUI.Button (Rect (20,150,100,50), "RANDOM LEVEL")) {
  Application.LoadLevel(Random.Range(0, Application.levelCount));
  
   }

} 