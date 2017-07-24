const earth = new Image();
earth.src = './assets/img/earth.png';
const bg = new Image();
bg.src = './assets/img/blockbg.jpg';

export const Clock = function(canvas){
	this.init(canvas);
	this.run(canvas);
}

Clock.prototype.init = function(can){
    this.can = can;
	can.width = can.clientWidth||200;
	can.height = can.clientWidth||200;
	this.r = can.height/2;
	this.ct = can.getContext('2d');
	
	let t = new Date();
	this._draw(t.getHours(),t.getMinutes(),t.getSeconds());
}

Clock.prototype.run = function(can){
	setInterval(()=>{
		this.ct.clearRect(0,0,can.width,can.height);
		let t = new Date();
		this._draw(t.getHours(),t.getMinutes(),t.getSeconds());
	},1000)
}

Clock.prototype._draw = function(hour,minute,second){
	let ct = this.ct;
	let can = this.can;
	ct.save();
    ct.drawImage(bg,0,0,bg.width,bg.height,0,0,can.width,can.height)
	ct.translate(this.r*0.95,this.r*0.95);
	this._drawBack(second);
	ct.save();
	this._drawHour(hour,minute);
	this._drawMinute(minute,second);
	this._drawSecond(second);
	ct.restore();
	this._drawDot();
	ct.restore();
}

Clock.prototype._drawBack = function(second){
	let ct = this.ct;
	let r = this.r;

	for (let i=0; i<12; i++) {
        let rad = 2*Math.PI/12*i;
        let x = Math.cos(rad)*r*0.75;
		let y = Math.sin(rad)*r*0.75;

        ct.beginPath();

		let _r;
        if (i%3===0){
            _r = r/10;
		} else {
			_r = r/20;
		}

        let gradient = ct.createRadialGradient(x-_r,y-_r,_r,x-_r,y-_r,_r*2.2);
        gradient.addColorStop(0,"#eff7fa");
        gradient.addColorStop(1,"#586062");
        ct.fillStyle = gradient;
        ct.shadowBlur=10;
        ct.shadowColor="#586062";
        ct.shadowOffsetX=r/35;
        ct.shadowOffsetY=r/35;
        ct.arc(x,y,_r,0,2*Math.PI);
		ct.fill()

        let _sec;
        if (i<9){
		    _sec = i+3;
        } else {
            _sec = i-9;
        }

        if(Math.floor(second/5)===_sec){
            ct.drawImage(earth,0,0,earth.width,earth.height,x-_r,y-_r,2*_r,2*_r);
        }

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
	ct.moveTo(0,r/25);
	ct.lineTo(0,-r/3);
	ct.stroke();
	ct.restore();
}

Clock.prototype._drawMinute = function(minute,second){
	let ct = this.ct;
	let r = this.r;
	let rad = 2*Math.PI/60*(minute+second/60);
	ct.save();
	ct.beginPath();
	ct.lineWidth = r/30;
	ct.lineCap = 'round';
	ct.strokeStyle = '#000';
	ct.rotate(rad);
	ct.moveTo(0,r/25)
	ct.lineTo(0,-r/2)
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
	ct.fillStyle = '#ee1f21';
	ct.rotate(rad);
	ct.moveTo(-r/60,r/10);
	ct.lineTo(r/60,r/10);
	ct.lineTo(r/200,-r/1.6);
	ct.lineTo(-r/200,-r/1.6);
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