var contents = ""
let specie = ""
//--------------

function setBG(){
  var val = int(meter.getValue()*10000)
  var col = int(map(val, -100, 700, 10, 100))
  //console.log(col)
  background(int(col))
}

function setup() { 
  
  createCanvas(windowWidth, windowHeight);
  fill(200)
  textSize(80)
  
  const mic = new Tone.UserMedia();
  mic.open();
// connect mic to the meter
  mic.connect(meter);
  setInterval(function(){ setBG(); }, 100);
} 

function draw() {   

  text(specie, 30, height/2)
}

//------------------------ USER INTERFACE -----------------------------//
function mousePressed(){
  run()
}
function keyPressed() {
  
  contents += key;

  switch(keyCode) {
    case 32: //space bar
      kick.triggerAttackRelease("C2", "1n");
      break;
    case 8: //backspace
      synth.triggerAttackRelease(["B2","B3","B4","B5"], "1n");
      break;
    case 46: //delete
      synth.triggerAttackRelease(["B2","B3","B4","B5"], "4m");
      break;
    case 186: //;:
      //something?
      break;
    case 188: //,
      synth.triggerAttackRelease(["F3", "F4", "G#4", "D#5"], "2m");
      break;
    case 190: //.
      synth.triggerAttackRelease(["F3", "G#3", "C4", "F4", "G#4", "C5", "F5"], "2m");
      break;
    case 191: // /?
      synth.triggerAttackRelease(["F3", "A#3", "D#4", "F4", "A#4", "D#5", "F5"], "2m");
      break;
    case 222: //'"
      //something sustained
      break;
    case 16: //SHIFT
      //something sustained
      break;
    case 13: //RETURN
      //something sustained
      break;

      
    case 65: //a
      synth.triggerAttackRelease("D#1", "1m");
      break;
    case 66: //b
      synth2.triggerAttackRelease("F1", "1n");
    	break;
    case 67: //c
      synth2.triggerAttackRelease("A#1", "1n");
    	break;
    case 68: //d
      synth.triggerAttackRelease("C2", "1n");
    	break;
    case 69: //e
      synth3.triggerAttackRelease("D#2", "1n");
    	break;
    case 70: //f  
      synth.triggerAttackRelease("F2", "1n");
    	break;
    case 71: //g
      synth.triggerAttackRelease("G#2", "1n");
    	break;
    case 72: //h
      synth.triggerAttackRelease("A#2", "1n");
      break;
    case 73: //i
      synth3.triggerAttackRelease("C3", "1n");
    	break;
    case 74: //j
      synth.triggerAttackRelease("F3", "1n");
    	break;
    case 75: //k
      synth.triggerAttackRelease("G#3", "1n");
    	break;
    case 76: //l
      synth.triggerAttackRelease("A#3", "1n");
    	break;
    case 77: //m
      synth2.triggerAttackRelease("C4", "1n");
    	break;
    case 78: //n
      synth2.triggerAttackRelease("D#4", "1n");
    	break;
    case 79: //o
      synth3.triggerAttackRelease("F4", "1n");
    	break;
    case 80: //p
      synth3.triggerAttackRelease("G#4", "1n");
    	break;
    case 81: //q
      synth3.triggerAttackRelease("A#4", "1n");
    	break;
    case 82: //r
      synth3.triggerAttackRelease("C5", "1n");
    	break;
    case 83: //s
      synth.triggerAttackRelease("D#5", "1n");
    	break;
    case 84: //t
      synth3.triggerAttackRelease("F5", "1n");
    	break;
    case 85: //u
      synth3.triggerAttackRelease("G#5", "1n");
    	break;
    case 86: //v
      synth2.triggerAttackRelease("A#5", "1n");
    	break;
    case 87: //w
      synth3.triggerAttackRelease("C6", "1n");
    	break;
    case 88: //x
      synth2.triggerAttackRelease("D#6", "1n");
    	break;
    case 89: //y
      synth3.triggerAttackRelease("F6", "1n");
    	break;
    case 90: //z
      synth2.triggerAttackRelease("G#6", "1n");
    	break;
    default:
      break;
  }
}