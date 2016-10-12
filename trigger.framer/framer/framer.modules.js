require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
var Trigger,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];

exports.Trigger = Trigger = (function(superClass) {
  extend(Trigger, superClass);

  function Trigger(options) {
    this.toggle = bind(this.toggle, this);
    Trigger.__super__.constructor.call(this, options);
    options.themeColor || (options.themeColor = "#23ff06");
    this.themeColor = new Color(options.themeColor);
    this.width = 51;
    this.height = 31;
    this.backgroundColor = "transparent";
    this.triggerBg = new Layer({
      height: 31,
      width: 51,
      borderRadius: 100,
      backgroundColor: "rgba(255,255,255,1)",
      superLayer: this,
      y: Align.center,
      borderWidth: 2,
      borderColor: "rgba(0,0,0,0.1)"
    });
    this.triggerBtn = new Layer({
      width: 28,
      borderRadius: 28,
      height: 28,
      parent: this,
      backgroundColor: "#fff",
      shadowSpread: 0,
      shadowColor: "rgba(0,0,0,0.25)",
      shadowY: 3,
      shadowBlur: 3,
      x: Align.left,
      y: Align.center,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.1)"
    });
    this.triggerBtn.states.add({
      ON: {
        x: Align.right
      }
    });
    this.triggerBg.states.add({
      ON: {
        backgroundColor: this.themeColor,
        borderColor: "rgba(0,0,0,0)"
      }
    });
    this.triggerBtn.states.animationOptions = {
      curve: "spring(200,30,0)"
    };
    this.triggerBg.states.animationOptions = {
      time: 1,
      curve: 'ease'
    };
    this.onTap(this.toggle);
  }

  Trigger.prototype.toggle = function() {
    var i, layer, len, ref, results;
    if (!this.triggerBg.isAnimating) {
      ref = this.children;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        layer = ref[i];
        results.push(layer.states.next());
      }
      return results;
    }
  };

  return Trigger;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdXG5cbmV4cG9ydHMuVHJpZ2dlciA9IGNsYXNzIFRyaWdnZXIgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3Rvcjoob3B0aW9ucykgLT5cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0b3B0aW9ucy50aGVtZUNvbG9yIHx8PSBcIiMyM2ZmMDZcIlxuXHRcdEB0aGVtZUNvbG9yPW5ldyBDb2xvciBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRAd2lkdGg9NTFcblx0XHRAaGVpZ2h0PTMxXG5cdFx0QGJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcblx0XHRAdHJpZ2dlckJnID0gbmV3IExheWVyXG5cdFx0XHRoZWlnaHQ6IDMxXG5cdFx0XHR3aWR0aDogNTFcblx0XHRcdGJvcmRlclJhZGl1czogMTAwXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cdFx0XHRzdXBlckxheWVyOiBAXG5cdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdGJvcmRlcldpZHRoOiAyXG5cdFx0XHRib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMSlcIlxuXHRcdFxuXHRcdEB0cmlnZ2VyQnRuID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogMjhcdFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyOFxuXHRcdFx0aGVpZ2h0OiAyOFxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsMC4yNSlcIlxuXHRcdFx0c2hhZG93WTogM1xuXHRcdFx0c2hhZG93Qmx1cjogM1xuXHRcdFx0eDogQWxpZ24ubGVmdFxuXHRcdFx0eTogQWxpZ24uY2VudGVyXG5cdFx0XHRib3JkZXJXaWR0aDogMVxuXHRcdFx0Ym9yZGVyQ29sb3I6IFwicmdiYSgwLDAsMCwwLjEpXCJcblx0XHRcblx0XHRAdHJpZ2dlckJ0bi5zdGF0ZXMuYWRkXG5cdFx0XHRPTjpcblx0XHRcdFx0eDogQWxpZ24ucmlnaHRcblx0XHRcblx0XHRAdHJpZ2dlckJnLnN0YXRlcy5hZGRcblx0XHRcdE9OOlxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEB0aGVtZUNvbG9yXG5cdFx0XHRcdGJvcmRlckNvbG9yOlwicmdiYSgwLDAsMCwwKVwiXG5cdFx0XG5cdFx0QHRyaWdnZXJCdG4uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSBcblx0XHRcdGN1cnZlOlwic3ByaW5nKDIwMCwzMCwwKVwiXG5cdFx0QHRyaWdnZXJCZy5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOjFcblx0XHRcdGN1cnZlOidlYXNlJ1xuXHRcdCN0b2dnbGUgb24gdGFwIGV2ZW50XG5cdFx0QC5vblRhcCBAdG9nZ2xlXG5cblx0dG9nZ2xlOiAoKSA9PlxuXHRcdGlmICFAdHJpZ2dlckJnLmlzQW5pbWF0aW5nIHRoZW4gbGF5ZXIuc3RhdGVzLm5leHQoKSBmb3IgbGF5ZXIgaW4gQC5jaGlsZHJlbiBcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FESUEsSUFBQSxPQUFBO0VBQUE7Ozs7QUFBQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQOztBQUVsQixPQUFPLENBQUMsT0FBUixHQUF3Qjs7O0VBQ1gsaUJBQUMsT0FBRDs7SUFDWCx5Q0FBTSxPQUFOO0lBQ0EsT0FBTyxDQUFDLGVBQVIsT0FBTyxDQUFDLGFBQWU7SUFDdkIsSUFBQyxDQUFBLFVBQUQsR0FBZ0IsSUFBQSxLQUFBLENBQU0sT0FBTyxDQUFDLFVBQWQ7SUFDaEIsSUFBQyxDQUFBLEtBQUQsR0FBTztJQUNQLElBQUMsQ0FBQSxNQUFELEdBQVE7SUFDUixJQUFDLENBQUEsZUFBRCxHQUFtQjtJQUVuQixJQUFDLENBQUEsU0FBRCxHQUFpQixJQUFBLEtBQUEsQ0FDaEI7TUFBQSxNQUFBLEVBQVEsRUFBUjtNQUNBLEtBQUEsRUFBTyxFQURQO01BRUEsWUFBQSxFQUFjLEdBRmQ7TUFHQSxlQUFBLEVBQWlCLHFCQUhqQjtNQUlBLFVBQUEsRUFBWSxJQUpaO01BS0EsQ0FBQSxFQUFHLEtBQUssQ0FBQyxNQUxUO01BTUEsV0FBQSxFQUFhLENBTmI7TUFPQSxXQUFBLEVBQWEsaUJBUGI7S0FEZ0I7SUFVakIsSUFBQyxDQUFBLFVBQUQsR0FBa0IsSUFBQSxLQUFBLENBQ2pCO01BQUEsS0FBQSxFQUFPLEVBQVA7TUFDQSxZQUFBLEVBQWMsRUFEZDtNQUVBLE1BQUEsRUFBUSxFQUZSO01BR0EsTUFBQSxFQUFRLElBSFI7TUFJQSxlQUFBLEVBQWlCLE1BSmpCO01BS0EsWUFBQSxFQUFjLENBTGQ7TUFNQSxXQUFBLEVBQWEsa0JBTmI7TUFPQSxPQUFBLEVBQVMsQ0FQVDtNQVFBLFVBQUEsRUFBWSxDQVJaO01BU0EsQ0FBQSxFQUFHLEtBQUssQ0FBQyxJQVRUO01BVUEsQ0FBQSxFQUFHLEtBQUssQ0FBQyxNQVZUO01BV0EsV0FBQSxFQUFhLENBWGI7TUFZQSxXQUFBLEVBQWEsaUJBWmI7S0FEaUI7SUFlbEIsSUFBQyxDQUFBLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBbkIsQ0FDQztNQUFBLEVBQUEsRUFDQztRQUFBLENBQUEsRUFBRyxLQUFLLENBQUMsS0FBVDtPQUREO0tBREQ7SUFJQSxJQUFDLENBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFsQixDQUNDO01BQUEsRUFBQSxFQUNDO1FBQUEsZUFBQSxFQUFpQixJQUFDLENBQUEsVUFBbEI7UUFDQSxXQUFBLEVBQVksZUFEWjtPQUREO0tBREQ7SUFLQSxJQUFDLENBQUEsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBbkIsR0FDQztNQUFBLEtBQUEsRUFBTSxrQkFBTjs7SUFDRCxJQUFDLENBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBbEIsR0FDQztNQUFBLElBQUEsRUFBSyxDQUFMO01BQ0EsS0FBQSxFQUFNLE1BRE47O0lBR0QsSUFBQyxDQUFDLEtBQUYsQ0FBUSxJQUFDLENBQUEsTUFBVDtFQWhEVzs7b0JBa0RaLE1BQUEsR0FBUSxTQUFBO0FBQ1AsUUFBQTtJQUFBLElBQUcsQ0FBQyxJQUFDLENBQUEsU0FBUyxDQUFDLFdBQWY7QUFBZ0M7QUFBQTtXQUFBLHFDQUFBOztxQkFBQSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQWIsQ0FBQTtBQUFBO3FCQUFoQzs7RUFETzs7OztHQW5EK0IifQ==
