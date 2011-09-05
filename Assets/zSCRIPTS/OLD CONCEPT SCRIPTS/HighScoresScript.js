var customSkin : GUISkin;
private var Score = 0;
private var highScores = new Array();
private var levelName = "";
private var showScores = false;

function Awake () {
    DontDestroyOnLoad (this);
}

function GetHighScores (newLevelName : String) {
   levelName = newLevelName;
   //makes sure the array is empty
   highScores.Clear();
   //tells us when to stop entering high scores
   var currentlyLoading = 1;
   //is used to read multiple scores under names ending with a number
   var currentlyLoadingString = "";
   //the code in the while statement repeats 5 times, once to enter each of the 5 highest scores for the level into the highScores array
   while (currentlyLoading <= 5) {
      //converts the current count to a string consisting of that number to be used in saving our high scores
      currentlyLoadingString = currentlyLoading.ToString();
      //reads a previous high score saved under the current levels name followed by a number, if non exists a 0 will be entered
      highScores.Add(PlayerPrefs.GetInt(levelName + currentlyLoadingString, 0));
      //this limits how long the while loop continues and is converted to a string to give the five highest scores in playerprefs unique names to be called with
         currentlyLoading++;
   }
}

function SetHighScores (newScore : int) {
   //adds new score to the array of high scores
   highScores.Add(newScore);
   //puts the scores in order lowest to highest
   highScores.Sort();
   //removes the lowest score
   highScores.RemoveAt(0);
   //puts the remaining scores highest to lowest so they are ready to be displayed
   highScores.Reverse();
   //these are used to put a number in the naming of the 5 high scores so they are saved in different places
   var currentlySetting = 1;
   var currentlySettingString = "";
   for (var entry in highScores) {
      currentlySettingString = currentlySetting.ToString();
      //save the entry (one of the high scores) into playerprefs using the name of the level followed by a number as the name to call it back using
      PlayerPrefs.SetInt(levelName + currentlySettingString, entry);
      currentlySetting++;
   }
}

function OnGUI () {
   if (showScores == true) {
      GUI.skin = customSkin;
      //makes a window, all the code for the stuff inside the window is in the HighScoresWindow function
      GUI.Window (0, Rect (Screen.width / 2 - 150, Screen.height / 2 - 200,300,250), HighScoresWindow, "Highscores");
   }
}

function HighScoresWindow () {
   GUILayout.BeginArea(Rect(10, 30, 280, 210));
   if (GUILayout.Button("<----")) {
               showScores = false;
      Application.LoadLevel ("Menu");
   }
   for (var entry in highScores) {
      GUILayout.Label(entry.ToString());
   }
   GUILayout.EndArea();
}