 var speed = 0.5;

function Update () {
    transform.position = Vector3.Lerp(
        transform.position,
        transform.position + Vector3((Random.value-0.5)*speed,0,(Random.value-0.5)*speed),
        Time.time
    );
}
