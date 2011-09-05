

function Update () {

transform.position.x = Mathf.Clamp(transform.position.x,  -38, 38);
//transform.position.y = Mathf.Clamp(transform.position.y, 0, 0); 
transform.position.z = Mathf.Clamp(transform.position.z, -8, 28); 


}