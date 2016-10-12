page = new PageComponent
	width: Screen.width
	height: 960
	scrollVertical: false
	backgroundColor: "#eee"

cardWidth = 1280
gap = 32
slides = []
page.animationOptions = {
	curve: "spring(300,30,0)",
	time: 0.25
}

for i in [0..4]
	pageContent = new Layer
		width : cardWidth
		height : page.height
# 		x: (cardWidth+gap) * i
		backgroundColor: Utils.randomColor(0.5)
	slides.push(pageContent)
# 	pageContent.html = pageContent.html = i+1
# 	pageContent.style = 
# 		"font-size" : "100px"
# 		"font-weight" : "100"
# 		"text-align" : "center"
# 		"line-height" : "#{page.height}px"

pageLoop = slides[0].copy()
pageLoop.name = "loop"
pageLoopAfter = slides[1].copy()
pageLoopAfter.name = "loop1"

pageStart = slides[4].copy()
pageStart.name = "start"
pageBeforeStart = slides[3].copy()
pageBeforeStart.name = "start0"

page.addPage(pageBeforeStart, "right")
page.addPage(pageStart, "right")
page.addPage slide for slide in slides
page.addPage(pageLoop, "right")
page.addPage(pageLoopAfter, "right")

page.content.on Events.AnimationDidEnd, ->	
	if page.currentPage.name is "loop"
		page.snapToPage(slides[0], false)
	if page.currentPage.name is "start"
		page.snapToPage(slides[4], false)
	if page.currentPage.name is "loop1"
		page.snapToPage(slides[1], false)
	if page.currentPage.name is "start0"
		page.snapToPage(slides[3], false)

page.snapToPage(slides[2])

Utils.interval 10, ->
	page.snapToNextPage("right", true)