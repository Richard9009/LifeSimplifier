#pragma strict

var style : GUIStyle;
var scrollPosition : Vector2 = Vector2(0, 0);

function OnGUI () {
var view_size : Vector2 = Vector2(Screen.width, Screen.height/3 - 50);
	scrollPosition = GUI.BeginScrollView (Rect (0, Screen.height * 2/3 + 50,
												view_size.x - 10,view_size.y),
											scrollPosition, Rect (0, 0, view_size.x * 4, view_size.y - 30));
	
	// Make four buttons - one in each corner. The coordinate system is defined
	// by the last parameter to BeginScrollView.
	GUI.Button (Rect (0,0,100,20), "Top-left");
	GUI.Button (Rect (1220,0,100,20), "Top-right");
	GUI.Button (Rect (0,180,1000,20), "Bottom-left");
	GUI.Button (Rect (120,180,100,20), "Bottom-right");
	
	// End the scroll view that we began above.
	GUI.EndScrollView ();
}

function Update () {

}