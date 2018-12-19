using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UI_SolarSystem : MonoBehaviour {


    public SolarSystem solarSystem;
    public CameraRotateAround camera;
    public Text targetName;
    public Text SpeedValue;
    public Slider slider;

    

    public InputField GravitiConstValueInput, GravityConstOrderInput;

    public void ResetWorld_Click()
    {
        solarSystem.ResetWorld();
    }

    public void SpeedSystem_Input()
    {
        solarSystem.TimeSpeed = slider.value;
        SpeedValue.text = "Скорость системы: x" + slider.value.ToString();
    }

    public void mass_Input(string mass)
    {
        
    }

    public void gravitConstVal_Input(string value)
    {
        solarSystem.gravityConstValue = float.Parse(GravitiConstValueInput.text);
    }

    public void gravitConstOrder_Input(string value)
    {
        solarSystem.gravityConstOrder = float.Parse(GravityConstOrderInput.text);
    }


    public void Time_Pause()
    {

        if (Time.timeScale != 0)
            Time.timeScale = 0;
        else Time.timeScale = slider.value;
    }


    public void Start()
    {
        targetName.text = solarSystem.EngRusName[camera.target.name];
        SpeedValue.text = "Скорость системы: x" + slider.value.ToString();

        GravitiConstValueInput.text = solarSystem.gravityConstValue.ToString();
        GravityConstOrderInput.text = solarSystem.gravityConstOrder.ToString();


    }

}
