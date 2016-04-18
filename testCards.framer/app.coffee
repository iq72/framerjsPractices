{dpr} = require 'DevicePixelRatio'
console.log dpr 1
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
		top: dpr 80

###########
#scroll TIPS
###########

tips = new Layer
	width: Screen.width
	height: dpr 80
	y: Screen.height
	color: "#aaa"
	style:
		font: "400 #{dpr 24}px -apple-system, Helvetica Neue, sans"
		textAlign: "center"
	html: """
		<span>Pull up to fold the cards</span>
	"""
	backgroundColor: "transparent"


###########
#cards
###########

cards = []
margin = dpr 18
height = dpr 320
threhold = dpr 100
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
		borderRadius: dpr 6
		shadowSpread: dpr 0
		shadowColor: "rgba(0,0,0,0.15)"
		shadowBlur: dpr 8
	card.states.add
		folded:
			y: Align.center
			shadowSpread: 0
			shadowBlur: 0
			height: 0
			opacity: 0
	card.states.animationOptions = curve: curve
	cards.push card
	if i==amount-1
		appendCard= new Layer
			name:"appendix"
			superLayer: scroll.content
			width: Screen.width
			height: dpr 80
			x:Align.center
			y: (i+1)*(height+margin)+ 2*margin
			backgroundColor: "transparent"

#cover
cover = new Layer
	width: Screen.width
	height: dpr 80
	backgroundColor: themeColor
	shadowSpread: dpr 3
	shadowColor: "rgba(0,0,0,0.3)"
	shadowY: dpr 3
	shadowBlur: dpr 12
	y:Align.top

cover.states.add
	folded:
		width: cover.width - dpr 32
		height: dpr 240
		x: dpr 16
		midY: Screen.height/2
		borderRadius: dpr 12
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
mark1 = parseInt scroll.content.childrenWithName("appendix")[0].maxY
mark2 = parseInt scroll.content.childrenWithName("appendix")[0].minY

scroll.on Events.Scroll , ->
# 	print mark1
	if mark2 < Screen.height < mark1
		print "hit mark1"
		tips.y = Screen.height  - ( mark1 - Screen.height)
		tips.html = """
			<span>Pull up to fold the cards</span>
		"""
	else if Screen.height <= mark2
		tips.y = Screen.height - tips.height
		tips.html = """
			<span>Release to fold</span>
		"""

scroll.on Events.ScrollEnd, ->
	if mark2?
		print mark2
	if Screen.height > mark2
		animationSlideDown = new Animation
			layer: tips
			properties: 
				y : Screen.height
		animationSlideDown.start()
	else if Screen.height <= mark2
		tips.y = Screen.height
		cover.states.next()
		scroll.states.next()
		for card in cards
			card.states.next()



###########
# ini
##########
# cover.states.next()
# scroll.states.next()
# for card in cards 
# 	card.states.next()

