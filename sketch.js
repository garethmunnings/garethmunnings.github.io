const PADDING = 610;
const ROWS = 70;
const COLUMNS = 70;
const CELL_SIZE = 10;
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 961;
const CANVAS_COLOR = 0;
const colours = new Array(200,22,22 , 245,90,1 , 255,206,1 , 100,212,12 , 50,120,12 , 70,75,224 , 70,232,250 ,  147,60,0 , 22,22,22 ,  220,220,220);
let CELL_COLOR1;
let CELL_COLOR2;
let CELL_COLOR3;

function setup() {
  CELL_COLOR1 = 22;
  CELL_COLOR2 = 22;
  CELL_COLOR3 = 22;
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(CANVAS_COLOR);
  noStroke();

  fill(CELL_COLOR1);
  for (let col=0;col<COLUMNS;col++) {
    for (let row=0;row<ROWS;row++) {
      let left = PADDING+(col*CELL_SIZE);
      let top = 200+(row*CELL_SIZE);
      let size = CELL_SIZE - 2;
      rect(left,top,size,size);
    }
  }

  for (let col=0;col<10;col++) 
  {
    fill(colours[col*3], colours[col*3+1], colours[col*3+2]);
    let left = PADDING+(col*70);
    let top = 70;
    let size = 64;
    rect(left, top, size, size);    
  }
}

function mouseClicked()
  {
    if(mouseY >= 70 && mouseY <= 134)
    {      
      let pos = Math.floor((mouseX - PADDING)/70);           
      CELL_COLOR1 = colours[pos*3];
      CELL_COLOR2 = colours[pos*3+1];
      CELL_COLOR3 = colours[pos*3+2];      
      fill(CELL_COLOR1, CELL_COLOR2, CELL_COLOR3);      
    }
    else if(mouseY >= 200 && mouseY <= 899 && mouseX >= PADDING && mouseX <= PADDING+699)
    {      
      fill(CELL_COLOR1, CELL_COLOR2, CELL_COLOR3);
      let x = mouseX - (mouseX % 10);
      let y = mouseY - (mouseY % 10);
      rect(x,y, CELL_SIZE - 2, CELL_SIZE - 2);
    }
    else
    {}
    
  }

  function mouseDragged()
  {
    if(mouseY >= 70 && mouseY <= 134)
    {      
      let pos = Math.floor((mouseX - 100)/70);           
      CELL_COLOR1 = colours[pos*3];
      CELL_COLOR2 = colours[pos*3+1];
      CELL_COLOR3 = colours[pos*3+2];      
      fill(CELL_COLOR1, CELL_COLOR2, CELL_COLOR3);      
    }
    else if(mouseY >= 210 && mouseY <= 899 && mouseX >= PADDING && mouseX <= PADDING+689)
    {      
      fill(CELL_COLOR1, CELL_COLOR2, CELL_COLOR3);
      let x = mouseX - (mouseX % 10);
      let y = mouseY - (mouseY % 10);
      rect(x,y, CELL_SIZE - 2, CELL_SIZE - 2);
      rect(x, y - 10,CELL_SIZE - 2, CELL_SIZE - 2)
      rect(x + 10, y,CELL_SIZE - 2, CELL_SIZE - 2)
      rect(x + 10, y - 10,CELL_SIZE - 2, CELL_SIZE - 2)
    }
    else
    {}
  }
