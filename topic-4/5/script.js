

const ctx = document.getElementById('canvas').getContext('2d');

const triangle1 = new Triangle(180, 110, "rgb(245,242,0)");
triangle1.draw();
const triangle2 = new Triangle(110, 130, "rgb(43,205,183)");
triangle2.draw();

const rectangle1 = new Rectangle(900, 100, 55, 50, "rgb(200,0,0)");        
rectangle1.draw();
const rectangle2 = new Rectangle(920, 120, 55, 50, "rgba(0, 0, 200, 0.5)");        
rectangle2.draw();
        
const rectangle3 = new Rectangle(980, 300, 100, 100, "green");
rectangle3.draw();
        
const text = new Text("Hello World",700,100, "30px Arial");
text.draw();

const emoticon = new Emoticon();
emoticon.draw();
    

function draw() {

    const ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(250, 150, 300, 300); // clear canvas

    ctx.fillStyle = "rgb(115,20,92)";
    ctx.save();
    ctx.translate(400, 300);

    var time = new Date();
    //ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.rotate(0.5 * time.getSeconds() + (0.05 ));
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 50); // Shadow

    ctx.restore();
  

  window.requestAnimationFrame(draw);

}
window.requestAnimationFrame(draw);
