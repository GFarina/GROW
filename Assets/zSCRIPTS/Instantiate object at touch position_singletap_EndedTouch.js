var particle : GameObject;
var hit: RaycastHit;

	function Update () {
		//for (var touch : iPhoneTouch in iPhoneInput.touches) {
			//if (touch.phase == iPhoneTouchPhase.Began) {
				
				
				
				
			//	var doubleTap : int;
  // if(Input.GetTouch(0).tapCount>=2) {
   //   if (Input.GetTouch(0).phase==TouchPhase.Began) {
    //     doubleTap++;
				
				
				
				
				
				
				
				
				  for (var event : iPhoneTouch in iPhoneInput.touches) {
				  	
				  	
				  	if(event.tapCount == 1 && event.phase == iPhoneTouchPhase.Ended)
{
      // if (iPhoneInput.touchCount == 0) {     
     //if(iPhoneInput.GetTouch(0).tapCount == 2)  {
      var ray = camera.main.ScreenPointToRay(event.position);
				
				
				
				// Construct a ray from the current touch coordinates
				//var ray = Camera.main.ScreenPointToRay (touch.position);
				if (Physics.Raycast(ray, hit)) {
					
                Instantiate(particle, hit.point, Quaternion.identity);
				}
			}
		}
	
}	
	









  //for (var evt : iPhoneTouch in iPhoneInput.touches) {
     //  if (iPhoneInput.touchCount == 1) {     
   // if(iPhoneInput.GetTouch(0).tapCount == 1)  {
        //var ray = camera.main.ScreenPointToRay(evt.position);

   