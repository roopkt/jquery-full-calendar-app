var logger = (function (window) {
  return {
    log: log
  };
  function log(msg, obj) {
    window.console.log(msg, obj);
  }
}(window));