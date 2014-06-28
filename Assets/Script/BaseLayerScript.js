function Start()
{
	transform.localScale.x *= Screen.currentResolution.width/768;
}

function update()
{
	//Debug.Log("object is null" + (this.transform.x));
	this.transform.position.x-=0.01;
}
