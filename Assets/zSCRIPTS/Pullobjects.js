var ball : GameObject;
var pullForce : float = 1;

function FixedUpdate () {
	var netPullForce = (transform.localScale.x * pullForce) * (1 / Vector3.Distance(ball.transform.position, transform.position));
	var targetDir = (transform.position - ball.transform.position).normalized;
	ball.rigidbody.AddForce(targetDir * netPullForce, ForceMode.Acceleration);
	print(netPullForce);
}