#a little function to detect changes of custome properties
exports.detectChange = (layer,propertyName) ->
	preValue=layer[propertyName]
	check = ->
		if preValue!=layer[propertyName]
			preValue = layer[propertyName]
			layer.emit "change:#{propertyName}"
	setInterval check, 1000
