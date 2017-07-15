export const Clock = function(canvas){

	this.init(canvas);
	this.run(canvas);
}

Clock.prototype.init = function(can){
	can.width = can.clientWidth||200;
	can.height = can.width;
	this.r = can.width/2;
	this.ct = can.getContext('2d');
	
	var t = new Date();
	this._draw(t.getHours(),t.getMinutes(),t.getSeconds());
}

Clock.prototype.run = function(can){
	setInterval(()=>{
		this.ct.clearRect(0,0,can.width,can.height);
		var t = new Date();
		this._draw(t.getHours(),t.getMinutes(),t.getSeconds());
	},1000)
}

Clock.prototype._draw = function(hour,minute,second){
	let ct = this.ct;
	ct.save();
	ct.translate(this.r,this.r);
	this._drawBack();
	ct.save();
	ct.shadowOffsetX=1;
	ct.shadowOffsetY=1;
	ct.shadowColor="#333";
	this._drawHour(hour,minute);
	this._drawMinute(minute,second);
	this._drawSecond(second);
	ct.restore();
	this._drawDot();
	ct.restore();
}

Clock.prototype._drawBack = function(){
	let ct = this.ct;
	let r = this.r;

	ct.beginPath();
	// ct.fillStyle = '#ccc';
	ct.lineWidth = r*0.06;
	ct.arc(0,0,r*0.97,0,Math.PI*2);
	ct.stroke();
	// ct.fill();

	let hoursNums = [3,4,5,6,7,8,9,10,11,12,1,2];
	hoursNums.forEach(function(num,i){
		let rad = 2*Math.PI/12*i;
		let x = Math.cos(rad)*r*0.80;
		let y = Math.sin(rad)*r*0.80;
		ct.fillStyle=(num%3===0)?'#ff0606':'#000';
		ct.font = ''+r*0.18+"px Tahoma";
		ct.textAlign = 'center';
		ct.textBaseline="middle";
		ct.fillText(num,x,y);
	})

	for (let i = 0; i < 60; i++) {
		let rad = 2*Math.PI/60*i;
		let x = Math.cos(rad)*r*0.66;
		let y = Math.sin(rad)*r*0.66;
		
		ct.beginPath();
		ct.fillStyle = '#666';
		if (i%5===0) {
			if (i%15===0) {
				ct.fillStyle = '#ff0606';
			}
			ct.arc(x,y,r*0.015,0,2*Math.PI);
		} else {
			ct.arc(x,y,r*0.01,0,2*Math.PI);
		}
		
		ct.fill();
	}
}

Clock.prototype._drawHour = function(hour,minute){
	let ct = this.ct;
	let r = this.r;
	let rad = 2*Math.PI/12*(hour+minute/60);
	ct.save();
	ct.beginPath();
	ct.lineWidth = r/16;
	ct.lineCap = 'round';
	ct.strokeStyle = '#000';
	ct.rotate(rad);
	ct.moveTo(0,r/25)
	ct.lineTo(0,-r/3)
	ct.stroke();
	ct.restore();
}

Clock.prototype._drawMinute = function(minute,second){
	let ct = this.ct;
	let r = this.r;
	let rad = 2*Math.PI/60*(minute+second/60);
	ct.save();
	ct.beginPath();
	ct.lineWidth = r/25;
	ct.lineCap = 'round';
	ct.strokeStyle = '#000';
	ct.rotate(rad);
	ct.moveTo(0,r/20)
	ct.lineTo(0,-r/1.8)
	ct.stroke();
	ct.restore();
}

Clock.prototype._drawSecond = function(second){
	let ct = this.ct;
	let r = this.r;
	let rad = 2*Math.PI/60*second;
	ct.save();
	ct.beginPath();
	ct.lineWidth = r/40;
	ct.fillStyle = '#ee0000';
	ct.rotate(rad);
	ct.moveTo(-r/60,r/10)
	ct.lineTo(r/60,r/10)
	ct.lineTo(r/200,-r/1.55)
	ct.lineTo(-r/200,-r/1.55)
	ct.fill();
	ct.restore();
}

Clock.prototype._drawDot = function(){
	let ct = this.ct;
	ct.beginPath();
	ct.fillStyle = '#ccc';
	ct.arc(0,0,this.r/30,0,2*Math.PI);
	ct.fill();

}