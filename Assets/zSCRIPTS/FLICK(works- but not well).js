#pragma strict

var touchStart : Vector2;
var touchEnd : Vector2;
var flickTime = 5;
var flickLength = 0;
var ballVelocity : float;
var ballSpeed = 0;
var worldAngle : Vector3;
var ballPrefab : GameObject;
private var GetVelocity = false;
var whoosh : GameObject[];
var comfortZone : float;
var couldbeswipe : boolean;
var startCountdownLength : float = 0.0f;
var startTheTimer : boolean = false;
static var globalGameStart : boolean = false;
static var shootEnable : boolean = false;
private var startGameTimer : float = 0.0f;

function Start () {
	startTheTimer = true;
	Time.timeScale = 1;
		if ( Application.isEditor )
		Time.fixedDeltaTime = 0.01;
	}
		    	
function Update () {
	if (startTheTimer) {
		startGameTimer += Time.deltaTime;
	}
	if (startGameTimer > startCountdownLength){
		globalGameStart = true;
		shootEnable = true;
		startTheTimer = false;
		startGameTimer = 0;
	}	
	
	if (shootEnable) {
		Debug.Log ("enabled!");
		if (Input.touchCount > 0) {
			var touch = Input.touches[0];
       		switch (touch.phase) {
       			case TouchPhase.Began:
       				flickTime = 5;
       				timeIncrease();
       				couldbeswipe = true;
        			GetVelocity = true;
        			touchStart= touch.position;
        			break;
       			case TouchPhase.Moved:
        			if (Mathf.Abs(touch.position.y - touchStart.y) < comfortZone) {
        				couldbeswipe = false;
        			}
        			else {
        				couldbeswipe = true;
        			}
        		case TouchPhase.Stationary:
        			if (Mathf.Abs(touch.position.y - touchStart.y) < comfortZone) {
        				couldbeswipe = false;
        			}
        			break;
        		case TouchPhase.Ended:
        			var swipeDist = (touch.position - touchStart).magnitude;
        			if (couldbeswipe && swipeDist > comfortZone) {
						GetVelocity = false;
						touchEnd = touch.position;
						var ball = Instantiate(ballPrefab, Vector3(0,2.6,-11), Quaternion.identity) as GameObject;
						GetSpeed();
						GetAngle();
        				ball.rigidbody.AddForce(Vector3((worldAngle.x * ballSpeed), (worldAngle.y * ballSpeed), (worldAngle.z * ballSpeed)));
        				PlayWhoosh();
        				
        			}
        		}
        		if (GetVelocity) {
         			flickTime++;
        		}
		}
	}
	if (!shootEnable){
		Debug.Log("shot disabled!");
	}
}

function timeIncrease() {
	if (GetVelocity) {
		flickTime++;
	}
}

function GetSpeed() {
	flickLength = 90;
    if (flickTime > 0) {
        ballVelocity = flickLength / (flickLength - flickTime);
        }
    ballSpeed = ballVelocity * 30;
    ballSpeed = ballSpeed - (ballSpeed * 1.65);
    if (ballSpeed <= -33){
    	ballSpeed = -33;
    }
    Debug.Log("flick was" + flickTime);
    flickTime = 5;
}

function GetAngle () {
    worldAngle = camera.ScreenToWorldPoint(Vector3 (touchEnd.x, touchEnd.y + 800, ((camera.nearClipPlane - 100)*1.8)));
}

function PlayWhoosh(){
  var sound = Instantiate(whoosh[Random.Range(0,whoosh.length)],transform.position,transform.rotation) as GameObject;
  Debug.Log("Whoosh!");
}