# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "leo zeo"
	twitter: ""
	description: ""


themeColor = new Color('#23FF06')


trigger = new Layer
	width:100, height:60
	backgroundColor: "transparent" 

triggerBg = new Layer
	height: 40
	width: 100
	borderRadius: 100
	backgroundColor: "rgba(108,108,108,0.5)"
	superLayer: trigger
	y: Align.center


triggerBtn = new Layer
	width: 60
	borderRadius: 60
	height: 60
	parent: trigger
	backgroundColor: "#fff"
	shadowSpread: 0
	shadowColor: "rgba(0,0,0,0.25)"
	shadowY: 4
	shadowBlur: 8
	x: Align.left
	y: Align.center

triggerBtn.states.add
	on:
		x: Align.right

triggerBg.states.add
	on:
		backgroundColor: themeColor

triggerBtn.states.animationOptions = 
	curve:"spring(200,30,0)"
triggerBg.states.animationOptions =
	time:1
	curve:'ease'


trigger.onTap ->
	layer.states.next() for layer in trigger.children 

backgroundA = new BackgroundLayer
	backgroundColor: "rgba(243,243,244,1)"

trigger.center()