class StringBuilder {
  constructor(string) {
  this.string = string;
  }
  getValue() {
    return this.string;
  }
  padEnd(str) {
    this.string += str;
  }
  padStart(str) {
    this.string = str + this.string;
  }
  padBoth(str) {
    this.string = str + this.string + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="