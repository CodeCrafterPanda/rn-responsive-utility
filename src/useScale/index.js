import { useEffect, useState } from "react";
import useScreenOrientation from "../useScreenOrientation";

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 400;
const guidelineBaseHeight = 700;

export default useScale = (lockmode = true) => {
	const { screenWidth, screenHeight, screenOrientation, statusbarHeight } =
		useScreenOrientation();
	const [shortDimension, setShortDimension] = useState(1);
	const [longDimension, setLongDimension] = useState(1);
	useEffect(() => {
		const [shortDimension, longDimension] = !lockmode
			? [screenWidth, screenHeight]
			: screenOrientation === "PORTRAIT"
			? [screenWidth, screenHeight]
			: [screenHeight, screenWidth];
		setShortDimension(shortDimension);
		setLongDimension(longDimension);
		console.log(shortDimension, longDimension);
	}, [screenOrientation]);
	const hScale = (size) => (shortDimension / guidelineBaseWidth) * size;
	const vScale = (size) => (longDimension / guidelineBaseHeight) * size;
	const mhScale = (size, factor = 0.5) => size + (hScale(size) - size) * factor;
	const mvScale = (size, factor = 0.5) => size + (vScale(size) - size) * factor;
	const phScale = (percentage) => (shortDimension / 100) * percentage;
	const pvScale = (percentage) =>
		((longDimension - (statusbarHeight || 0)) / 100) * percentage;
	return { hScale, vScale, mhScale, mvScale, phScale, pvScale };
};
