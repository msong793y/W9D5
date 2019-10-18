console.log("here");

const DomNodeCollector = require("./dom_node_collection.js");

window.$l = function (selector) {
  
  if ((selector instanceof HTMLElement) || (typeof selector === "string")) {
    let arr = Array.from(selector);
    let instance = new DOMNodeCollector(arr);
  }

  // const elementList = this.querySelectorAll(selector);
  // return elementList;
}



