var rotateSpeed : float = 5.0;

function Update () {
	transform.Rotate (rotateSpeed * Time.deltaTime, 0, 0);
}