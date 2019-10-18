class DomNodeCollection {

  constructor(arr) {
    this.array = arr;
  }

  html(str) {
    if (str !== "") {
      this.innerHTML = str;
      return this.innerHTML;
    } else {
      return this.array[0].innerHTML;
    }
    
  }

  empty() {
    this.html("");
  }

  append() {

  }

  attr() {
    
  }

  addClass() {
    this.nodeList.forEach( node => node);
  }

  removeClass() {
    this.nodeList.forEach( node => node = "");
  }

}

module.exports = DomNodeCollection;