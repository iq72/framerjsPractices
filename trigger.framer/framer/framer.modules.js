require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
var Switch,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


/*
Switch
 */

exports.Switch = Switch = (function(superClass) {
  extend(Switch, superClass);

  function Switch(options) {
    this.toggle = bind(this.toggle, this);
    if (options == null) {
      options = {};
    }
    Switch.__super__.constructor.call(this, options);
    if (options.themeColor == null) {
      options.themeColor = "#23ff06";
    }
    this.themeColor = new Color(options.themeColor);
    this.width = 51;
    this.height = 31;
    this.backgroundColor = "transparent";
    this.isOn = false;
    this.switchBg = new Layer({
      height: 31,
      width: 51,
      borderRadius: 100,
      backgroundColor: "rgba(255,255,255,1)",
      superLayer: this,
      y: Align.center,
      borderWidth: 2,
      borderColor: "rgba(0,0,0,0.1)"
    });
    this.switchBtn = new Layer({
      width: 28,
      borderRadius: 28,
      height: 28,
      parent: this,
      backgroundColor: "#fff",
      shadowSpread: 0,
      shadowColor: "rgba(0,0,0,0.25)",
      shadowY: 3,
      shadowBlur: 3,
      x: 1,
      y: Align.center,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.1)"
    });
    this.switchBtn.states.add({
      ON: {
        x: 22
      }
    });
    this.switchBg.states.add({
      ON: {
        backgroundColor: this.themeColor,
        borderColor: "rgba(0,0,0,0)"
      }
    });
    this.switchBtn.states.animationOptions = {
      curve: "spring(200,30,0)"
    };
    this.switchBg.states.animationOptions = {
      time: 1,
      curve: 'ease'
    };
    this.onTap(this.toggle);
  }

  Switch.prototype.toggle = function() {
    var i, layer, len, ref;
    if (!this.switchBg.isAnimating) {
      ref = this.children;
      for (i = 0, len = ref.length; i < len; i++) {
        layer = ref[i];
        layer.states.next();
      }
      return this.isOn = !this.isOn;
    }
  };

  return Switch;

})(Layer);


