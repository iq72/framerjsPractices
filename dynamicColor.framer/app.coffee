# Import file "instagramStart" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/instagramStart@2x")

# sketch.bg.visible=false
angle = 105
color1 = "#A0528D"
color2 = "#F56A6A" 

# print color3 = Utils.randomColor().desaturate(20).lighten(10).toHslString().split(",")[0].split("(")[1]


bg = new Layer
	width: Screen.width*4, height: Screen.height*2
	originX: 0.5, originY: 0.5
# 	blur: 25
	style: 
		"background":"linear-gradient(#{angle}deg, #{color1} 15%, #{color2} 80%)"

bg.center()
bg.placeBehind(sketch.content)

bg.animate
	properties: 
		hueRotate: 360
		rotation: 360
	repeat: 100
	time: 30
	curve: "linear"
