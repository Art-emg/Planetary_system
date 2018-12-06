using UnityEngine;
using System.Collections;
using System.Collections.Generic;

[RequireComponent(typeof(Rigidbody))]
public class CelestialBody : MonoBehaviour {

	private new Rigidbody rigidbody;

	public Rigidbody Rigidbody
	{
		get
		{
			return rigidbody;
		}
	}

	void Awake()
	{
		rigidbody = GetComponent<Rigidbody>();
	}

	void FixedUpdate () {
        
	}
}
