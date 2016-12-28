const pipeWidth=60;
const speed=6;


function Pipe(){
	/*this.top=random(100,height/2);
	this.bottom=random(100,height/2);*/
	var spacing=random(150,height/3);
	var centery=random(spacing,height-spacing);
	this.top=centery-spacing/2;
	if(this.top>this.topLast-height/2-pipeWidth){
		this.top=this.topLast+pipeWidth*2;
	}
	this.bottom=height-(centery+spacing/2);
	if(this.bottom>this.bottomLast+height/2+pipeWidth/2){
		this.bottom=this.bottomLast;
	}
	this.topLast=this.top;
	this.bottomLast=this.bottom;


	this.x=width;
	this.w=pipeWidth;
	this.speed=speed;
	this.highlight=false;
	
	
	this.show=function()	{
		fill(0,240,220);
		if(this.highlight){
			fill(255,91,0);
		}
		rect(this.x,0,this.w,this.top);
		rect(this.x,height-this.bottom,this.w,this.bottom);
	}
	
	this.update=function(level){
		this.x-=this.speed+level*0.6;//moves to the left
	}
	
	this.offscreen=function(){
		if(this.x<-this.w){
			return true;
		}else{
			return false;
		}
	}
	
	this.hits=function(bird){
		if(bird.y+(bird.size/2)<this.top||bird.y+(bird.size/2)>height-this.bottom){
			if(bird.x+(bird.size/2)>this.x && bird.x+(bird.size/2)<this.x+this.w){
				this.highlight=true;
				this.x=this.x-bird.x-bird.size;
			return true;
		 }
		}
		 this.highlight=false;
		return false;
		
	}
	
	
	
}