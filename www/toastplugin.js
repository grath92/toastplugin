//Constructor
function ToastPlugin() {}


// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
ToastPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'ToastPlugin', 'show', [options]);
}


// Installation constructor that binds ToastyPlugin to window
ToastPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.toastPlugin = new ToastPlugin();
  return window.plugins.toastPlugin;
};

cordova.addConstructor(ToastPlugin.install);