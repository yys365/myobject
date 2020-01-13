<template>
<div class="wrap_box">
	<div class="footer_box">
		<router-link active-class="" to="home"><img src="../assets/images/fot_icon1.png"/>首页</router-link>
		<router-link active-class="" to="rczp"><img src="../assets/images/fot_icon2.png"/>人才招聘</router-link>
		<router-link active-class="" to="lyb"><img src="../assets/images/fot_icon3.png"/>留言板</router-link>
		<router-link active-class=" " to="lxwm"><img src="../assets/images/fot_icon4.png"/>联系我们</router-link>
		
	<!-- 	 <a href=""><img src="../assets/images/fot_icon1.png"/>首页</a>
		 <a href=""><img src="../assets/images/fot_icon2.png"/>人才招聘</a>
		 <a href=""><img src="../assets/images/fot_icon3.png"/>留言板</a>
		 <a href=""><img src="../assets/images/fot_icon4.png"/>联系我们</a> -->
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		components:{},
		moundted(){},
		undated(){},
		methods:{}
	}
</script>

<style scoped>

.footer_box{ width:100%;
			 height:1.2rem;
			 background:#005e11;
			 overflow:hidden;}
.footer_box a{ display:block;
               width:25%;
			   height:1.1rem;
			   color:white;
			   float:left;
			   padding-top:.1rem;
			   font-size:.22rem;
			   text-align:center;}
.footer_box a:active{ background:#013c0c;}			   
.footer_box a img{ display:block;
                   width:40%;
				   margin:0 auto .05rem;}
</style>

