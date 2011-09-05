function OnGUI ()
{
   
   // two buttons on screen from left to right
   // show next/previous instructions screen or go to menu scene
   
   // go to menu scene
   if (GUI.Button (Rect (17,260,50,50), "Menu")) {
      Application.LoadLevel ("3_6");
   }   
   
   // show next instructions scene
   if (GUI.Button (Rect (413,260,50,50), "Next")) {
      Application.LoadLevel ("3_6");   
   }

} 