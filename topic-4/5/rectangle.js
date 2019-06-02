class Rectangle {
  
    constructor(paramPosX, paramPosY, paramWidth, paramHeight, paramColor) {
        
      this.posX = paramPosX;
      this.posY = paramPosY;
      this.width = paramWidth;
      this.height = paramHeight;
      this.color = paramColor;
    }
  
    draw() {

      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.posX, this.posY, this.width, this.height);
      ctx.closePath();
      ctx.stroke()
    }
  }