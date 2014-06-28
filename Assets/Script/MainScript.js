Screen.SetResolution(400, 640, false);


var style : GUIStyle;

function OnGUI () {

	
	var scrollPosition : Vector2 = GameObject.Find("list_layer").transform.position;
	var size : Vector3 = GameObject.Find("list_layer").transform.lossyScale;
	GUI.skin.scrollView = style;
	// rect and put it in a small rect on the screen.
	scrollPosition = GUI.BeginScrollView (Rect(0, 0, size.x, size.y),
						scrollPosition, Rect (0, 0, size.x, size.y));
	    
	// Make four buttons - one in each corner. The coordinate system is defined
	// by the last parameter to BeginScrollView.
	GUI.Button (Rect (0,0,100,20), "Top-left");
	GUI.Button (Rect (120,0,100,20), "Top-right");
	GUI.Button (Rect (0,180,100,20), "Bottom-left");
	GUI.Button (Rect (120,180,100,20), "Bottom-right");
	    
	// End the scroll view that we began above.
	GUI.EndScrollView ();
}
	
function Update () {

}