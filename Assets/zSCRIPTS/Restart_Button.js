function OnGUI ()
{
   
   // two buttons on screen from left to right
   // show next/previous instructions screen or go to menu scene
   

   // show next instructions scene
   if (GUI.Button (Rect (15,5,50,50), "MENU")) {
      Application.LoadLevel ("MENU");   
   }

} 