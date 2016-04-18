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
		top: 260
		bottom: 20

###########
#scroll tips
###########

tips = new Layer
	width: Screen.width
	height: 200
	y: Screen.height
	html: """
		<h1 style="text-align:center; color:#aaa; margin-top:80px; font-weight:400; font-size:72px; ">Pull up to fold the cards</h1>
	"""
	backgroundColor: "transparent"


###########
#cards
###########

cards = []
margin = 64
height = 640
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
		borderRadius: 36
		shadowSpread: 6
		shadowColor: "rgba(0,0,0,0.2)"
		shadowBlur: 24
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
			height: 40
			x:Align.center
			y: (i+1)*(height+margin)+margin
			backgroundColor: "transparent"

#cover
cover = new Layer
	width: Screen.width
	height: 240
	backgroundColor: themeColor
	shadowSpread: 1
	shadowColor: "rgba(0,0,0,0.2)"
	shadowY: 12
	shadowBlur: 24

cover.states.add
	folded:
		y: Align.center
		x: 64
		width: 1312
		height: 640
		borderRadius: 36
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

scroll.on Events.Scroll , ->
	if 1453 < scroll.scrollY < 1654
		tips.y = Screen.height  - ( scroll.scrollY - 1453)
		tips.html = """
			<h1 style="text-align:center; color:#aaa; margin-top:80px; font-weight:400; font-size:72px; ">Pull up to fold the cards</h1>
		"""
	else if scroll.scrollY >= 1654
		tips.html = """
			<h1 style="text-align:center; color:#aaa; margin-top:80px; font-weight:400; font-size:72px; ">Release to fold</h1>
		"""

scroll.on Events.ScrollEnd, ->
	if scroll.scrollY < 1654
		animationSlideDown = new Animation
			layer: tips
			properties: 
				y : Screen.height
		animationSlideDown.start()
	else
		tips.y = Screen.height
		cover.states.next()
		scroll.states.next()
		for card in cards
			card.states.next()
###########
# ini
###########
# tips.states.next()
cover.states.next()
scroll.states.next()
# print scroll.contentInset
for card in cards 
	card.states.next()

