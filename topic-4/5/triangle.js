class Triangle {

    constructor(paramX, paramY, paramColor) {

        this.x = paramX;
        this.y = paramY;
        this.color = paramColor;
    }

    draw() {

        ctx.beginPath();

        ctx.fillStyle = this.color;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.y + 130, this.y + 130);
        ctx.lineTo(this.y, this.y + 130);
        ctx.closePath();
        ctx.fill();
    }
}