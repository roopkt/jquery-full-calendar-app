var utility = (function (json) {
  return {
    parse: parse,
    stringify: stringify,
    uniqueId: uniqueId
  };
  function parse(strValue) {
    return json.parse(strValue);
  }
  function stringify(obj) {
    return json.stringify(obj);
  }
  function uniqueId() {
    return "id" + Math.random().toString(16).slice(2);
  }
}(JSON));