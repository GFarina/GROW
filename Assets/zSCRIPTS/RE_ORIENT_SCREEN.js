	//////// screen orientation
	if ((iPhoneInput.orientation == iPhoneOrientation.LandscapeLeft) && (iPhoneSettings.screenOrientation != iPhoneScreenOrientation.LandscapeLeft))
	{ iPhoneSettings.screenOrientation = iPhoneScreenOrientation.LandscapeLeft; }
	
	if ((iPhoneInput.orientation == iPhoneOrientation.LandscapeRight) && (iPhoneSettings.screenOrientation != iPhoneScreenOrientation.LandscapeRight))
	{ iPhoneSettings.screenOrientation = iPhoneScreenOrientation.LandscapeRight; }