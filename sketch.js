var bird;
var pipes=[];
const frames=40;
var live=10;
var inside=7;
var score=0;
var level=1; 
var levelFactor=5;
var sound;
var sound2;

var w=document.documentElement.clientWidth;
var h=document.documentElement.clientHeight;
function preload(){
	sound=loadSound("sounds/Input/Input-03.mp3");
	sound2=loadSound("sounds/error.mp3");
}
function setup() {
	//createCanvas(500,700);
	createCanvas(w*0.7,h*0.9);
	bird=new Bird();
	pipes.push(new Pipe());
}


function draw() {
	background(0);
	for(var i=pipes.length-1;i>=0;i--){//inverse order so we don't skip elements
		pipes[i].show();
		pipes[i].update(level);
		
		if(pipes[i].hits(bird)){
			bird.y=height/2;
			sound2.setVolume(0.2);
			sound2.play();
			console.log("HIT");
			score-=2; 
			if(score<=0){
				score=0;
			}
	 		live--;
			if(live<=0){
				alert("Points:"+score,width/2,height/2);
				score=0;
			document.location.reload();
			}
		}
		if(pipes[i].offscreen()){
			pipes.splice(i,1);//deletes pipes offscreen
			sound.setVolume(0.1);
			sound.play();
			score++; 
			if(score==level*15+levelFactor){//
				level++;
			}
		}		
	}
	fill(255);
	text("Lives:"+live+"\tPoints:"+score,30,20,100);
		text("Level:"+level,width-width/5,20,40);
	if(frameCount%(frames)==0){//new pipe each n frames
		pipes.push(new Pipe());
	}
	
	
	bird.update(level);
	bird.show();
}
function keyPressed(){
	if(key==' '){
		bird.up();
	}
}

function mousePressed(){
	bird.up();
}