using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Control : MonoBehaviour {

    public GameObject ui_solar, ui_planets, ui_camera, ui_quit;


	// Update is called once per frame
	void FixedUpdate () {

        if (Input.GetKeyDown(KeyCode.Q))
        {
            if (ui_planets.gameObject.activeSelf && ui_solar.gameObject.activeSelf && ui_camera.gameObject.activeSelf)
            {
                ui_planets.gameObject.SetActive(false);
                ui_solar.gameObject.SetActive(false);
                ui_camera.gameObject.SetActive(false);
            }
            else
            {
                ui_planets.gameObject.SetActive(true);
                ui_solar.gameObject.SetActive(true);
                ui_camera.gameObject.SetActive(true);
            }
        }

        if (Input.GetKeyDown("escape"))
        {
            if(!ui_quit.gameObject.activeSelf)
                ui_quit.gameObject.SetActive(true);
            else 
                ui_quit.gameObject.SetActive(false);
        }


    }

    public void Exit()
    {
        Application.Quit();
    }

    public void NotExit()
    {
        ui_quit.gameObject.SetActive(false);
    }
}
