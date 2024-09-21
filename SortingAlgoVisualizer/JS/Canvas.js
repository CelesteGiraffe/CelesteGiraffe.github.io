export class Canvas {
  constructor(numValue, s, height) {
    this.num = numValue;
    this.array = [];
    this.previousArray = [];
    this.canvas = document.getElementById(s);
    this.ctx = this.canvas.getContext("2d");
    this.height = height;
    this.setup();
  }

  setup() {
    this.array = this.createRandomArray(this.num);
    this.drawGraph(this.array);
  }

  drawLine(startX, startY, endX, endY, color) {
    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
    this.ctx.restore();
  }

  createRandomArray(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
      array[i] = Math.floor(Math.random() * this.height) + 1;
    }
    this.previousArray = array.slice();
    return array;
  }

  clear() {
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.restore();
  }

  resetGraph() {
    if (this.previousArray.length > 0) {
      this.clear();
      this.array = this.previousArray.slice();
      this.drawGraph(this.array);
    }
  }

  drawGraph(lines) {
    for (var i = 0; i < lines.length; i++) {
      this.drawLine(
        i * 15 + 5,
        this.canvas.height,
        i * 15 + 5,
        this.canvas.height - lines[i],
        "White"
      );
    }
  }
}
