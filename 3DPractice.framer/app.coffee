{dp} = require "DevicePixelRatio"

print dp 1

bg = new BackgroundLayer
	backgroundColor: "#eee"

squareSize = dp 320
amount = 16
zDistance = dp 16
cards = []
container = new Layer
	width: squareSize, height: squareSize
	backgroundColor: "transparent"
	x: Align.center, y: Align.center

for i in[0...amount]
	card = new Layer
		width: squareSize, height: squareSize
		superLayer: container
		backgroundColor: Utils.randomColor()
		html: """
			<p> Layer #{i} </p>
		"""
	cards.push card
	card.states.add
		expand:
			z: i * zDistance