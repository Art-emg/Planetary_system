using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class SolarSystem : MonoBehaviour {

	public Rigidbody sun;

	public Rigidbody mercury;//
	public Rigidbody venus;//
    public Rigidbody earth;
    public Rigidbody mars;


    public float gravityConstOrder = -1.0f;

	public float startMercuryImpulse = 48;//
	public float startVenusImpulse = 25;
	public float startEarthImpulse = 25;
	public float startMarsImpulse = 25;

    public float TimeSpeed= 1f;//

    protected static List<CelestialBody> celestialBodies = new List<CelestialBody>();

	protected List<Vector3> defaultPositions;
	protected List<Quaternion> defaultRotations;


	void Awake()
	{
        celestialBodies = new List<CelestialBody>(FindObjectsOfType<CelestialBody>());
	}
	void Start()
	{
		SaveDefaults();
		ResetWorld();
        
	}

    public void SpeedSystem(int speed)
    {
        TimeSpeed = (float)speed;
    }

    protected void SaveDefaults()
	{
		defaultPositions = new List<Vector3>();
		defaultRotations = new List<Quaternion>();
		for (int i = 0; i < celestialBodies.Count; i++)
		{
			defaultPositions.Add(celestialBodies[i].transform.position);
			defaultRotations.Add(celestialBodies[i].transform.rotation);
		}
		
	}

	public void ResetWorld()
	{
		for (int i = 0; i < celestialBodies.Count; i++)
		{
			celestialBodies[i].transform.position = defaultPositions[i];
			celestialBodies[i].transform.rotation = defaultRotations[i];
			celestialBodies[i].Rigidbody.AddForce( -celestialBodies[i].Rigidbody.velocity, ForceMode.VelocityChange);
			celestialBodies[i].Rigidbody.AddRelativeTorque(-celestialBodies[i].Rigidbody.angularVelocity, ForceMode.VelocityChange);
		}


        mercury.AddForce(Vector3.forward * startMercuryImpulse, ForceMode.Impulse);
        mercury.AddRelativeTorque(Vector3.up * 1, ForceMode.Impulse);

        venus.AddForce(Vector3.forward * startVenusImpulse, ForceMode.Impulse);
        venus.AddRelativeTorque(Vector3.up * 1, ForceMode.Impulse);

        earth.AddForce(Vector3.forward * startEarthImpulse, ForceMode.Impulse);
        earth.AddRelativeTorque(Vector3.up * 1, ForceMode.Impulse);

        mars.AddForce(Vector3.forward * startMarsImpulse, ForceMode.Impulse);
        mars.AddRelativeTorque(Vector3.up * 1, ForceMode.Impulse);

        /**
		ForceMode.Force == Force per second  
		ForceMode.Impulse == Force per frame
		*/
        //earth.AddForce(Vector3.forward * 1000, ForceMode.Force);
    }

    void FixedUpdate () {

        Time.timeScale = TimeSpeed;

        sun.transform.position = Vector3.zero;


		float gravityConst = 6.67f * Mathf.Pow(10.0f, gravityConstOrder);
       
		for (int i = 0; i < celestialBodies.Count; i++)
		{
			Rigidbody first = celestialBodies[i].Rigidbody;
			for (int j = i+1; j < celestialBodies.Count; j++)
			{
				Rigidbody second = celestialBodies[j].Rigidbody;

				Vector3 direction = first.transform.position - second.transform.position;
				float dist = direction.sqrMagnitude;
				direction.Normalize();
				float scalarForce = first.mass * second.mass * gravityConst / dist;
				first.AddForce(direction * -1 * scalarForce, ForceMode.Force);
				second.AddForce(direction * scalarForce, ForceMode.Force);
			}
		}
	
	}
}
