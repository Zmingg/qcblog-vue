<template>
<div class="am-hide-md-only am-panel am-panel-default list-side">

	<div class="am-panel-hd">
	<h3 class="am-panel-title"><i class="am-icon-paw am-icon-xs"></i>&nbsp 今日天气</h3>
	</div>

	<main class="am-panel-bd panel-wheather">
		<div class="am-u-sm-6">
			<img :src="weather.img" /><br>
		</div>
		<div class="am-u-sm-6">
			<span>{{weather.city}}</span> 
			<span>{{weather.s}}</span><br>
			<span>{{weather.t}} ℃</span><br>
			<span>{{weather.w}} 级</span>
		</div>
	</main>
	
</div>
</template>

<script>
module.exports = {

    data:function(){
        return {
            weather:''
        }
    },
        
    mounted:function(){
        this.getdata();
    },

    methods:{
        getdata:function(){
            this.$http.jsonp("http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=0&dfc=1&charset=utf-8",).then(
            	function(){},
            	function(res){

	                if (SWther.add.error==0) {
				for(var k in SWther.w){
					var wea = SWther.w[k][0];
					wea['city'] = k;	
				}
				for(var k in SWther.add){
					wea[k] = SWther.add[k];	
				}
			};
			var now = new Date();

			if (now.getHours()>17||now.getHours()<6) {
				wea.s = wea.s2;
				wea.w = wea.d2?(wea.d2+' '+wea.p2):(wea.d1+' '+wea.p1);
				wea.img = 'http://php.weather.sina.com.cn/images/yb3/78_78/'+(wea.f2?wea.f2:wea.f1)+'_1.png';
			}else{
				wea.s = wea.s1;
				wea.w = wea.d1?(wea.d1+' '+wea.p1):(wea.d2+' '+wea.p2);
				wea.img = 'http://php.weather.sina.com.cn/images/yb3/78_78/'+(wea.f1?wea.f1:wea.f2)+'_0.png';
			}
			wea.t = wea.t2+' ~ '+(wea.t1?wea.t1:'27');

			this.weather = wea;
            	});     
        }
    }

  
}	


</script>
