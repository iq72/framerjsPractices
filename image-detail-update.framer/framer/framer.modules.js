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


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaXE3Mi9Eb2N1bWVudHMvZ2l0L0ZyYW1lclRlYWNoRXhhbXBsZXMvUHJvdG90eXBlcy9pbWFnZS1kZXRhaWwtdXBkYXRlLmZyYW1lci9tb2R1bGVzL0RldmljZVBpeGVsUmF0aW8uY29mZmVlIiwiL1VzZXJzL2lxNzIvRG9jdW1lbnRzL2dpdC9GcmFtZXJUZWFjaEV4YW1wbGVzL1Byb3RvdHlwZXMvaW1hZ2UtZGV0YWlsLXVwZGF0ZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNxRE0sT0FBTyxDQUFDO0FBS2IsTUFBQTs7OztFQUFBLEdBQUEsR0FBTSxTQUFDLENBQUQ7SUFDTCxPQUFPLENBQUMsR0FBUixDQUFZLDBCQUFaLEVBQXdDLENBQXhDO0FBQ0EsV0FBTztFQUZGOztFQUlOLEVBQUEsR0FBSyxTQUFBO0FBQ0osUUFBQTtJQUFBLFlBQUEsR0FBZTtJQUNmLEtBQUEsR0FBUTtJQUVSLElBQUcsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLElBQTBCLEtBQUssQ0FBQyxTQUFOLENBQUEsQ0FBN0I7QUFHQztBQUFBLFdBQUEscUNBQUE7O1FBQ0MsSUFBYSxDQUFDLENBQUMsVUFBRixDQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBM0IsRUFBdUMsU0FBdkMsQ0FBYjtVQUFBLEtBQUEsR0FBUSxFQUFSOztBQUREO0FBSUE7QUFBQSxXQUFBLHdDQUFBOztRQUNDLElBQWEsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQTNCLEVBQXVDLFNBQXZDLENBQWI7VUFBQSxLQUFBLEdBQVEsRUFBUjs7QUFERDtBQUlBO0FBQUEsV0FBQSx3Q0FBQTs7UUFDQyxJQUFlLENBQUMsQ0FBQyxVQUFGLENBQWEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUEzQixFQUF1QyxXQUF2QyxDQUFmO1VBQUEsS0FBQSxHQUFRLElBQVI7O0FBREQsT0FYRDs7SUFlQSxJQUF3QixLQUFBLEtBQVMsWUFBakM7QUFBQSxhQUFPLEdBQUEsQ0FBSSxLQUFKLEVBQVA7O0lBR0EsSUFBQSxDQUFPLEtBQUssQ0FBQyxTQUFOLENBQUEsQ0FBUDtNQUNDLGdCQUFBLEdBQW1CLEtBQUssQ0FBQyxnQkFBTixDQUFBO01BRW5CLElBQTRCLGdCQUFBLEdBQW1CLFlBQS9DO1FBQUEsS0FBQSxHQUFRLGlCQUFSO09BSEQ7O0FBTUEsV0FBTyxHQUFBLENBQUksS0FBSjtFQTVCSDs7RUFpQ0wsS0FBQSxHQUFRLEVBQUEsQ0FBQTs7RUFLUixnQkFBQyxDQUFDLElBQUYsR0FBVSxTQUFDLENBQUQ7QUFBTyxXQUFPLENBQUEsR0FBSTtFQUFsQjs7RUFFVixnQkFBQyxDQUFDLEtBQUYsR0FBVTs7Ozs7O0FBS1gsT0FBTyxDQUFDLEVBQVIsR0FBYSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Ozs7QUN2R3RDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIENyZWF0ZWQgb24gMjMgREVDIDIwMTUgYnkgSm9yZGFuIERvYnNvbiAvIEBqb3JkYW5kb2Jzb24gLyBqb3JkYW5AYnJvdGhlLnJzXG4jIFVwZGF0ZWQgb24gMTIgQVBSIDIwMTYgYnkgSm9yZGFuIERvYnNvbiB3aXRoIHRoYW5rcyB0byBOaWtvbGF5IEJlcmV6b3Zza2l5IVxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jIFVzZSB0byBtZWFzdXJlIHBpeGVscyBhdCAxeCBhbmQgaGF2ZSBpdCBhZGp1c3QgZm9yIHRoZSBQaXhlbCBSYXRpb1xuI1xuIyBUbyBHZXQgU3RhcnRlZC4uLlxuI1xuIyAgMS4gUGxhY2UgdGhpcyBmaWxlIGluIEZyYW1lciBTdHVkaW8gbW9kdWxlcyBkaXJlY3RvcnlcbiNcbiMgIDIuIEluIHlvdXIgcHJvamVjdCBpbmNsdWRlOlxuI1xuIyAgICAge2RwfSA9IHJlcXVpcmUgJ0RldmljZVBpeGVsUmF0aW8nXG4jXG4jICAzLiBXaGVuIHlvdSBjcmVhdGUgYSBsYXllciBkbyBzbyBAIDF4IGFuZCBhZGQgdGhlIGRwIGZ1bmN0aW9uIHRvIHRoZSB2YWx1ZVxuI1xuIyAgICAgcmVjdCA9IG5ldyBMYXllclxuIyAgICAgICB3aWR0aDogIGRwKDMwMClcbiMgICAgICAgaGVpZ2h0OiBkcCA1MFxuIyAgICAgICB4OiAgICAgIChkcCAxNilcbiNcbiMgIDQuIFVzZSBpdCBmb3IgbW9yZSB0aGFuIGxheWVyIHNpemUuIEhlcmUncyBhZHZhbmNlZCB1c2FnZSBmb3IgbXVsdGkgZGV2aWNlczpcbiNcbiNcdFx0XHQjIEFkZCBhIGxpc3Qgcm93IHcvIHRoZSBoZWlnaHQgJiB0ZXh0IHNpemluZy9sYXlvdXQgdXNpbmcgZHAoKVxuI1xuIyAgICAgbGlzdFJvdyA9IG5ldyBMYXllclxuIyAgICAgICB3aWR0aDogU2NyZWVuLndpZHRoXG4jICAgICAgIGhlaWdodDogZHAgNDRcbiMgICAgICAgaHRtbDogXCJMaXN0IEl0ZW1cIlxuIyAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG4jICAgICAgIGNvbG9yOiBcIiMwMDBcIlxuIyAgICAgICBzdHlsZTpcbiMgICAgICAgICBmb250OiBcIjQwMCAje2RwIDE0fXB4LyN7ZHAgNDJ9cHggLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhIE5ldWVcIlxuIyAgICAgICAgIHRleHRJbmRlbnQ6IFwiI3tkcCAxNX1weFwiXG4jXG4jIFx0XHQjIEFkZCBhIGNoZXZyb24gd2l0aCB0aGUgc2l6ZSwgcmlnaHQgbWFyZ2luICYgc2hhZG93IHN0cm9rZSB1c2luZyBkcCgpXG4jXG4jICAgICBsaXN0Q2hldnJvbiA9IG5ldyBMYXllclxuIyAgICAgXHRzdXBlckxheWVyOiBsaXN0Um93XG4jICAgICBcdHdpZHRoOiAgZHAgOVxuIyAgICAgXHRoZWlnaHQ6IGRwIDlcbiMgICAgIFx0bWF4WDogbGlzdFJvdy53aWR0aCAtIGRwIDE1XG4jICAgICBcdHk6ICAgIGxpc3RSb3cuaGVpZ2h0IC8gMlxuIyAgICAgXHRvcmlnaW5YOiAxXG4jICAgICBcdG9yaWdpblk6IDBcbiMgICAgIFx0cm90YXRpb246IDQ1XG4jICAgICBcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuIyAgICAgXHRzdHlsZTpcbiMgICAgIFx0XHRib3hTaGFkb3c6IFwiaW5zZXQgLSN7ZHAgMn1weCAje2RwIDJ9cHggMCAjQkNCQ0MxXCJcbiNcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5jbGFzcyBleHBvcnRzLkRldmljZVBpeGVsUmF0aW9cblxuXHQjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHQjIFByaXZhdGUgTWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cdGxvZyA9ICh2KSAtPlxuXHRcdGNvbnNvbGUubG9nIFwiRGV2aWNlUGl4ZWxSYXRpbyBzZXQgYXM6XCIsIHZcblx0XHRyZXR1cm4gdlxuXG5cdGRwID0gKCkgLT5cblx0XHRpbml0aWFsVmFsdWUgPSAxXG5cdFx0dmFsdWUgPSBpbml0aWFsVmFsdWVcblx0XHQjIENoZWNrIGlmIGluIFN0dWRpbyBvciBEZXNrdG9wIHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGUgc2NhbGluZyBzaG91bGQgYmVcblx0XHRpZiBVdGlscy5pc0ZyYW1lclN0dWRpbygpIG9yIFV0aWxzLmlzRGVza3RvcCgpXG5cblx0XHRcdCMgQ2hlY2sgZm9yIDJ4IGRldmljZXNcblx0XHRcdGZvciBkZXZpY2VfMnggaW4gWydhcHBsZS0nLCAnZ29vZ2xlLW5leHVzLScsICdpcGhvbmUtNi0nLCAnaXBob25lLTUnLCAnaXBhZC1haXInLCAnbmV4dXMtOScsICdhcHBsZXdhdGNoJ11cblx0XHRcdFx0dmFsdWUgPSAyIGlmIF8uc3RhcnRzV2l0aChGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUsIGRldmljZV8yeClcblxuXHRcdFx0IyBDaGVjayBmb3IgM3ggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8zeCBpbiBbJ2FwcGxlLWlwaG9uZS02cy1wbHVzJywgJ2dvb2dsZS1uZXh1cy01JywgJ2h0Yy1vbmUtJywgJ21pY3Jvc29mdC1sdW1pYS0nLCAnc2Ftc3VuZy1nYWxheHktbm90ZS0nLCAnaXBob25lLTZwbHVzJywgJ25leHVzLTUnXVxuXHRcdFx0XHR2YWx1ZSA9IDMgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzN4KVxuXG5cdFx0XHQjIENoZWNrIGZvciAzLjV4IGRldmljZXNcblx0XHRcdGZvciBkZXZpY2VfM3A1eCBpbiBbJ2dvb2dsZS1uZXh1cy02J11cblx0XHRcdFx0dmFsdWUgPSAzLjUgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzNwNXgpXG5cblx0XHQjIFJldHVybiBpZiB0aGUgdmFsdWUgY2hhbmdlZC4uLiBvdGhlcndpc2UgY29udGludWVcblx0XHRyZXR1cm4gbG9nIHZhbHVlIHVubGVzcyB2YWx1ZSBpcyBpbml0aWFsVmFsdWVcblxuXHRcdCMgU2V0IFVuaXRzIGJhc2VkIG9uIERldmljZSBQaXhlbCBSYXRpbyBFeGNlcHQgZm9yIERlc2t0b3Bcblx0XHR1bmxlc3MgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdGRldmljZVBpeGVsUmF0aW8gPSBVdGlscy5kZXZpY2VQaXhlbFJhdGlvKClcblx0XHRcdCMgaWYgaXQncyBncmVhdGVyIHRoYW4gMSB0aGVuIHVwZGF0ZSBpdCFcblx0XHRcdHZhbHVlID0gZGV2aWNlUGl4ZWxSYXRpbyBpZiBkZXZpY2VQaXhlbFJhdGlvID4gaW5pdGlhbFZhbHVlXG5cblx0XHQjIHJldHVybiB0aGUgdmFsdWUgZXZlbiBpZiBpdCBoYXNuJ3QgY2hhbmdlZCBhbmQgbG9nIGl0IGV2ZXJ5dGltZSBpdHMgc2V0XG5cdFx0cmV0dXJuIGxvZyB2YWx1ZVxuXG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgQ29uc3RhbnQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0VkFMVUUgPSBkcCgpXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBQdWJsaWMgTWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHRALmNhbGMgID0gKHYpIC0+IHJldHVybiB2ICogVkFMVUVcblxuXHRALnZhbHVlID0gVkFMVUVcblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlIGEgc2hvcnRoYW5kIHRvIGdldCBkaXJlY3RseSB0byB0aGUgY2FsYyBzdGF0ZW1lbnRcblxuZXhwb3J0cy5kcCA9IGV4cG9ydHMuRGV2aWNlUGl4ZWxSYXRpby5jYWxjXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19