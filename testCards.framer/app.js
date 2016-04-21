var amount, appendCard, bg, card, cards, cover, curve, dip, dp, height, i, j, k, len, margin, mark1, mark2, maxY, ref, scroll, themeColor, threhold, tips;

dip = require('DevicePixelRatio');

dp = dip.DevicePixelRatio.calc;

console.log(dip);

if (Screen.width) {
  if (Screen.width < dp(360)) {
    console.log("device is small");
  } else if (Screen.width < dp(720)) {
    console.log("device is middle");
  } else if (Screen.width < dp(960)) {
    console.log("device is large");
  } else {
    console.log("device is very large");
  }
}

bg = new BackgroundLayer({
  backgroundColor: "#eee"
});

themeColor = new Color("rgba(15,157,255,1)");

curve = "spring(500,40,0)";

scroll = new ScrollComponent({
  width: Screen.width,
  height: Screen.height,
  scrollHorizontal: false,
  contentInset: {
    top: dp(80)
  }
});

tips = new Layer({
  width: Screen.width,
  height: dp(80),
  y: Screen.height,
  color: "#aaa",
  style: {
    font: "400 " + (dp(24)) + "px -apple-system, Helvetica Neue, sans-serif",
    textAlign: "center"
  },
  html: "<span>Pull up to fold the cards</span>",
  backgroundColor: "transparent"
});

cards = [];

margin = dp(18);

height = dp(320);

threhold = dp(80);

amount = 5;

for (i = j = 0, ref = amount; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
  card = new Layer({
    name: "card" + i,
    superLayer: scroll.content,
    width: Screen.width - (margin * 2),
    height: height,
    x: margin,
    y: i * (height + margin) + margin,
    backgroundColor: "White",
    borderRadius: dp(6),
    shadowSpread: dp(0),
    shadowColor: "rgba(0,0,0,0.15)",
    shadowBlur: dp(8)
  });
  card.states.add({
    folded: {
      y: Align.center,
      shadowSpread: 0,
      shadowBlur: 0,
      height: 0,
      opacity: 0
    }
  });
  card.states.animationOptions = {
    curve: curve
  };
  cards.push(card);
  if (i === amount - 1) {
    appendCard = new Layer({
      name: "appendix",
      superLayer: scroll.content,
      width: Screen.width,
      height: dp(20),
      x: Align.center,
      y: (i + 1) * (height + margin) + 2 * margin,
      backgroundColor: "transparent"
    });
  }
}

cover = new Layer({
  width: Screen.width,
  height: dp(80),
  backgroundColor: themeColor,
  shadowSpread: dp(3),
  shadowColor: "rgba(0,0,0,0.3)",
  shadowY: dp(3),
  shadowBlur: dp(12),
  y: Align.top
});

cover.states.add({
  folded: {
    width: cover.width - dp(32),
    height: dp(240),
    x: dp(16),
    midY: Screen.height / 2,
    borderRadius: dp(12)
  }
});

cover.states.animationOptions = {
  curve: curve
};

scroll.states.add({
  folded: {
    scrollY: 0,
    scrollVertical: false
  }
});

cover.onTap(function() {
  var k, len, results;
  if (cover.states.current === "folded") {
    cover.states.next();
    scroll.states.next();
    results = [];
    for (k = 0, len = cards.length; k < len; k++) {
      card = cards[k];
      results.push(card.states.next());
    }
    return results;
  }
});


/*
 * pull up to fold the list
 */

mark1 = scroll.content.childrenWithName("appendix")[0].maxY - scroll.height + tips.height + threhold;

mark2 = scroll.content.childrenWithName("appendix")[0].minY - scroll.height + threhold;

maxY = scroll.content.childrenWithName("appendix")[0].maxY;

console.log("initial maxY is " + maxY);

scroll.on(Events.Scroll, function() {
  var scrlY;
  scrlY = scroll.scrollY;
  if ((mark2 < scrlY && scrlY < mark1)) {
    tips.y = Utils.modulate(scrlY, [mark1, mark2], [Screen.height - tips.height, Screen.height]);
    return tips.html = "<span>Pull up to fold the cards</span>";
  } else if (scrlY >= mark1) {
    tips.y = Screen.height - tips.height;
    return tips.html = "<span>Release to fold</span>";
  } else {
    tips.y = Screen.height;
    return tips.html = "<span>Pull up to fold the cards</span>";
  }
});

scroll.on(Events.ScrollEnd, function() {
  var animationSlideDown, k, len, results, scrlY;
  scrlY = scroll.scrollY;
  if (scrlY < mark1) {
    animationSlideDown = new Animation({
      layer: tips,
      properties: {
        y: Screen.height
      },
      curve: "spring(300,40,0)"
    });
    return animationSlideDown.start();
  } else if (scrlY >= mark1) {
    console.log("folded");
    tips.y = Screen.height;
    cover.states.next();
    scroll.states.next();
    results = [];
    for (k = 0, len = cards.length; k < len; k++) {
      card = cards[k];
      results.push(card.states.next());
    }
    return results;
  }
});


/*
 * handle window resize
 */

Events.wrap(window).addEventListener("resize", function(event) {
  return console.log("resizing detected");
});

cover.states.switchInstant("folded");

scroll.states.switchInstant("folded");

for (k = 0, len = cards.length; k < len; k++) {
  card = cards[k];
  card.states.switchInstant("folded");
}
