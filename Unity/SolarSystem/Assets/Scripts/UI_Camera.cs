using UnityEngine;
using UnityEngine.UI;

public class UI_Camera : MonoBehaviour {

    public CameraRotateAround camera;
    public Slider zoomSlider;
    public Slider volumeSlider;
    public Text zoomValue;
    public Text volumeValue;


    // Use this for initialization
    void Start () {
        zoomSlider.value = camera.offset.z;
        zoomValue.text = zoomSlider.value.ToString();
        volumeValue.text = Mathf.Round(AudioListener.volume * 100).ToString();
    }


    public void ZoomSlider_Input()
    {
        zoomValue.text = zoomSlider.value.ToString();

        camera.offset.z = -zoomSlider.value;
    }

    public void ValueSlider_Input()
    {
        AudioListener.volume = volumeSlider.value;
        volumeValue.text = Mathf.Round(AudioListener.volume * 100).ToString();
    }



}
