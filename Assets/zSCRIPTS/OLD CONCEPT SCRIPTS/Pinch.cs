using UnityEngine;
using System.Collections;

public class Pinch : MonoBehaviour {




   // Use this for initialization
   void Start () {
   
   }
   
   // Update is called once per frame
   void Update () {
      
iPhoneTouch touch = iPhoneInput.GetTouch(0);
iPhoneTouch touch2 = iPhoneInput.GetTouch(1);

// Find out how the touches have moved relative to eachother:
Vector2 curDist = touch.position - touch2.position;
Vector2 prevDist = (touch.position - touch.positionDelta) - (touch2.position - touch2.positionDelta);

float delta = curDist.magnitude - prevDist.magnitude;

Debug.Log(delta);

Camera.main.transform.Translate(0, 0, delta);

   
   }
} 