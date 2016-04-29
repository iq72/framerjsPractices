angle = 135
color1 = new Color("blue").desaturate(30).lighten(15).toHexString()
color2 = new Color("orange").desaturate(15).darken(36).toHexString()

# print color3 = Utils.randomColor().desaturate(20).lighten(10).toHslString().split(",")[0].split("(")[1]


bg = new Layer
	width: Screen.width*2, height: Screen.height*2
	originX: 0.5, originY: 0.5
	blur: 25
	style: 
		"background":"linear-gradient(#{angle}deg, #{color1} 0%, #{color2} 100%)"

bg.center()


bg.animate
	properties: 
		hueRotate: 360
		rotation: 360
	repeat: 100
	time: 30
	curve: "linear"
