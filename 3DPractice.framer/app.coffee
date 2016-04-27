{dp} = require "DevicePixelRatio"

bg= new BackgroundLayer
	backgroundColor: "red"

squareSize = dp 320
amount = 16
zDistance = dp 30
cards = []
container = new Layer
	width: squareSize, height: squareSize
	backgroundColor: "#eee"
	x: Align.center, y: Align.center

container.states.add
	perspective:
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
			opacity: 1


###
# tap to toggle perspectives
###
cards[15].onTap ->
	togglePerspective()

togglePerspective = ->
	delay = if container.states.current isnt "perspective" then 0.05 else 0
	container.states.next()
	for card,index in cards
		delayChangeState((cards.length-index)*delay, card)

delayChangeState = (time,layer) ->
	Utils.delay time, ->
		layer.states.next()



###
# center thyself when window is resized 
###
Events.wrap(window).addEventListener "resize", ->
	container.center()