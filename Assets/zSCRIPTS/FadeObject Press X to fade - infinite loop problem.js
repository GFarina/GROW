var fadeObject : boolean=false;

function Start(){
	StartCoroutine(FadeOutDestroy());
}

function Update(){
	if(Input.GetKey("x")) fadeObject=true;
}

function FadeOutDestroy() {
	var initialDelay = 3.0;
	var fadeOver = 3.0;
	var amount = 1.0;
	while(true){
		if(fadeObject){
			var startTime = Time.time;
			while(Time.time < startTime + initialDelay)
				yield;
			
			if(fadeObject){
				startTime=Time.time;
				while(amount>0.0){
					amount=Mathf.Lerp(1.0, 0.0, (Time.time - startTime)/fadeOver);
					if(!fadeObject)amount=1.0;
					var objs : Component[] = gameObject.GetComponentsInChildren(Renderer);
					for(var obj : Renderer in objs){
						obj.material.color.a=amount;
					}
					if(!fadeObject) break;
					yield;
				}
				if(fadeObject)Destroy(gameObject);
			}
		}
	}
}