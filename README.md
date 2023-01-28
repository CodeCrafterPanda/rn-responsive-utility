# rn-responsive-utility

**RN-Responsive-Utility** is a utility library for React Native that provides hooks for responsive scaling and device orientation information. This library allows developers to easily scale their UI based on screen size and device orientation, and also provides hooks for accessing device orientation information.

## Installation

To install the library, you can use npm by running the following command:

```bash
  npm install rn-responsive-utility
```

## Usage / Example

Once the library is installed, you can import the hooks and start using them in your application.
\
\
The **useScreenOrientation** hook returns an object containing the following properties:

**screenWidth**: the current width of the screen in pixels

**screenHeight**: the current height of the screen in pixels

**screenOrientation**: the current orientation of the device, either **PORTRAIT** or **LANDSCAPE**

You can use this hook like this:

```javascript
import { useScreenOrientation } from "rn-responsive-utility";

function MyComponent() {
	const { screenWidth, screenHeight, screenOrientation } =
		useScreenOrientation();

	// use the screenWidth, screenHeight and screenOrientation properties
}
```

The **useScale** hook returns an object containing the following properties:

**hScale**: the horizontal scale factor based on the screen width

**vScale**: the vertical scale factor based on the screen height

**phScale**: the percentage horizontal scale factor based on the screen width

**pvScale**: the percentage vertical scale factor based on the screen height

**mhScale**: the medium horizontal scale factor based on the screen width (where it can take second parameter as scaling factor).

**mvScale**: the medium vertical scale factor based on the screen height (where it can take second parameter as scaling factor).

**useScale** can take boolean to unlock scaling with orientation change. default is **true** by considering orientation is locked to **PORTRAIT**

You can use this hook like this:

```javascript
import { useScale } from "rn-responsive-utility";

function MyComponent() {
	const { hScale, vScale, mhScale, mvScale } = useScale();

	// use the hScale, vScale,mhScale,mvScale properties
}
```

Code Snippet

```javascript
import { useScale } from "rn-responsive-utility";

function MyComponent() {
	const { hScale, vScale, mhScale, mvScale } = useScale();

	// use the hScale, vScale,mhScale,mvScale properties
	return (
		<View
			style={{
				backgroundColor: "red",
				borderWidth: vScale(2),
				paddingHorizontal: hScale(SIZES.padding),
				borderRadius: vScale(SIZES.radius),
				paddingVertical: vScale(20),
			}}
		>
			<Text style={{ fontSize: vScale(SIZES.font) }}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque
				perferendis, labore possimus sed eius nihil tempore modi! Nihil soluta
				nobis quae architecto praesentium ipsa mollitia minima error ipsum
				veritatis!
			</Text>
		</View>
	);
}
```

You can use the **hScale** and **vScale** functions to scale the values of different styles properties based on the screen size.

For example, in the above code snippet, the **borderWidth** and **paddingHorizontal** properties of the **View** component are being scaled using **vScale** and **hScale** respectively.

The **paddingVertical** and **borderRadius** are also being scaled using **vScale**.

The **fontSize** of the **Text** component is also being scaled using **vScale** function.

It's important to note that you can provide the values to be scaled in the form of an object like **SIZES**, which will have the key-value pairs of different sizes as per your requirement.

With these hooks, you can easily create responsive and adaptive interfaces without the need for additional dependencies or libraries.

The hooks can be used in any component of your application and can be combined with other hooks and libraries. This library is a great tool for building responsive and user-friendly applications in React Native.

## Authors

- [@CodeCrafterPanda](https://www.github.com/CodeCrafterPanda)

## Tip:

For better use of this library scale vertical properties like **fontSize**, **height**, **marginVertical** with **vScale** and horizontal properties like **width**, **marginHorizontal** with **hScale**.
