# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "leo zeo"
	twitter: ""
	description: ""


# Import file "framerLayout" (sizes and positions are scaled 1:2)
$ = Framer.Importer.load("imported/framerLayout@2x")

Framer.Defaults.animations =
	curve : "spring(300,30,0)"

#scrollable
scroll = ScrollComponent.wrap($.scrollable)
scroll.scrollHorizontal=false

#catergory
caterScroll = ScrollComponent.wrap($.catergoryScroll)
caterScroll.scrollVertical = false

caterScroll.onScroll ->
	scroll.scrollVertical = !caterScroll.isDragging

###
#coverflow
###
cover = PageComponent.wrap($.pageBeforeStart)
cover.width=Screen.width
cover.centerX()
cover.scrollVertical = false
cover.addPage($.pageStart)

# 
# cover.addPage($.card2)
# cover.addPage($.card3)

slides = [$.card0, $.card1, $.card2, $.card3,$.card4]

cover.addPage card for card in slides

cover.addPage($.loop)
cover.addPage($.loop1)

card.x += 24*index for card,index in cover.content.children

cover.content.on Events.AnimationDidEnd, ->	
	if cover.currentPage.name is "loop"
		cover.snapToPage(slides[0], false)
	if cover.currentPage.name is "pageStart"
		cover.snapToPage(slides[4], false)
	if cover.currentPage.name is "loop1"
		cover.snapToPage(slides[1], false)
	if cover.currentPage.name is "pageBeforeStart"
		cover.snapToPage(slides[3], false)

cover.snapToPage(slides[2],false)


# stop scroll vetical while coverflow is paging
cover.onScroll ->
	autoplay(cover, false)
	scroll.scrollVertical = !cover.isDragging 
	if !cover.isDragging then autoplay(cover, true)

interval =null

autoplay = (layer, flag)->
	if flag then interval=Utils.interval 4, ->
		layer.snapToNextPage("right", true)
	else clearInterval interval

autoplay(cover, true)


#####
# shrick and expand tabs, while switching between
#####
currentTab = "home"
shrickIcon = (tab) ->
	tab.subLayers[0].scale=2/3
	tab.subLayers[0].y = 14
	tab.subLayers[1].scale=1.4

expandIcon = (tab) ->
	tab.subLayers[0].scale=1
	tab.subLayers[0].y=0
	tab.subLayers[1].scale=1

#set up initial states
shrickIcon tab for tab in $.tabBar.subLayers
expandIcon $.home

# tab animation
for tab in $.tabBar.subLayers
	do (tab) ->
		tab.onTap ->
			currentTab = tab.name
			expandIcon tabIcon for tabIcon in $.tabBar.subLayers when currentTab is tabIcon.name
			shrickIcon tabIcon for tabIcon in $.tabBar.subLayers when currentTab isnt tabIcon.name
