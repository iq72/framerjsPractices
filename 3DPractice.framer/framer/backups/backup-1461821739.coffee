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
originRotationZ = originRotationX = null

cards[15].on Events.Tap, toggle = ->
	for card in cards
		if card.isAnimating # do nothing is animating
			return
	togglePerspective()

togglePerspective = ->
	delay = if container.states.current isnt "perspective" then 0.05 else 0
	container.states.next()
	for card,index in cards
		delayChangeState((cards.length-index)*delay, card)
	if container.states.current is "perspective"
		container.on Events.PanStart, handlePanStart
		container.on Events.Pan, handlePan(event)
		container.on Events.PanEnd, handlePanEnd
	else 
		container.off Events.PanStart, handlePanStart

handlePanStart = ->
	print "PanStart"
	originRotationZ = container.rotationZ
	originRotationX = container.rotationX
	cards[15].off Events.Tap, toggle


handlePan = (event) -> 
	print "panning"
	console.log event
	container.rotationZ =originRotationZ - ((event.x - event.startX) / 4)
	container.rotationX = originRotationX - ((event.y - event.startY)/4)

handlePanEnd = ->
	print "pan end"
	cards[15].on Events.Tap,toggle

delayChangeState = (time,layer) ->
	Utils.delay time, ->
		layer.states.next()





###
# center thyself when window is resized 
###
Events.wrap(window).addEventListener "resize", ->
	container.center()