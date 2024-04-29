let t = 0;

function preload(){
    bg = loadImage("resources/media/background.jpg")
    sat1 = loadImage("resources/media/sat1.gif")
    sat2 = loadImage("resources/media/sat2.gif")
    chatLeft = loadImage("resources/media/chatbox L.png")
    chatRight = loadImage("resources/media/chatbox R.png")
    bg2 = loadImage("resources/media/bg1.png")
    bg3 = loadImage("resources/media/bg2.png")
    bg4 = loadImage("resources/media/bg3.jpeg")
    bg5 = loadImage("resources/media/bg4.jpeg")
    bg6 = loadImage("resources/media/bg5.jpeg")
    bg7 = loadImage("resources/media/bg6.jpeg")
    chat1 = loadImage("resources/media/chat1.png")
    chat2 = loadImage("resources/media/chat2.png")
    chat3 = loadImage("resources/media/chat3.png")
    chat4 = loadImage("resources/media/chat4.png")
    chat5 = loadImage("resources/media/chat5.png")
    chat6 = loadImage("resources/media/chat6.png")
    chat7 = loadImage("resources/media/chat7.png")
    chat8 = loadImage("resources/media/chat8.png")
    chat812 = loadImage("resources/media/L5.png")
    chat9 = loadImage("resources/media/chat9.png")
    chat10 = loadImage("resources/media/chat10.png")
    chat11 = loadImage("resources/media/chat11.png")
    chat12 = loadImage("resources/media/chat12.png")
    chat13 = loadImage("resources/media/chat13.png")
    chat14 = loadImage("resources/media/chat14.png")
    chat15 = loadImage("resources/media/chat15.png")
    chat16 = loadImage("resources/media/chat16.png")
    title = loadImage("resources/media/F.png")
    title2 = loadImage("resources/media/L.png")
  }
  
  function setup() {
  createCanvas(1920, 1080);
  }
  function playSound(){
    let sounds = new Audio ("resources/media/Audio for Project Audio Only.mp3")
    sounds.play();
  }
  function draw() {
    imageMode(CORNER);
    noCursor();
    background(0,0,0);
    image(bg,0,0, 2100 ,1100);
    image(sat1, 300, 200, 530, 560);
    image(sat2, 1100, 250, 510,540);
    fill(255);
    textSize(45);
    image(title,400,900,1100,100);
        if (t == 1) {
          playSound();
        clear();
        image(bg5,0,0,width,height);
        image(chat1,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 2) {
        clear();
        image(bg,0,0,width,height);
        image(chat2,450,150,400,300);
        image(sat2, 700, 150, 930,960);
      } else if (t == 3) {
        clear();
        image(bg,0,0,width,height);
        image(chat3,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 4) {
        clear();
        image(bg,0,0,width,height);
        image(chat4,350,100,750,550);
        image(sat2, 900, 150, 930,960);
      } else if (t == 5) {
        clear();
        image(bg7,0,0,width,height);
        image(chat5,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 6) {
        clear();
        image(bg3,0,0,width,height);
        image(chat6,150,100,750,550);
        image(sat2, 700, 150, 930,960);
      } else if (t == 7) {
        clear();
        image(bg,0,0,width,height);
        image(chat7,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 8) {
        clear();
        image(bg,0,0,width,height);
        image(chat8,150,100,750,550);
        image(sat2, 700, 150, 930,960);
      } else if (t == 9) {
        clear();
        image(bg,0,0,width,height);
        image(chat812,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 10) {
        clear();
        image(bg,0,0,width,height);
        image(chat9,150,100,750,550);
        image(sat2, 700, 150, 930,960);
      } else if (t == 11) {
        clear();
        image(bg,0,0,width,height);
        image(chat11,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 12) {
        clear();
        image(bg2,0,0,width,height);
        image(chat12,150,100,750,550);
        image(sat2, 700, 150, 930,960);
      } else if (t == 13) {
        clear();
        image(bg,0,0,width,height);
        image(chat13,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 14) {
        clear();
        image(bg6,0,0,width,height);
        image(chat14,150,100,750,550);
        image(sat2, 700, 150, 930,960);
      } else if (t == 15) {
        clear();
        image(bg3,0,0,width,height);
        image(chat15,1000,200,400,300);
        image(sat1, 240, 150, 930,960);
      } else if (t == 16) {
        clear();
        image(bg,0,0,width,height);
        image(chat16,150,100,750,550);
        image(sat2, 700, 150, 930,960);
      } else if (t == 17) {
        clear();
        image(title2,400,800,1200,100);
  }
}
  
  function mousePressed() {
        t++;
        if (t > 17) {
          t = 0;
        }
     }