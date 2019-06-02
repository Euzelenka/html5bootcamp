class Text {

    constructor(paramText, paramWidth, paramHeight, paramFont) {
        this.text = paramText;
        this.height = paramHeight;
        this.width = paramWidth;
        this.font = paramFont;
    }

    draw() {
        
        ctx.beginPath();
        ctx.font = this.font;
        ctx.strokeText(this.text,this.width,this.height);
        ctx.closePath();
        ctx.stroke()
    }
}