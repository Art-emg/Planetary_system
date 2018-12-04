using UnityEngine;
using System.Collections;
using System.Collections.Generic;

[RequireComponent(typeof(Camera))]
public class DrawPath : MonoBehaviour {

	public Transform target;
	public Material material;
	public int trailLength = 5000;

	private new Camera camera;

	private List<Vector3> vertices = new List<Vector3>();

	void Start () {
		camera = GetComponent<Camera>();
	}
	
	void Update () {
		vertices.Add(target.position);
		if (vertices.Count > trailLength)
			vertices.RemoveAt(0);
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
		for (int i = 1; i < vertices.Count; i++)
		{
			Vector3 pos = camera.WorldToScreenPoint(vertices[i - 1]);
			pos.x /= camera.pixelWidth;
			pos.y /= camera.pixelHeight;

			GL.Vertex3(pos.x, pos.y, 0);
			pos = camera.WorldToScreenPoint(vertices[i]);
			pos.x /= camera.pixelWidth;
			pos.y /= camera.pixelHeight;
			GL.Vertex3(pos.x, pos.y, 0);
		}
		GL.End();
		GL.PopMatrix();
	}

}
