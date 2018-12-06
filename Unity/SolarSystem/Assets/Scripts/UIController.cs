using UnityEngine;

public class UIController : MonoBehaviour {

	public SolarSystem solarSystem;

	public void ResetWorld_Click()
	{
		solarSystem.ResetWorld();
	}

	public void GravityConst_EndEdit(string newStr)
	{
		solarSystem.gravityConstOrder = int.Parse(newStr);
	}

	public void EarthImpulse_EndEdit(string newStr)
	{
		solarSystem.startMercuryImpulse = float.Parse(newStr);
	}

    public void Impulse_EndEdit(string newStr)
    {
        solarSystem.startMercuryImpulse = int.Parse(newStr);
    }

    //////////////////////////
    public void SpeedSystem_Input(float speed)
    {

        solarSystem.TimeSpeed = speed;
    }

}
