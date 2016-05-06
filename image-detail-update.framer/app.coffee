# Sketch Import
sketch = Framer.Importer.load "imported/Scrollable"
{dp} = require "DevicePixelRatio"

scroll = ScrollComponent.wrap(sketch.content)
scroll.name = "scroll"
scroll.scrollHorizontal = false
springA = "spring(200,20,0)"
springB = "spring(100,20,0)"
imgs=[]

# blur transparent Navbar
sketch.navBar.clip=true
navBg = scroll.content.copy()
navBg.name = "navBg"
navBg.superLayer=sketch.navBar
navBg.placeBehind(sketch.navBarContent)
navBg.opacity = 0.15
navBg.blur = 10
scroll.content.on "change:y", ->
	navBg.y = this.screenFrame.y


contents = [scroll, sketch.navBar]

for img in sketch.images.children
	imgs.push img
	img.borderRadius = dp 3
	img.onTap (event, layer) ->
		unless scroll.isMoving
			crtLayer = layer.copy()
			crtLayer.frame = layer.screenFrame
			crtLayer.name = "crtLayer"
			crtLayer.placeBehind(sketch.navBar)
			crtLayer.states.add
				centered:
					scale : Screen.width/crtLayer.width
					midY : Screen.height/2
			crtLayer.states.animationOptions = 
				curve: springA
				time : 0.3
			crtLayer.states.next()
			for layer in contents
				layer.animate
					properties:
						opacity:0
					time: 0.2
					curve: springB
			scroll.scrollVertical = false
			for img in imgs
				img.ignoreEvents = true
			crtLayer.onTap ->
				this.on Events.AnimationEnd, ->
					this.destroy()
				for layer in contents
					layer.animate
						properties:
							opacity:1
						time: 0.2
				crtLayer.states.next()
				scroll.scrollVertical = true
				for img in imgs
					img.ignoreEvents = false
