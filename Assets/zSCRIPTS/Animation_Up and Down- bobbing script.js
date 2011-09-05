var frequencyMin : float = 1.0;
var frequencyMax : float = 10.0;
var magnitude : float = 0.0025;
private var randomInterval : float;

function Start () {
	randomInterval = Random.Range(frequencyMin, frequencyMax);
}

function Update () {
	this.transform.position.y += (Mathf.Cos(Time.time * randomInterval) * magnitude);
	this.transform.eulerAngles.x += (Mathf.Cos(Time.time * randomInterval) * 2);
}