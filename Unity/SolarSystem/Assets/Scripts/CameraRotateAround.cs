using UnityEngine;
using UnityEngine.UI;

public class CameraRotateAround : MonoBehaviour {

    public Transform target;
    public SolarSystem solarSystem;
	public Vector3 offset;
	public float sensitivity = 3; // чувствительность мышки
	public float limit = 80;     // ограничение вращения по Y
	public float zoom = 0.25f;  // чувствительность при увеличении, колесиком мышки
	public float zoomMax = 10; // макс. увеличение
	public float zoomMin = 3; // мин. увеличение
	private float X, Y;

    public Text camTargetName;
    Camera camera;
    public Slider sliderZoom;

    public Texture2D cursorTexture;
    public CursorMode cursorMode = CursorMode.Auto;
    public Vector2 hotSpot = Vector2.zero;
 

    void Start () 
	{
        camera = gameObject.GetComponent<Camera>();

        limit = Mathf.Abs(limit);
		if(limit > 90) limit = 90;
		offset = new Vector3(offset.x, offset.y, -Mathf.Abs((zoomMax/4)));
		transform.position = target.position + offset;
	}

	void Update ()
	{

      
            if (Input.GetAxis("Mouse ScrollWheel") > 0)
                offset.z += zoom;
            else if (Input.GetAxis("Mouse ScrollWheel") < 0)
                offset.z -= zoom;
              
            offset.z = Mathf.Clamp(offset.z, -Mathf.Abs(zoomMax), -Mathf.Abs(zoomMin));
            sliderZoom.value = -offset.z; 

        if (Input.GetMouseButton(1))
        {
            Cursor.SetCursor(cursorTexture, hotSpot, cursorMode);

            X = transform.localEulerAngles.y + Input.GetAxis("Mouse X") * sensitivity;
            Y += Input.GetAxis("Mouse Y") * sensitivity;
            Y = Mathf.Clamp(Y, -limit, limit);
        }
            transform.localEulerAngles = new Vector3(-Y, X, 0);
            transform.position = transform.localRotation * offset + target.position;

        if (Input.GetMouseButtonUp(1))
        {
            Cursor.SetCursor(null, Vector2.zero, cursorMode);
        }

        if (Input.GetMouseButton(0))
        {
            RaycastHit hit;
            Ray ray = camera.ScreenPointToRay(Input.mousePosition);

            if (Physics.Raycast(ray, out hit))
            {
                target = hit.transform;
                camTargetName.text = solarSystem.EngRusName[target.name];

            }
        }
    }
}
