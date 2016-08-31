# Background image
bg = new Layer
	width: Screen.width, height: Screen.height
	image: "images/bg.png"

lockScreen = new Layer
	width: Screen.width, height: Screen.height
	image: "images/numbers.png"

home = new Layer
	width: Screen.width, height: Screen.height
	image: "images/home.png"

page=new PageComponent
	width: Screen.width, height: Screen.height

page.scrollVertical = false

page.addPage(lockScreen)
page.addPage(home,"right")
page.snapToPage(home)
# disable over drag
page.content.draggable.overdrag = false

status = new Layer
	width: 750
	height: 40
	image: "images/status.png"

page.content.on "change:x", ->
	bg.scale = Utils.modulate this.x, [0,-750], [1.2,1]
	bg.blur = Utils.modulate this.x, [0,-750], [24,0]
	bg.opacity = Utils.modulate this.x, [0,-750], [0.8,1]