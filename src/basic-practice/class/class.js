// OOP w/ function and Function.prototype
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function() {
//   
// }

// Color.prototype.hex = function() {
//   const { r, g, b } = this
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a=1.0) {
//   const { r, g, b } = this
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// }


// OOP w/ class
class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  innerRGB() {
    const { r, g, b } = this
    return `${r}, ${g}, ${b}`;

  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  hex() {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  rgba(a=1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
}

const color = new Color(255, 255, 255);
console.log(color.rgba(0.5))
console.log(color.rgb())
console.log(color.hex())