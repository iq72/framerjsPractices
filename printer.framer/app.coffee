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
	scroll.scroll=false
caterScroll.onScrollEnd ->
	print "caterScroll"
	scroll.scrollVertical = true


#coverflow
cover = PageComponent.wrap($.coverflow)
cover.scrollVertical = false

cover.onScroll ->
	scroll.scroll=false
cover.onScrollEnd ->
	print "cover"
	scroll.scrollVertical = true


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
