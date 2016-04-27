{dp} = require "DevicePixelRatio"

aniCurve = curve : "spring(300,50,0)"



squareSize = dp 320
amount = 16
zDistance = dp 30
cards = []
container = new Layer
	width: Screen.width, height: Screen.height
	backgroundColor: "#eee"
	x: Align.center, y: Align.center

container.states.add
	perspective:
		y: dp 145
		rotationZ: 45
		rotationX: 45


for i in[0...amount]
	card = new Layer
		width: squareSize, height: squareSize
		superLayer: container
		backgroundColor: Utils.randomColor().desaturate(15).lighten(10)
		style:
			"padding" : "20px"
			"font-size" : "1.5rem"
		html: """
			<p> Layer #{i} </p>
		"""
		name: "Layer#{i}"
	card.center()
	cards.push card
	card.states.add
		expand:
			z: i * zDistance + 1
			opacity: 0.8
	card.states.animationOptions = aniCurve

container.states.animationOptions = aniCurve

###
# tap to toggle perspectives
###
cards[15].onTap ->
	for card in cards
		if card.isAnimating 
			return
	print "noting is animating"
	togglePerspective()

togglePerspective = ->
	delay = if container.states.current isnt "perspective" then 0.05 else 0
	container.states.next()
	for card,index in cards
		delayChangeState((cards.length-index)*delay, card)

delayChangeState = (time,layer) ->
	Utils.delay time, ->
		layer.states.next()

originRotationZ = originRotationX = null
container.on Events.PanStart, -> 
	originRotationZ = container.rotationZ
	originRotationX = container.rotationX
container.on Events.Pan,(event) -> 
	this.rotationZ =originRotationZ - ((event.x - event.startX) / 4)
	this.rotationX = originRotationX - ((event.y - event.startY)/4)

###
# center thyself when window is resized 
###
Events.wrap(window).addEventListener "resize", ->
	container.center()