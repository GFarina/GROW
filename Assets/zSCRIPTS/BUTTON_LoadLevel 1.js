function OnGUI ()
{
   
   // two buttons on screen from left to right
   // show next/previous instructions screen or go to menu scene
   

   // show next instructions scene
   if (GUI.Button (Rect (10,5,70,50), "REBUILD")) {
      Application.LoadLevel ("Test_14");   
   }

} 