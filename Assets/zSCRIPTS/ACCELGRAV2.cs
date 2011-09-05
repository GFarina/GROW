using UnityEngine;
using System.Collections;

public class ACCELGRAV2 : MonoBehaviour {

public float force = 9.8f;

	void FixedUpdate ()
	{
		Vector3 dir = new Vector3(Input.acceleration.x, 0.0F, Input.acceleration.y);
		Physics.gravity = dir * force;
	}}