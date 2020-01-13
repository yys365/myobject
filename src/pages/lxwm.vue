<template> 
<div class="wrap_box">
		<!---内容开始-->
		<div class="lxwm_box">
		
		   <ul class="lxwm_box_text">
		       <li> <img src="../assets/images/lxwm_icon1.png"/><p>公司名称：华企集团</p></li>
		       <li> <img src="../assets/images/lxwm_icon2.png"/><p>公司地址：天津市河西区南京路20号金皇大厦</p></li>
		       <li> <img src="../assets/images/lxwm_icon3.png"/><p>公司电话：022-1234567</p></li>
		       <li> <img src="../assets/images/lxwm_icon4.png"/><p>公司传真：022-1234567</p></li>
		       <li> <img src="../assets/images/lxwm_icon5.png"/><p>公司邮箱：hq789@126.com</p></li>
		   </ul>
		   <a class="map" href=""><img src="../assets/images/map.jpg"></a>
		   <!--隐藏部分-->
		   <div class="hidden_box2">
		      <ul class="lxwm_box_text">
		           <li> <img src="../assets/images/lxwm_icon1.png"/><p>公司名称：华企集团</p></li>
		           <li> <img src="../assets/images/lxwm_icon2.png"/><p>公司地址：天津市河西区南京路20号金皇大厦</p></li>
		           <li> <img src="../assets/images/lxwm_icon3.png"/><p>公司电话：022-1234567</p></li>
		           <li> <img src="../assets/images/lxwm_icon4.png"/><p>公司传真：022-1234567</p></li>
		           <li> <img src="../assets/images/lxwm_icon5.png"/><p>公司邮箱：hq789@126.com</p></li>
		      </ul>
		      <a class="map" href=""><img src="../assets/images/map.jpg"></a>
		   </div>
		   <!--隐藏部分结束-->
		   <div id="more_but" onclick="javascript:this.innerHTML=(this.innerHTML=='显示更多'?'收起':'显示更多');">显示更多</div>
		
		</div>
		<!--内容结束-->
</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		components:{},
		moundted(){
			$(function(){
			    $( '#dl-menu' ).dlmenu();
			});
		},
		undated(){},
		methods:{}
	}
</script>

<style scoped>
	/*****联系我们开始****/
	.lxwm_box{ width:90%;
	           padding:0 5%;}
	.lxwm_box_text{ width:100%;
	                margin:.5rem auto 0;}
	.lxwm_box_text li{ overflow:hidden;
	                   margin:.1rem auto;}				
	.lxwm_box_text li img{ display:block; 
	                       float:left;
						   width:5%;
						   margin-right:3%;}				
	.lxwm_box_text li p{ font-size:.24rem;
	                     width:98%;}
	.map{ width:100%;
	      display:block;
		  margin:.5rem auto;
		  border:1px solid #cccccc;}
	.map img{ display:block;
	          width:100%;}	  
	/********联系我们结束********/
	/*******显示更多开始*******/
	#more_but{ text-align:center;
	           background:#c3c4c4;
			   color:#727272;
			   border-radius:6px;
			   font-size:.2rem;
			   height:.6rem;
			   line-height:.6rem;
			   margin:.6rem auto .2rem;}
	/********显示更多结束*************/
/******华企成功案例详情页**********/		   	   
.show_box1{ width:100%;}
.show_box1_title{ font-size:.36rem; 
                  text-align:center;
				  padding:.2rem 0;
				  margin-bottom:.3rem;
				  border-bottom:1px solid #d1d1d1;}
.show_box1 img{ display:block;
                   width:100%;
				   margin:0 auto;
				   margin-top:.1rem;}			   
.cgal_list_text1{ width:100%;
                  margin:0 auto;}
.cgal_list_text1 p{ padding:.08rem 0;
                   	text-indent:2em;
				    font-size:.28rem;}			   
.hidden_box2{ display:none;}
.hidden_box2 li{ width:100%;}	
/******华企成功案例详情页结束**********/	
</style>
