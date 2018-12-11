using UnityEngine;
using UnityEngine.UI;

public class UI_Camera : MonoBehaviour {

    public CameraRotateAround camera;
    public Slider zoomSlider;
    public Text zoomValue;
    public Text zoomValueRealTime;


    // Use this for initialization
    void Start () {
        zoomSlider.value = camera.offset.z;
        zoomValue.text = zoomSlider.value.ToString();

    }
	

    public void ZoomSlider_Input ()
    {
        zoomValue.text = zoomSlider.value.ToString();

        camera.offset.z = -zoomSlider.value;
    }


	// Update is called once per frame
	void Update () {
        //zoomValueRealTime.text = camera.offset.z.ToString();

    }
}
