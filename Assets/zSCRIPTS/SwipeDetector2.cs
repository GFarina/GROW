using UnityEngine;
using System.Collections;



public class SwipeDetector2 : MonoBehaviour {

	// Values to set:
	public float comfortZone = 70.0f;
	public float minSwipeDist = 14.0f;
	public float maxSwipeTime = 0.5f;
    public GameObject explosionPrefab;	
	private float startTime;
	private Vector2 startPos;
	private bool couldBeSwipe;
	
	public enum SwipeDirection {
		None,
		Up,
		Down
	}
	
	public SwipeDirection lastSwipe = SwipeDetector2.SwipeDirection.None;
	public float lastSwipeTime;
	
	void  Update() 
	{
		
		//if (Input.touchCount >1)
			if ( iPhoneInput.touchCount == 2 )
	{
		      
			
		
			
			Touch touch = Input.touches[1];
			
		
			switch (touch.phase) 
			{
				case TouchPhase.Began:
					lastSwipe = SwipeDetector2.SwipeDirection.None;
                                        lastSwipeTime = 0;
					couldBeSwipe = true;
					startPos = touch.position;
					startTime = Time.time;
					break;
				
				case TouchPhase.Moved:
					if (Mathf.Abs(touch.position.y - startPos.y) > comfortZone) 
					{
						Debug.Log("Not a swipe. Swipe strayed " + (int)Mathf.Abs(touch.position.y - startPos.y) + 
					              "px which is " + (int)(Mathf.Abs(touch.position.y - startPos.y) - comfortZone) + 
					              "px outside the comfort zone.");
						couldBeSwipe = false;
					}
					break;
				case TouchPhase.Ended:
					if (couldBeSwipe)
					{
						float swipeTime = Time.time - startTime;
						float swipeDist = (new Vector3(touch.position.x, 0, 0) - new Vector3(startPos.x, 0, 0)).magnitude;
					
						if ((swipeTime < maxSwipeTime) && (swipeDist > minSwipeDist)) 
						{
							// It's a swiiiiiiiiiiiipe!
							float swipeValue = Mathf.Sign(touch.position.x - startPos.x);
						
							// If the swipe direction is positive, it was an upward swipe.
							// If the swipe direction is negative, it was a downward swipe.
							
							
							//if (swipeValue > 0)
							//	lastSwipe = SwipeDetector.SwipeDirection.Up;
							//else if (swipeValue < 0)
							//	lastSwipe = SwipeDetector.SwipeDirection.Down;
								
								
								
						
							// Set the time the last swipe occured, useful for other scripts to check:
							lastSwipeTime = Time.time;
							Debug.Log("Found a swipe!  Direction: " + lastSwipe);
							
							
							

						
					
					
{
        Vector3 position = transform.position;
position.x = Mathf.Clamp(position.x, 0f, 10f);
transform.position = position;

      


   

}
						
						
						
						
						
						
						
						

						}
					}
					break;
			}
		}
	}
}