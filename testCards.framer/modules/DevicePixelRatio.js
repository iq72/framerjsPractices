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
