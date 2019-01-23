<template>
  <div>
    <canvas id="tutorial" width="150" height="150"></canvas>
    <canvas id="canvas1" width="300" height="300"></canvas>
    <canvas id="canvas" width="800" height="200"></canvas>
  </div>
</template>
<script>
export default {
  // el: '#tutorial',
  name:'cnvs',
  data(){
    return {

    }
  }
  ,
  created: ()=>{}
  ,
  mounted: function CnvsInit() {
      var canvas = document.getElementById('tutorial');
      if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        // drawing code here
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);

        ctx.strokeRect(50,50,50,50);

        ctx.beginPath();
        ctx.arc(75,75,50,0,Math.PI*2,true); // Внешняя окружность
        ctx.stroke();
/*
        var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas1ы').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);
}

init();
*/
var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
    if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
    else { clearX = CanvasXSize; }
    if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
    else { clearY = CanvasYSize; }
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
}

function draw() {
    //Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) { x = 0; }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}
      } else {
      // canvas-unsupported code here
      }
    }
  ,
  methods:{
    
  }  
}
</script>
<style lang="sass" scoped>

</style>


