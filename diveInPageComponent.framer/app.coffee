# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "leo zeo"
	twitter: ""
	description: ""



pageSuper =  new PageComponent
	width: Framer.Screen.width, height: Framer.Screen.height
	directionLock: true
	directionLockThreshold:
		x: 10, y:10
pageSuper.content.draggable.overdragScale = 0.3



for i in [0...5] # five rows
	for j in [0...3] # three cols
		m = i*j
		layer = new Layer
			width: Framer.Screen.width, height:Framer.Screen.height
			x:Framer.Screen.width*j, y:Framer.Screen.height*i
			parent: pageSuper.content
			backgroundColor: Utils.randomColor()
			name: "col#{j}-row#{i}"
		layer.col=j
		layer.row=i
		Utils.labelLayer(layer, layer.name)

pageSuper.on "change:currentPage",(currentPage)->#can only scroll horizontally when at top row
	if currentPage.row is 0 then pageSuper.scroll=true else pageSuper.scrollHorizontal = false


#sub page
pageSub = new PageComponent
	width: Framer.Screen.width, height: Framer.Screen.height
	parent: pageSuper.content.children[5]#sub page is at col2-row1
	scrollVertical: false
pageSub.content.draggable.overdrag=false


for a in [0...5]
	layer = new Layer
		width: Framer.Screen.width, height:Framer.Screen.height
		x:Framer.Screen.width*a
		parent: pageSub.content
		name: "seq#{a}"
		backgroundColor: new Color("#f3e2ac").darken(a*5)
	Utils.labelLayer(layer, layer.name)


# when pageSuper is moving vertically, disable pageSub
pageSuper.content.on "change:y", ->
	pageSub.content.draggable=false
pageSuper.content.onAnimationStop ->
	pageSub.content.draggable=true


# also disable pageSuper when pageSub is not at start point
pageSub.on "change:currentPage",(currentPage)->
	if currentPage is pageSub.content.children[0] then pageSuper.content.draggable = true
	else pageSuper.content.draggable = false 