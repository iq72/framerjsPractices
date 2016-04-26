dip = require 'DevicePixelRatio'
dp = dip.DevicePixelRatio.calc


class pid extends dip
	@foo: "bar"

istn =

console.log pid + "\n" + pid.foo

if Screen.width
	if Screen.width < dp 360
		console.log "device is small"
	else if Screen.width < dp 720
		console.log "device is middle"
	else if Screen.width < dp 960
		console.log "device is large"
	else console.log "device is very large"

###########
#background
###########
bg = new BackgroundLayer
	backgroundColor: "#eee"

themeColor = new Color("rgba(15,157,255,1)")

###########
#animation curves
###########
curve = "spring(500,40,0)"

###########
#scroll
###########
scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	contentInset:
		top: dp 80

###########
#scroll TIPS
###########

tips = new Layer
	width: Screen.width
	height: dp 80
	y: Screen.height
	color: "#aaa"
	style:
		font: "400 #{dp 24}px -apple-system, Helvetica Neue, sans-serif"
		textAlign: "center"
	html: """
		<span>Pull up to fold the cards</span>
	"""
	backgroundColor: "transparent"


###########
#cards
###########

cards = []
margin = dp 18
height = dp 320
threhold = dp 80
amount = 5

for i in [0...amount]
	card = new Layer
		name: "card#{i}"
		superLayer: scroll.content
		width: Screen.width - (margin*2)
		height: height
		x: margin
		y: i * (height+margin) + margin
		backgroundColor: "White"
		borderRadius: dp 6
		shadowSpread: dp 0
		shadowColor: "rgba(0,0,0,0.15)"
		shadowBlur: dp 8
	card.states.add
		folded:
			y: Align.center
			shadowSpread: 0
			shadowBlur: 0
			height: 0
			opacity: 0
	card.states.animationOptions = curve: curve
	card.onTap ->
		return if scroll.isDragging
		return if scroll.isMoving
		console.log "card tapped"
	cards.push card
	if i==amount-1
		appendCard= new Layer
			name:"appendix"
			superLayer: scroll.content
			width: Screen.width
			height: dp 20
			x:Align.center
			y: (i+1)*(height+margin)+ 2*margin
			backgroundColor: "transparent"

#cover
cover = new Layer
	width: Screen.width
	height: dp 80
	backgroundColor: themeColor
	shadowSpread: dp 3
	shadowColor: "rgba(0,0,0,0.3)"
	shadowY: dp 3
	shadowBlur: dp 12
	y:Align.top

cover.states.add
	folded:
		width: cover.width - dp 32
		height: dp 240
		x: dp 16
		midY: Screen.height/2
		borderRadius: dp 12
cover.states.animationOptions = curve: curve

scroll.states.add
	folded:
		scrollY: 0
		scrollVertical: false
# tap to unfold cards
cover.onTap ->
	if cover.states.current is "folded"
		cover.states.next()
		scroll.states.next()
		card.states.next() for card in cards

###
# pull up to fold the list
###
mark1 = scroll.content.childrenWithName("appendix")[0].maxY - scroll.height + tips.height + threhold
mark2 = scroll.content.childrenWithName("appendix")[0].minY - scroll.height + threhold

maxY = scroll.content.childrenWithName("appendix")[0].maxY

console.log "initial maxY is #{maxY}"

scroll.on Events.Scroll , ->
	scrlY=scroll.scrollY
	if mark2 < scrlY < mark1
		tips.y = Utils.modulate(scrlY, [mark1, mark2], [ Screen.height-tips.height, Screen.height])
		tips.html = """
			<span>Pull up to fold the cards</span>
		"""
	else if scrlY >= mark1
		tips.y = Screen.height - tips.height
		tips.html = """
			<span>Release to fold</span>
		"""
	else
		tips.y = Screen.height
		tips.html = """
			<span>Pull up to fold the cards</span>
		"""

scroll.on Events.ScrollEnd, ->
	scrlY=scroll.scrollY
	if scrlY < mark1
		animationSlideDown = new Animation
			layer: tips
			properties:
				y : Screen.height
			curve: "spring(300,40,0)"
		animationSlideDown.start()
	else if scrlY >= mark1
		console.log "folded"
		tips.y = Screen.height
		cover.states.next()
		scroll.states.next()
		for card in cards
			card.states.next()

###
# handle window resize
###
Events.wrap(window).addEventListener "resize" , (event) ->
	console.log "resizing detected"


###########
# ini
##########
cover.states.switchInstant("folded")
scroll.states.switchInstant("folded")
for card in cards
	card.states.switchInstant("folded")
