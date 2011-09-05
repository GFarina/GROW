
var word = "ENTER TITLE HERE";

var letterPause = 0.2;
var sound : AudioClip;

function Start () {
    guiText.text = "";
    TypeText ();
}

function TypeText () {
    for (var i = 0; i < word.Length; i++) {
        guiText.text += word[i];
        if (sound)
            audio.PlayOneShot (sound);
        yield WaitForSeconds (letterPause);
    }      
}


