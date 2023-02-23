function preload(){


}
function setup(){
    canva= createCanvas(800,800);
   canva.position(350,250);
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    let c= color(235,220,32);
    noStroke();
    fill(c);
    rect(50,25,25,25);
    rect(525,300,25,25);
    rect(525,25,25,25);
    rect(50,300,25,25);
    
    let r= color(255,0,0);
    noStroke();
    fill(r);
rect(25,0,550,25,30);
rect(25,325,550,25,30);
let x= color(255,200,150);
    noStroke();
    fill(x);
    circle(35,30,20);
    circle(35,90,20);
    circle(35,150,20);
    circle(35,210,20);
    circle(35,270,20);
    circle(35,330,20);
    
    circle(565,30,20);
    circle(565,90,20);
    circle(565,150,20);
    circle(565,210,20);
    circle(565,270,20);
    circle(565,330,20);
    let y= color(120,200,255);
    noStroke();
    fill(y);
    ellipse(585,170,20,370);
    ellipse(15,170,20,370);


    
    
    image(video,50,50,500,250);
}
function snap(){
    save('howyoudoin');
}