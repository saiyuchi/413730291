let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle =0
let r =10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //NotoSansTC-VariableFont_wght.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================


function setup() { //設定環境
  createCanvas(windowWidth, windowHeight);//設定畫布的寬高
  angleMode(DEGREES)
  background("#caf0f8") //背景顏色
  //=====================================================
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
  //===================================================================
  for (let i=0; i<points.length-1; i++) { 
   // text(str(i),points[i].x,points[i].y) //在()座標上，顯示一個文字(數字)
   fill("#ffc2d1")
   //noStroke()
   strokeWeight(1)
   ellipse(points[i].x+sin(angle),points[i].y,10)
   stroke("#4361ee")
   strokeWeight(5)
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y) 
    //畫線，兩個點構成一條線
 } 
 //====================================================================
 angle =angle+10
}

function draw() { //畫圖，每秒會進入執行程式60次
 

  background("#caf0f8");
  //textSize(30)
  //text(mouseX+":"+mouseY,width/2,height/2)

  translate(width/2,height/2)
  rotate((frameCount)%360)

  for (let i=0; i<points.length-1; i++) { 
    // text(str(i),points[i].x,points[i].y) //在()座標上，顯示一個文字(數字)
    fill("#ffc2d1")
    //noStroke()
    strokeWeight(1)
    //ellipse(points[i].x+r*sin(angle+i*10),points[i].y,10)
    stroke("#4361ee")
    strokeWeight(5)
     line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10)) 
     //畫線，兩個點構成一條線
  }
  //==================================== 
  angle=angle+10
}