/*
Button
 */


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdXG5cbiMjI1xuU3dpdGNoXG4jIyNcbmV4cG9ydHMuU3dpdGNoID0gY2xhc3MgU3dpdGNoIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6KG9wdGlvbnMpIC0+XG5cdFx0b3B0aW9ucz89e31cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0b3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzIzZmYwNlwiXG5cdFx0QHRoZW1lQ29sb3I9bmV3IENvbG9yIG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB3aWR0aD01MVxuXHRcdEBoZWlnaHQ9MzFcblx0XHRAYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0QGlzT249ZmFsc2Vcblx0XHRcdFx0XG5cdFx0QHN3aXRjaEJnID0gbmV3IExheWVyXG5cdFx0XHRoZWlnaHQ6IDMxXG5cdFx0XHR3aWR0aDogNTFcblx0XHRcdGJvcmRlclJhZGl1czogMTAwXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cdFx0XHRzdXBlckxheWVyOiBAXG5cdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdGJvcmRlcldpZHRoOiAyXG5cdFx0XHRib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMSlcIlxuXHRcdFxuXHRcdEBzd2l0Y2hCdG4gPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyOFx0XG5cdFx0XHRib3JkZXJSYWRpdXM6IDI4XG5cdFx0XHRoZWlnaHQ6IDI4XG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcblx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0c2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwwLjI1KVwiXG5cdFx0XHRzaGFkb3dZOiAzXG5cdFx0XHRzaGFkb3dCbHVyOiAzXG5cdFx0XHR4OiAxXG5cdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdGJvcmRlcldpZHRoOiAxXG5cdFx0XHRib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMSlcIlxuXHRcdFxuXHRcdEBzd2l0Y2hCdG4uc3RhdGVzLmFkZFxuXHRcdFx0T046XG5cdFx0XHRcdHg6IDIyXG5cdFx0XG5cdFx0QHN3aXRjaEJnLnN0YXRlcy5hZGRcblx0XHRcdE9OOlxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEB0aGVtZUNvbG9yXG5cdFx0XHRcdGJvcmRlckNvbG9yOlwicmdiYSgwLDAsMCwwKVwiXG5cdFx0XG5cdFx0QHN3aXRjaEJ0bi5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9IFxuXHRcdFx0Y3VydmU6XCJzcHJpbmcoMjAwLDMwLDApXCJcblx0XHRAc3dpdGNoQmcuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRcdFx0dGltZToxXG5cdFx0XHRjdXJ2ZTonZWFzZSdcblx0XHQjdG9nZ2xlIG9uIHRhcCBldmVudFxuXHRcdEAub25UYXAgQHRvZ2dsZVxuXG5cdHRvZ2dsZTogKCkgPT5cblx0XHRpZiAhQHN3aXRjaEJnLmlzQW5pbWF0aW5nXG5cdFx0XHRsYXllci5zdGF0ZXMubmV4dCgpIGZvciBsYXllciBpbiBALmNoaWxkcmVuIFxuXHRcdFx0QC5pc09uID0gIUAuaXNPblxuXG5cbiMjI1xuQnV0dG9uXG4jIyNcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FESUEsSUFBQSxNQUFBO0VBQUE7Ozs7QUFBQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQOzs7QUFFbEI7Ozs7QUFHQSxPQUFPLENBQUMsTUFBUixHQUF1Qjs7O0VBQ1YsZ0JBQUMsT0FBRDs7O01BQ1gsVUFBUzs7SUFDVCx3Q0FBTSxPQUFOOztNQUNBLE9BQU8sQ0FBQyxhQUFjOztJQUN0QixJQUFDLENBQUEsVUFBRCxHQUFnQixJQUFBLEtBQUEsQ0FBTSxPQUFPLENBQUMsVUFBZDtJQUNoQixJQUFDLENBQUEsS0FBRCxHQUFPO0lBQ1AsSUFBQyxDQUFBLE1BQUQsR0FBUTtJQUNSLElBQUMsQ0FBQSxlQUFELEdBQW1CO0lBQ25CLElBQUMsQ0FBQSxJQUFELEdBQU07SUFFTixJQUFDLENBQUEsUUFBRCxHQUFnQixJQUFBLEtBQUEsQ0FDZjtNQUFBLE1BQUEsRUFBUSxFQUFSO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWMsR0FGZDtNQUdBLGVBQUEsRUFBaUIscUJBSGpCO01BSUEsVUFBQSxFQUFZLElBSlo7TUFLQSxDQUFBLEVBQUcsS0FBSyxDQUFDLE1BTFQ7TUFNQSxXQUFBLEVBQWEsQ0FOYjtNQU9BLFdBQUEsRUFBYSxpQkFQYjtLQURlO0lBVWhCLElBQUMsQ0FBQSxTQUFELEdBQWlCLElBQUEsS0FBQSxDQUNoQjtNQUFBLEtBQUEsRUFBTyxFQUFQO01BQ0EsWUFBQSxFQUFjLEVBRGQ7TUFFQSxNQUFBLEVBQVEsRUFGUjtNQUdBLE1BQUEsRUFBUSxJQUhSO01BSUEsZUFBQSxFQUFpQixNQUpqQjtNQUtBLFlBQUEsRUFBYyxDQUxkO01BTUEsV0FBQSxFQUFhLGtCQU5iO01BT0EsT0FBQSxFQUFTLENBUFQ7TUFRQSxVQUFBLEVBQVksQ0FSWjtNQVNBLENBQUEsRUFBRyxDQVRIO01BVUEsQ0FBQSxFQUFHLEtBQUssQ0FBQyxNQVZUO01BV0EsV0FBQSxFQUFhLENBWGI7TUFZQSxXQUFBLEVBQWEsaUJBWmI7S0FEZ0I7SUFlakIsSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBbEIsQ0FDQztNQUFBLEVBQUEsRUFDQztRQUFBLENBQUEsRUFBRyxFQUFIO09BREQ7S0FERDtJQUlBLElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQWpCLENBQ0M7TUFBQSxFQUFBLEVBQ0M7UUFBQSxlQUFBLEVBQWlCLElBQUMsQ0FBQSxVQUFsQjtRQUNBLFdBQUEsRUFBWSxlQURaO09BREQ7S0FERDtJQUtBLElBQUMsQ0FBQSxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFsQixHQUNDO01BQUEsS0FBQSxFQUFNLGtCQUFOOztJQUNELElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFqQixHQUNDO01BQUEsSUFBQSxFQUFLLENBQUw7TUFDQSxLQUFBLEVBQU0sTUFETjs7SUFHRCxJQUFDLENBQUMsS0FBRixDQUFRLElBQUMsQ0FBQSxNQUFUO0VBbERXOzttQkFvRFosTUFBQSxHQUFRLFNBQUE7QUFDUCxRQUFBO0lBQUEsSUFBRyxDQUFDLElBQUMsQ0FBQSxRQUFRLENBQUMsV0FBZDtBQUNDO0FBQUEsV0FBQSxxQ0FBQTs7UUFBQSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQWIsQ0FBQTtBQUFBO2FBQ0EsSUFBQyxDQUFDLElBQUYsR0FBUyxDQUFDLElBQUMsQ0FBQyxLQUZiOztFQURPOzs7O0dBckQ2Qjs7O0FBMkR0QyJ9
