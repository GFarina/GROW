using UnityEngine;
using System.Collections;

public class ACCELGRAV : MonoBehaviour {

public float force = 9.8f;

	void FixedUpdate ()
	{
		Vector3 dir = new Vector3(-Input.acceleration.y, 0.0F, Input.acceleration.x);
		Physics.gravity = dir * force;
	}}