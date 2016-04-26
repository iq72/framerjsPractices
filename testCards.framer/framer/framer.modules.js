require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"DevicePixelRatio":[function(require,module,exports){
exports.DevicePixelRatio = (function() {
  var VALUE, dp, log;

  function DevicePixelRatio() {}

  log = function(v) {
    console.log("DevicePixelRatio set as:", v);
    return v;
  };

  dp = function() {
    var devicePixelRatio, device_2x, device_3p5x, device_3x, i, initialValue, j, k, len, len1, len2, ref, ref1, ref2, value;
    initialValue = 1;
    value = initialValue;
    if (Utils.isFramerStudio() || Utils.isDesktop()) {
      ref = ['apple-', 'google-nexus-', 'iphone-6-', 'iphone-5', 'ipad-air', 'nexus-9', 'applewatch'];
      for (i = 0, len = ref.length; i < len; i++) {
        device_2x = ref[i];
        if (_.startsWith(Framer.Device.deviceType, device_2x)) {
          value = 2;
        }
      }
      ref1 = ['apple-iphone-6s-plus', 'google-nexus-5', 'htc-one-', 'microsoft-lumia-', 'samsung-galaxy-note-', 'iphone-6plus', 'nexus-5'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        device_3x = ref1[j];
        if (_.startsWith(Framer.Device.deviceType, device_3x)) {
          value = 3;
        }
      }
      ref2 = ['google-nexus-6'];
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        device_3p5x = ref2[k];
        if (_.startsWith(Framer.Device.deviceType, device_3p5x)) {
          value = 3.5;
        }
      }
    }
    if (value !== initialValue) {
      return log(value);
    }
    if (!Utils.isDesktop()) {
      devicePixelRatio = Utils.devicePixelRatio();
      if (devicePixelRatio > initialValue) {
        value = devicePixelRatio;
      }
    }
    return log(value);
  };

  VALUE = dp();

  DevicePixelRatio.calc = function(v) {
    return v * VALUE;
  };

  DevicePixelRatio.value = VALUE;

  return DevicePixelRatio;

})();

exports.dp = exports.DevicePixelRatio.calc;

},{}],"DevicePixelRatio":[function(require,module,exports){
exports.DevicePixelRatio = (function() {
  var VALUE, dp, log;

  function DevicePixelRatio() {}

  log = function(v) {
    console.log("DevicePixelRatio set as:", v);
    return v;
  };

  dp = function() {
    var devicePixelRatio, device_2x, device_3p5x, device_3x, i, initialValue, j, k, len, len1, len2, ref, ref1, ref2, value;
    initialValue = 1;
    value = initialValue;
    if (Utils.isFramerStudio() || Utils.isDesktop()) {
      ref = ['apple-', 'google-nexus-', 'iphone-6-', 'iphone-5', 'ipad-air', 'nexus-9', 'applewatch'];
      for (i = 0, len = ref.length; i < len; i++) {
        device_2x = ref[i];
        if (_.startsWith(Framer.Device.deviceType, device_2x)) {
          value = 2;
        }
      }
      ref1 = ['apple-iphone-6s-plus', 'google-nexus-5', 'htc-one-', 'microsoft-lumia-', 'samsung-galaxy-note-', 'iphone-6plus', 'nexus-5'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        device_3x = ref1[j];
        if (_.startsWith(Framer.Device.deviceType, device_3x)) {
          value = 3;
        }
      }
      ref2 = ['google-nexus-6'];
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        device_3p5x = ref2[k];
        if (_.startsWith(Framer.Device.deviceType, device_3p5x)) {
          value = 3.5;
        }
      }
    }
    if (value !== initialValue) {
      return log(value);
    }
    if (!Utils.isDesktop()) {
      devicePixelRatio = Utils.devicePixelRatio();
      if (devicePixelRatio > initialValue) {
        value = devicePixelRatio;
      }
    }
    return log(value);
  };

  VALUE = dp();

  DevicePixelRatio.calc = function(v) {
    return v * VALUE;
  };

  DevicePixelRatio.value = VALUE;

  return DevicePixelRatio;

})();

exports.dp = exports.DevicePixelRatio.calc;


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9pcTcyL0RvY3VtZW50cy9naXQvZnJhbWVyanNQcmFjdGljZXMvdGVzdENhcmRzLmZyYW1lci9tb2R1bGVzL0RldmljZVBpeGVsUmF0aW8uanMiLCIvVXNlcnMvaXE3Mi9Eb2N1bWVudHMvZ2l0L2ZyYW1lcmpzUHJhY3RpY2VzL3Rlc3RDYXJkcy5mcmFtZXIvbW9kdWxlcy9EZXZpY2VQaXhlbFJhdGlvLmNvZmZlZSIsIi9Vc2Vycy9pcTcyL0RvY3VtZW50cy9naXQvZnJhbWVyanNQcmFjdGljZXMvdGVzdENhcmRzLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUTSxPQUFPLENBQUM7QUFLYixNQUFBOzs7O0VBQUEsR0FBQSxHQUFNLFNBQUMsQ0FBRDtJQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksMEJBQVosRUFBd0MsQ0FBeEM7QUFDQSxXQUFPO0VBRkY7O0VBSU4sRUFBQSxHQUFLLFNBQUE7QUFDSixRQUFBO0lBQUEsWUFBQSxHQUFlO0lBQ2YsS0FBQSxHQUFRO0lBRVIsSUFBRyxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsSUFBMEIsS0FBSyxDQUFDLFNBQU4sQ0FBQSxDQUE3QjtBQUdDO0FBQUEsV0FBQSxxQ0FBQTs7UUFDQyxJQUFhLENBQUMsQ0FBQyxVQUFGLENBQWEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUEzQixFQUF1QyxTQUF2QyxDQUFiO1VBQUEsS0FBQSxHQUFRLEVBQVI7O0FBREQ7QUFJQTtBQUFBLFdBQUEsd0NBQUE7O1FBQ0MsSUFBYSxDQUFDLENBQUMsVUFBRixDQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBM0IsRUFBdUMsU0FBdkMsQ0FBYjtVQUFBLEtBQUEsR0FBUSxFQUFSOztBQUREO0FBSUE7QUFBQSxXQUFBLHdDQUFBOztRQUNDLElBQWUsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQTNCLEVBQXVDLFdBQXZDLENBQWY7VUFBQSxLQUFBLEdBQVEsSUFBUjs7QUFERCxPQVhEOztJQWVBLElBQXdCLEtBQUEsS0FBUyxZQUFqQztBQUFBLGFBQU8sR0FBQSxDQUFJLEtBQUosRUFBUDs7SUFHQSxJQUFBLENBQU8sS0FBSyxDQUFDLFNBQU4sQ0FBQSxDQUFQO01BQ0MsZ0JBQUEsR0FBbUIsS0FBSyxDQUFDLGdCQUFOLENBQUE7TUFFbkIsSUFBNEIsZ0JBQUEsR0FBbUIsWUFBL0M7UUFBQSxLQUFBLEdBQVEsaUJBQVI7T0FIRDs7QUFNQSxXQUFPLEdBQUEsQ0FBSSxLQUFKO0VBNUJIOztFQWlDTCxLQUFBLEdBQVEsRUFBQSxDQUFBOztFQUtSLGdCQUFDLENBQUMsSUFBRixHQUFVLFNBQUMsQ0FBRDtBQUFPLFdBQU8sQ0FBQSxHQUFJO0VBQWxCOztFQUVWLGdCQUFDLENBQUMsS0FBRixHQUFVOzs7Ozs7QUFLWCxPQUFPLENBQUMsRUFBUixHQUFhLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7OztBQ3ZHdEMsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnRzLkRldmljZVBpeGVsUmF0aW8gPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBWQUxVRSwgZHAsIGxvZztcblxuICBmdW5jdGlvbiBEZXZpY2VQaXhlbFJhdGlvKCkge31cblxuICBsb2cgPSBmdW5jdGlvbih2KSB7XG4gICAgY29uc29sZS5sb2coXCJEZXZpY2VQaXhlbFJhdGlvIHNldCBhczpcIiwgdik7XG4gICAgcmV0dXJuIHY7XG4gIH07XG5cbiAgZHAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGV2aWNlUGl4ZWxSYXRpbywgZGV2aWNlXzJ4LCBkZXZpY2VfM3A1eCwgZGV2aWNlXzN4LCBpLCBpbml0aWFsVmFsdWUsIGosIGssIGxlbiwgbGVuMSwgbGVuMiwgcmVmLCByZWYxLCByZWYyLCB2YWx1ZTtcbiAgICBpbml0aWFsVmFsdWUgPSAxO1xuICAgIHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIGlmIChVdGlscy5pc0ZyYW1lclN0dWRpbygpIHx8IFV0aWxzLmlzRGVza3RvcCgpKSB7XG4gICAgICByZWYgPSBbJ2FwcGxlLScsICdnb29nbGUtbmV4dXMtJywgJ2lwaG9uZS02LScsICdpcGhvbmUtNScsICdpcGFkLWFpcicsICduZXh1cy05JywgJ2FwcGxld2F0Y2gnXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkZXZpY2VfMnggPSByZWZbaV07XG4gICAgICAgIGlmIChfLnN0YXJ0c1dpdGgoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlLCBkZXZpY2VfMngpKSB7XG4gICAgICAgICAgdmFsdWUgPSAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWYxID0gWydhcHBsZS1pcGhvbmUtNnMtcGx1cycsICdnb29nbGUtbmV4dXMtNScsICdodGMtb25lLScsICdtaWNyb3NvZnQtbHVtaWEtJywgJ3NhbXN1bmctZ2FsYXh5LW5vdGUtJywgJ2lwaG9uZS02cGx1cycsICduZXh1cy01J107XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgZGV2aWNlXzN4ID0gcmVmMVtqXTtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUsIGRldmljZV8zeCkpIHtcbiAgICAgICAgICB2YWx1ZSA9IDM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlZjIgPSBbJ2dvb2dsZS1uZXh1cy02J107XG4gICAgICBmb3IgKGsgPSAwLCBsZW4yID0gcmVmMi5sZW5ndGg7IGsgPCBsZW4yOyBrKyspIHtcbiAgICAgICAgZGV2aWNlXzNwNXggPSByZWYyW2tdO1xuICAgICAgICBpZiAoXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzNwNXgpKSB7XG4gICAgICAgICAgdmFsdWUgPSAzLjU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBpbml0aWFsVmFsdWUpIHtcbiAgICAgIHJldHVybiBsb2codmFsdWUpO1xuICAgIH1cbiAgICBpZiAoIVV0aWxzLmlzRGVza3RvcCgpKSB7XG4gICAgICBkZXZpY2VQaXhlbFJhdGlvID0gVXRpbHMuZGV2aWNlUGl4ZWxSYXRpbygpO1xuICAgICAgaWYgKGRldmljZVBpeGVsUmF0aW8gPiBpbml0aWFsVmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBkZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9nKHZhbHVlKTtcbiAgfTtcblxuICBWQUxVRSA9IGRwKCk7XG5cbiAgRGV2aWNlUGl4ZWxSYXRpby5jYWxjID0gZnVuY3Rpb24odikge1xuICAgIHJldHVybiB2ICogVkFMVUU7XG4gIH07XG5cbiAgRGV2aWNlUGl4ZWxSYXRpby52YWx1ZSA9IFZBTFVFO1xuXG4gIHJldHVybiBEZXZpY2VQaXhlbFJhdGlvO1xuXG59KSgpO1xuXG5leHBvcnRzLmRwID0gZXhwb3J0cy5EZXZpY2VQaXhlbFJhdGlvLmNhbGM7XG4iLCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlZCBvbiAyMyBERUMgMjAxNSBieSBKb3JkYW4gRG9ic29uIC8gQGpvcmRhbmRvYnNvbiAvIGpvcmRhbkBicm90aGUucnNcbiMgVXBkYXRlZCBvbiAxMiBBUFIgMjAxNiBieSBKb3JkYW4gRG9ic29uIHdpdGggdGhhbmtzIHRvIE5pa29sYXkgQmVyZXpvdnNraXkhXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiMgVXNlIHRvIG1lYXN1cmUgcGl4ZWxzIGF0IDF4IGFuZCBoYXZlIGl0IGFkanVzdCBmb3IgdGhlIFBpeGVsIFJhdGlvXG4jXG4jIFRvIEdldCBTdGFydGVkLi4uXG4jXG4jICAxLiBQbGFjZSB0aGlzIGZpbGUgaW4gRnJhbWVyIFN0dWRpbyBtb2R1bGVzIGRpcmVjdG9yeVxuI1xuIyAgMi4gSW4geW91ciBwcm9qZWN0IGluY2x1ZGU6XG4jXG4jICAgICB7ZHB9ID0gcmVxdWlyZSAnRGV2aWNlUGl4ZWxSYXRpbydcbiNcbiMgIDMuIFdoZW4geW91IGNyZWF0ZSBhIGxheWVyIGRvIHNvIEAgMXggYW5kIGFkZCB0aGUgZHAgZnVuY3Rpb24gdG8gdGhlIHZhbHVlXG4jXG4jICAgICByZWN0ID0gbmV3IExheWVyXG4jICAgICAgIHdpZHRoOiAgZHAoMzAwKVxuIyAgICAgICBoZWlnaHQ6IGRwIDUwXG4jICAgICAgIHg6ICAgICAgKGRwIDE2KVxuI1xuIyAgNC4gVXNlIGl0IGZvciBtb3JlIHRoYW4gbGF5ZXIgc2l6ZS4gSGVyZSdzIGFkdmFuY2VkIHVzYWdlIGZvciBtdWx0aSBkZXZpY2VzOlxuI1xuI1x0XHRcdCMgQWRkIGEgbGlzdCByb3cgdy8gdGhlIGhlaWdodCAmIHRleHQgc2l6aW5nL2xheW91dCB1c2luZyBkcCgpXG4jXG4jICAgICBsaXN0Um93ID0gbmV3IExheWVyXG4jICAgICAgIHdpZHRoOiBTY3JlZW4ud2lkdGhcbiMgICAgICAgaGVpZ2h0OiBkcCA0NFxuIyAgICAgICBodG1sOiBcIkxpc3QgSXRlbVwiXG4jICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcbiMgICAgICAgY29sb3I6IFwiIzAwMFwiXG4jICAgICAgIHN0eWxlOlxuIyAgICAgICAgIGZvbnQ6IFwiNDAwICN7ZHAgMTR9cHgvI3tkcCA0Mn1weCAtYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EgTmV1ZVwiXG4jICAgICAgICAgdGV4dEluZGVudDogXCIje2RwIDE1fXB4XCJcbiNcbiMgXHRcdCMgQWRkIGEgY2hldnJvbiB3aXRoIHRoZSBzaXplLCByaWdodCBtYXJnaW4gJiBzaGFkb3cgc3Ryb2tlIHVzaW5nIGRwKClcbiNcbiMgICAgIGxpc3RDaGV2cm9uID0gbmV3IExheWVyXG4jICAgICBcdHN1cGVyTGF5ZXI6IGxpc3RSb3dcbiMgICAgIFx0d2lkdGg6ICBkcCA5XG4jICAgICBcdGhlaWdodDogZHAgOVxuIyAgICAgXHRtYXhYOiBsaXN0Um93LndpZHRoIC0gZHAgMTVcbiMgICAgIFx0eTogICAgbGlzdFJvdy5oZWlnaHQgLyAyXG4jICAgICBcdG9yaWdpblg6IDFcbiMgICAgIFx0b3JpZ2luWTogMFxuIyAgICAgXHRyb3RhdGlvbjogNDVcbiMgICAgIFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG4jICAgICBcdHN0eWxlOlxuIyAgICAgXHRcdGJveFNoYWRvdzogXCJpbnNldCAtI3tkcCAyfXB4ICN7ZHAgMn1weCAwICNCQ0JDQzFcIlxuI1xuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmNsYXNzIGV4cG9ydHMuRGV2aWNlUGl4ZWxSYXRpb1xuXG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHJpdmF0ZSBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0bG9nID0gKHYpIC0+XG5cdFx0Y29uc29sZS5sb2cgXCJEZXZpY2VQaXhlbFJhdGlvIHNldCBhczpcIiwgdlxuXHRcdHJldHVybiB2XG5cblx0ZHAgPSAoKSAtPlxuXHRcdGluaXRpYWxWYWx1ZSA9IDFcblx0XHR2YWx1ZSA9IGluaXRpYWxWYWx1ZVxuXHRcdCMgQ2hlY2sgaWYgaW4gU3R1ZGlvIG9yIERlc2t0b3AgdG8gZmlndXJlIG91dCB3aGF0IHRoZSBzY2FsaW5nIHNob3VsZCBiZVxuXHRcdGlmIFV0aWxzLmlzRnJhbWVyU3R1ZGlvKCkgb3IgVXRpbHMuaXNEZXNrdG9wKClcblxuXHRcdFx0IyBDaGVjayBmb3IgMnggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8yeCBpbiBbJ2FwcGxlLScsICdnb29nbGUtbmV4dXMtJywgJ2lwaG9uZS02LScsICdpcGhvbmUtNScsICdpcGFkLWFpcicsICduZXh1cy05JywgJ2FwcGxld2F0Y2gnXVxuXHRcdFx0XHR2YWx1ZSA9IDIgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzJ4KVxuXG5cdFx0XHQjIENoZWNrIGZvciAzeCBkZXZpY2VzXG5cdFx0XHRmb3IgZGV2aWNlXzN4IGluIFsnYXBwbGUtaXBob25lLTZzLXBsdXMnLCAnZ29vZ2xlLW5leHVzLTUnLCAnaHRjLW9uZS0nLCAnbWljcm9zb2Z0LWx1bWlhLScsICdzYW1zdW5nLWdhbGF4eS1ub3RlLScsICdpcGhvbmUtNnBsdXMnLCAnbmV4dXMtNSddXG5cdFx0XHRcdHZhbHVlID0gMyBpZiBfLnN0YXJ0c1dpdGgoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlLCBkZXZpY2VfM3gpXG5cblx0XHRcdCMgQ2hlY2sgZm9yIDMuNXggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8zcDV4IGluIFsnZ29vZ2xlLW5leHVzLTYnXVxuXHRcdFx0XHR2YWx1ZSA9IDMuNSBpZiBfLnN0YXJ0c1dpdGgoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlLCBkZXZpY2VfM3A1eClcblxuXHRcdCMgUmV0dXJuIGlmIHRoZSB2YWx1ZSBjaGFuZ2VkLi4uIG90aGVyd2lzZSBjb250aW51ZVxuXHRcdHJldHVybiBsb2cgdmFsdWUgdW5sZXNzIHZhbHVlIGlzIGluaXRpYWxWYWx1ZVxuXG5cdFx0IyBTZXQgVW5pdHMgYmFzZWQgb24gRGV2aWNlIFBpeGVsIFJhdGlvIEV4Y2VwdCBmb3IgRGVza3RvcFxuXHRcdHVubGVzcyBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0ZGV2aWNlUGl4ZWxSYXRpbyA9IFV0aWxzLmRldmljZVBpeGVsUmF0aW8oKVxuXHRcdFx0IyBpZiBpdCdzIGdyZWF0ZXIgdGhhbiAxIHRoZW4gdXBkYXRlIGl0IVxuXHRcdFx0dmFsdWUgPSBkZXZpY2VQaXhlbFJhdGlvIGlmIGRldmljZVBpeGVsUmF0aW8gPiBpbml0aWFsVmFsdWVcblxuXHRcdCMgcmV0dXJuIHRoZSB2YWx1ZSBldmVuIGlmIGl0IGhhc24ndCBjaGFuZ2VkIGFuZCBsb2cgaXQgZXZlcnl0aW1lIGl0cyBzZXRcblx0XHRyZXR1cm4gbG9nIHZhbHVlXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBDb25zdGFudCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHRWQUxVRSA9IGRwKClcblxuXHQjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHQjIFB1YmxpYyBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cdEAuY2FsYyAgPSAodikgLT4gcmV0dXJuIHYgKiBWQUxVRVxuXG5cdEAudmFsdWUgPSBWQUxVRVxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyBDcmVhdGUgYSBzaG9ydGhhbmQgdG8gZ2V0IGRpcmVjdGx5IHRvIHRoZSBjYWxjIHN0YXRlbWVudFxuXG5leHBvcnRzLmRwID0gZXhwb3J0cy5EZXZpY2VQaXhlbFJhdGlvLmNhbGNcbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
