# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "leo zeo"
	twitter: ""
	description: ""

module = require 'myModule'
Switch = module.Switch
a = new Switch

a.center()
a.onTap ->
	print a.isOn


class Button extends Layer
	constructor: (options) ->
		options?={}
		options.width?=76
		options.height?=26
		options.backgroundColor?="transparent"
		options.borderRadius?=4
		options.borderWidth?=1
		options.borderColor ?= "#0076ff"
		super options
		@text = options.text?= 'Button'
		Utils.labelLayer(@, @text)
		@.style.color = options.borderColor
		@.style.fontSize = "14px"



b = new Button
	text:'alessismore'

b.x =200
b.y=200

