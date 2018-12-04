using UnityEngine;
using System.Collections;
using UnityEngine.UI;

[RequireComponent(typeof(Camera))]
public class DrawHighlight : MonoBehaviour {

	public Transform highlightTarget;
	public Material material;

	public Text earthText;

	public float marginSize = 0.05f;
	public float underlineSize = 0.20f;
	public int labelHeight = 20;

	private new Camera camera;

	void Start () {
		camera = GetComponent<Camera>();
	}

	void OnPostRender()
	{
		if (!material)
		{
			Debug.LogError("Please Assign a material on the inspector");
			return;
		}
		GL.PushMatrix();
		material.SetPass(0);
		GL.LoadOrtho();
		GL.Begin(GL.LINES);
		GL.Color(Color.red);

		Vector3 pos = camera.WorldToScreenPoint(highlightTarget.position);
		// ������������� ������� ������ � ��������� �����������, ������������
		// �� �������� ������ � ������ �.�. ����� ������ ��� ���������� (0;0)
		earthText.transform.localPosition = 
			new Vector3(pos.x - camera.pixelWidth/2 + marginSize * camera.pixelWidth, 
			pos.y - camera.pixelHeight/2 + marginSize* camera.pixelHeight, 0);

		pos.x /= camera.pixelWidth;
		pos.y /= camera.pixelHeight;

		GL.Vertex3(pos.x, pos.y, 0);
		GL.Vertex3(pos.x + marginSize, pos.y + marginSize, 0);
		GL.Vertex3(pos.x + marginSize, pos.y + marginSize, 0);
		GL.Vertex3(pos.x + marginSize + underlineSize, pos.y + marginSize, 0);

		GL.End();
		GL.PopMatrix();
	}
}
