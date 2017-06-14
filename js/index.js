var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//出现中心点在中心的三角形
//transform-origin改变绘图原点
var x = canvas.width / 2;
var y = canvas.height / 2;
ctx.translate(x, y);


//绘制三角形
function triangle(i, color) {
    var a = i * 6;
    var height = a * Math.sin(Math.PI / 3);
    ctx.rotate(0.2); //三角形旋转
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(height, a / 2);
    ctx.lineTo(height, -a / 2);
    ctx.fillStyle = color; //以纯色绿色填充
    ctx.fill(); //闭合形状并且以填充方式绘制出来
    ctx.restore();
}

function randomColor(){
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            return "rgb("+r+","+g+","+b+")";
        }

//循环出多个三角形
for (var i = 200; i > 3; i--) {

    //三角形颜色
    var color = randomColor()
    triangle(i, color)
}