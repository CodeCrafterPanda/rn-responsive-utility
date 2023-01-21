import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export default useScreenOrientation = () => {
	const [screenOrientation, setScreenOrientation] = useState("PORTRAIT");
	const [screenWidth, setScreenWidth] = useState(
		Dimensions.get("window").width
	);
	const [screenHeight, setScreenHeight] = useState(
		Dimensions.get("window").height
	);

	useEffect(() => {
		Dimensions.addEventListener("change", () => {
			const { width, height } = Dimensions.get("window");
			setScreenWidth(width);
			setScreenHeight(height);
			setScreenOrientation(height > width ? "PORTRAIT" : "LANDSCAPE");
		});

		// return () => {
		//   Dimensions.removeEventListener('change', () => { });
		// };
	}, []);

	return {
		screenWidth,
		screenHeight,
		screenOrientation,
	};
};
