using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UI_SolarSystem : MonoBehaviour {


    public SolarSystem solarSystem;
    public CameraRotateAround camera;
    public Text targetName;
    public InputField mp;
    public Text SpeedValue;

    public Slider slider;


    public void ResetWorld_Click()
    {
        solarSystem.ResetWorld();
    }

    public void SpeedSystem_Input()
    {
        solarSystem.TimeSpeed = slider.value;
        SpeedValue.text = "x" + slider.value.ToString();
    }

    public void mass_Input(string mass)
    {
        
    }

    public void Time_Pause()
    {

        if (Time.timeScale != 0)
            Time.timeScale = 0;
        else Time.timeScale = slider.value;
    }

    public void Start()
    {
        SpeedValue.text = "x"+slider.value.ToString();
    }

	void FixedUpdate () {
        targetName.text = camera.target.name;
	}
}
