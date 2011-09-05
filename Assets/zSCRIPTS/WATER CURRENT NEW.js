#pragma downcast
var vScale=0.025;
var speed1=0.007;
var speed2=0.001;

var size = Vector3.zero;
private var doUpdate=false;


function Start () {


	this.gameObject.name="Water";
	//this.tag="Water";
	this.collider.isTrigger=true;
	
	// figure out what size the box is
	size=this.transform.localScale;
	size.x=Mathf.Abs(size.x);
	size.y=Mathf.Abs(size.y);
	size.z=Mathf.Abs(size.z);
	if(size.x<5.0 || size.z<5.0)
		return;
	
	// figure out how many verts and triangles we need
	var hCount=parseInt(size.x/2);
	var vCount=parseInt(size.z/2);
	var hCount2=hCount+1;
	var vCount2=vCount+1;
	var numTriangles = hCount * vCount * 6;
	var numVertices = hCount2 * vCount2;
	if(numVertices>64999){
		print("Your water has too many vertices("+numVertices+" of 65000), make it smaller");
		return;
	}
	doUpdate=true;
	
	var newVertices : Vector3[]= new Vector3[numVertices];
	var newUV : Vector2[]=new Vector2[numVertices];
	var newTangents : Vector4[]=new Vector4[numVertices];
	var newTriangles : int[]=new int[numTriangles];
	
	var index=0;
	var scale : float=(size.x + size.z)/5;
	var uvx : float=1.0/hCount * scale;
	var uvy : float=1.0/vCount * scale;
	var scalex : float=1.0/hCount;
	var scaley : float=1.0/vCount;
	var x=0.0;
	var y=0.0;
	
	// make the verts
	for(y=0; y<vCount2; y++){
		for(x=0; x<hCount2; x++){
			newVertices[index]=Vector3(-0.5+x*scalex, 0.5,-0.5+y*scaley);
			newUV[index] = Vector2(x*uvx, y*uvy);
			newTangents[index++]=Vector4(0,1,0,1);
		}
	}
	
	// make the faces
	index=0;
	for(y=0; y<vCount; y++){
		for(x=0; x<hCount; x++){
			newTriangles[index]   = (y     * hCount2) + x;
			newTriangles[index+1] = ((y+1) * hCount2) + x;
			newTriangles[index+2] = (y     * hCount2) + x + 1;
			newTriangles[index+3] = ((y+1) * hCount2) + x;
			newTriangles[index+4] = ((y+1) * hCount2) + x + 1;
			newTriangles[index+5] = (y     * hCount2) + x + 1;
			index += 6;
		}
	}
	
	// Clear the box, and replace it with the mesh
	var mesh : Mesh = new Mesh ();
	
	//if((GetComponent(MeshFilter) as MeshFilter).mesh == null)
    //(GetComponent(MeshFilter) as MeshFilter).mesh = new Mesh(); 


	(GetComponent(MeshFilter) as MeshFilter).mesh = mesh;

	//GetComponent(MeshFilter).mesh = mesh;
	mesh.Clear();
	mesh.vertices = newVertices;
	mesh.uv = newUV;
	mesh.triangles = newTriangles;
	mesh.tangents= newTangents;
}

function Update () {
	if(! doUpdate)
		return;
		var mesh : Mesh = (GetComponent(MeshFilter) as MeshFilter).mesh;
	//var mesh : Mesh = GetComponent(MeshFilter).mesh;

	var vertices = mesh.vertices;
	var scale : float=(size.x + size.z)/2;
	var offset : float=0.0;
	for (var i=0; i<vertices.Length; i++)
	{
		offset=0.0;
		//calculate waveform 1
		offset +=Mathf.Sin(((Time.time*speed1 + (vertices[i].x + vertices[i].z)*0.5) % (3.14/2)) * scale);
		//calculate waveform2
		offset += Mathf.Sin((Time.time*speed2 + (vertices[i].z)) * scale);
		vertices[i].y = 0.5 + offset * vScale;
		//vertices[i].y += Random.Range(-0.01, 0.01);
	}
	mesh.vertices = vertices;
	mesh.RecalculateNormals();
} 

// do stuff when we are in the water
function OnTriggerEnter(other : Collider) {
	//print(other.gameObject.name + " has entered the water!");
}

function OnTriggerExit(other : Collider) {
	//print(other.gameObject.name + " has exited the water!");
}