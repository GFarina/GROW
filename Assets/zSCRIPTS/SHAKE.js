var kEraseAccelerationThreshold = 2.0;

function Update () {

var accel = iPhoneInput.acceleration;

   var x = accel.x;
   var y = accel.y;
   var z = accel.z;
   
  var length = Mathf.Sqrt(x * x + y * y + z * z);
   
      if (length >= kEraseAccelerationThreshold) {

         // DO STUFF HERE

      }
}    