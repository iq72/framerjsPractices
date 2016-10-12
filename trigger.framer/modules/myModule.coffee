# Add the following line to your project in Framer Studio. 
# myModule = require "myModule"
# Reference the contents by name, like myModule.myFunction() or myModule.myVar

exports.myVar = "myVariable"

exports.myFunction = ->
	print "myFunction is running"

exports.myArray = [1, 2, 3]

exports.Trigger = class Trigger extends Layer
	constructor:(options) ->
		super options
		options.themeColor ||= "#23ff06"
		@themeColor=new Color options.themeColor
		@width=51
		@height=31
		@backgroundColor = "transparent"
				
		@triggerBg = new Layer
			height: 31
			width: 51
			borderRadius: 100
			backgroundColor: "rgba(255,255,255,1)"
			superLayer: @
			y: Align.center
			borderWidth: 2
			borderColor: "rgba(0,0,0,0.1)"
		
		@triggerBtn = new Layer
			width: 28	
			borderRadius: 28
			height: 28
			parent: @
			backgroundColor: "#fff"
			shadowSpread: 0
			shadowColor: "rgba(0,0,0,0.25)"
			shadowY: 3
			shadowBlur: 3
			x: Align.left
			y: Align.center
			borderWidth: 1
			borderColor: "rgba(0,0,0,0.1)"
		
		@triggerBtn.states.add
			ON:
				x: Align.right
		
		@triggerBg.states.add
			ON:
				backgroundColor: @themeColor
				borderColor:"rgba(0,0,0,0)"
		
		@triggerBtn.states.animationOptions = 
			curve:"spring(200,30,0)"
		@triggerBg.states.animationOptions =
			time:1
			curve:'ease'
		#toggle on tap event
		@.onTap @toggle

	toggle: () =>
		if !@triggerBg.isAnimating then layer.states.next() for layer in @.children 
