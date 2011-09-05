var hit : RaycastHit;
var hitNum = 0;
var firstObjHit : GameObject;
var secondObjHit : GameObject;
var myTransform : Transform;



function Awake() {
   myTransform = transform; // this objects transform
}

function Update () {
   for (var evt : iPhoneTouch in iPhoneInput.touches) {
      if (evt.phase == iPhoneTouchPhase.Began) {
         var ray = camera.main.ScreenPointToRay(evt.position);
         if (Physics.Raycast(ray, hit, 10) ) {
   
            var hitObject : GameObject = hit.transform.gameObject;
              var hitTransform : Transform = hitObject.transform;
              switch(hitNum)  {
               case 0:
                  ++hitNum;
                  firstObjHit = hit.transform.gameObject;         
                  break;

               case 1:
                  secondObjHit = hit.transform.gameObject; 
           
               
                      //trigger event
                  Destroy( firstObjHit);
                   Destroy( secondObjHit);
                  }
                  hitNum = 0;
                  break;
            } }}}
           
     
            