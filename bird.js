 
function Bird(){
	this.size=32;
	this.y=height/2;
	this.x=85;
    this.gravity=0.85;
	this.velocity=0;
	this.lift=-15;
this.show=function(){
	fill(255);
	ellipse(this.x,this.y,this.size,this.size);
 }
 this.update=function(level){
	 this.velocity+=this.gravity;
	 this.velocity*=0.92;
	 this.y+=this.velocity; 
	 
	 if(this.y>height-this.size/2){//bottom threshold
		 this.y=height-this.size/2;
		this.velocity=0;
	 }
	 if(this.y<0){//top threshold
		 this.y=0+this.size/2;
		this.velocity=0;
	 }
 }
 
 this.up=function(){
		this.velocity+=this.lift;
 }
 
 
 
 
 }