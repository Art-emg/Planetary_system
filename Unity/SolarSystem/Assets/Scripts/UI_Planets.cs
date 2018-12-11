using UnityEngine;
using UnityEngine.UI;

public class UI_Planets : MonoBehaviour {

    public SolarSystem solarSystem;

    public InputField sunMassInput, mercuryMassInput, 
        venusMassInput, earthMassInput, marsMassInput, 
        jupiterMassInput, saturnMassInput, uranusMassInput, neptuneMassInput;


    public void SetMass_Default()
    {
        solarSystem.sun.mass = 1000;
        sunMassInput.text = solarSystem.sun.mass.ToString();
        solarSystem.mercury.mass = 7;
        mercuryMassInput.text = solarSystem.mercury.mass.ToString();
        solarSystem.venus.mass = 10;
        venusMassInput.text = solarSystem.venus.mass.ToString();
        solarSystem.earth.mass = 12;
        earthMassInput.text = solarSystem.earth.mass.ToString();
        solarSystem.mars.mass = 9;
        marsMassInput.text = solarSystem.mars.mass.ToString();
        solarSystem.jupiter.mass = 25;
        jupiterMassInput.text = solarSystem.jupiter.mass.ToString();
        solarSystem.saturn.mass = 24;
        saturnMassInput.text = solarSystem.saturn.mass.ToString();
        solarSystem.uranus.mass = 15;
        uranusMassInput.text = solarSystem.uranus.mass.ToString();
        solarSystem.neptune.mass = 13;
        neptuneMassInput.text = solarSystem.neptune.mass.ToString();
    }

    public void SunMass_Input()
    {
        solarSystem.sun.mass = float.Parse(sunMassInput.text);
    }
    public void MercuryMass_Input()
    {
        solarSystem.mercury.mass = float.Parse(mercuryMassInput.text);
    }
    public void VenusMass_Input()
    {
        solarSystem.venus.mass = float.Parse(venusMassInput.text);
    }
    public void EarthMass_Input()
    {
        solarSystem.earth.mass = float.Parse(earthMassInput.text);
    }
    public void MarsMass_Input()
    {
        solarSystem.mars.mass = float.Parse(marsMassInput.text);
    }
    public void JupiterMass_Input()
    {
        solarSystem.jupiter.mass = float.Parse(jupiterMassInput.text);
    }
    public void SaturnMass_Input()
    {
        solarSystem.saturn.mass = float.Parse(saturnMassInput.text);
    }
    public void UranusMass_Input()
    {
        solarSystem.uranus.mass = float.Parse(uranusMassInput.text);
    }
    public void NeptuneMass_Input()
    {
        solarSystem.neptune.mass = float.Parse(neptuneMassInput.text);
    }





    // Use this for initialization
    void Start () {
        sunMassInput.text = solarSystem.sun.mass.ToString();
        mercuryMassInput.text = solarSystem.mercury.mass.ToString();
        venusMassInput.text = solarSystem.venus.mass.ToString();
        earthMassInput.text = solarSystem.earth.mass.ToString();
        marsMassInput.text = solarSystem.mars.mass.ToString();
        jupiterMassInput.text = solarSystem.jupiter.mass.ToString();
        saturnMassInput.text = solarSystem.saturn.mass.ToString();
        uranusMassInput.text = solarSystem.uranus.mass.ToString();
        neptuneMassInput.text = solarSystem.neptune.mass.ToString();

    }
	
	// Update is called once per frame
	void Update () {
  

    }
}
