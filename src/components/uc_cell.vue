<template>
<div class="wrap_box">
	<ul class="obj_box">
		<li class="leftIn">
		   <a href=""><img src="../assets/images/obj_icon1.png"/></a>
		   <h1>资产收购业务</h1>
		   <P>资产直接或间接导致资金或现金等价物流入企业的潜力</P>
		</li>
		
		<li class="leftIn">
		   <a href=""><img src="../assets/images/obj_icon2.png"/></a>
		   <h1>资产收购业务</h1>
		   <P>资产直接或间接导致资金或现金等价物流入企业的潜力</P>
		</li>
		
		<li class="rightIn">
		   <a href=""><img src="../assets/images/obj_icon3.png"/></a>
		   <h1>资产收购业务</h1>
		   <P>资产直接或间接导致资金或现金等价物流入企业的潜力</P>
		</li>
		 
		 <li class="rightIn">
		   <a href=""><img src="../assets/images/obj_icon4.png"/></a>
		   <h1>资产收购业务</h1>
		   <P>资产直接或间接导致资金或现金等价物流入企业的潜力</P>
		</li>
	</ul>
	<img class="obj_pic leftIn1" src="../assets/images/title1.png"/>
	<a class="obj_box2 rightIn1" href="">
	  固定资产投资是建造和购置固定资产的经济活动，即固定资产再生产活动。固定资产再生产过程包括固定资产更新(局部和全部更新)改建、扩建、新建等活动固定资产投资是建造和购置固定资产
	  的经济活动，即固定资产再生产活动。固定资产再生产过程包括固定资产更新（局部和全部更新）、改建、扩建、新建等活动...<span>[详情]</span></a>
	<img class="obj_pic" src="../assets/images/title2.png"/>
	<div class="obj_box3">
		 <a href="">一般人</a>   <a href="">小规模</a>   <a href="">企业类型</a>
		 <a href="">注册资金</a>   <a href="">年限</a>   <a href="">更多>></a>
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
	/*********项目类型开始****************/
	.obj_box{ width:90%;
	          padding:.2rem 5%;
			  height:2.4rem;
			  overflow:hidden;}
	.obj_box li{ width:22%;
	             height:2.4rem;
				 float:left;
				 margin:0 2%;
				 text-align:center;}
	.obj_box li:first-child{ margin-left:0;}
	.obj_box li:last-child{ margin-right:0;}			 
	.obj_box li img{ display:block;
	                 width:80%;
					 margin:0 auto .04rem;}			 
	.obj_box li h1{ font-size:.20rem;
	                color:#005e11;
	                 margin-bottom:.02rem;}
	.obj_box li p{ font-size:.16rem;} 
	.leftIn{ animation:leftIn 3s;
	         -webkit-animation:leftIn 3s;
			 -moz-animation:leftIn 3s;
			 -ms-animation:leftIn 3s;
			 -o-animation:leftIn 3s;
	         }
	.rightIn{ animation:rightIn 3s;
	         -webkit-animation:rightIn 3s;
			 -moz-animation:rightIn 3s;
			 -ms-animation:rightIn 3s;
			 -o-animation:rightIn 3s;
	         }		 
	@keyframes leftIn{
		0%  {transform:translate(-200%,0);opacity:0;}
	    100% {transform:translate(0,0);opacity:1}
	}
	@-webkit-keyframes leftIn{
		0%  {-webkit-transform:translate(-200%,0);opacity:0;}
	    100% {-webkit-transform:translate(0,0);opacity:1}
	}
	@-moz-keyframes leftIn{
		0%  {-moz-transform:translate(-200%,0);opacity:0;}
	    100% {-moz-transform:translate(0,0);opacity:1}
	}
	@-ms-keyframes leftIn{
		0%  {-ms-transform:translate(-200%,0);opacity:0;}
	    100% {-ms-transform:translate(0,0);opacity:1}
	}
	@-o-keyframes leftIn{
		0%  {-o-transform:translate(-200%,0);opacity:0;}
	    100% {-o-transform:translate(0,0);opacity:1}
	}
	
	@keyframes rightIn{
		0%  {transform:translate(200%,0);opacity:0;}
	    100% {transform:translate(0,0);opacity:1}
	}
	@-webkit-keyframes rightIn{
		0%  {-webkit-transform:translate(200%,0);opacity:0;}
	    100% {-webkit-transform:translate(0,0);opacity:1}
	}
	@-moz-keyframes rightIn{
		0%  {-moz-transform:translate(200%,0);opacity:0;}
	    100% {-moz-transform:translate(0,0);opacity:1}
	}
	@-ms-keyframes rightIn{
		0%  {-ms-transform:translate(200%,0);opacity:0;}
	    100% {-ms-transform:translate(0,0);opacity:1}
	}
	@-o-keyframes rightIn{
		0%  {-o-transform:translate(200%,0);opacity:0;}
	    100% {-o-transform:translate(0,0);opacity:1}
	}
	/*********项目类型结束*******************/
.obj_pic{ width:90%;
          margin:.24rem auto;}
.obj_box2{ font-size:.2rem;
           width:90%;
		   display:block;
		   margin:0 auto;}
.obj_box2 span{ color:#005e11;
                padding:.1rem;}
.obj_box3{ width:90%;
           margin:0 auto;
		   overflow:hidden;}
.obj_box3 a{ display:block;
             width:26%;
			 float:left;
			 margin:3.5%;
			 height:.5rem;
			 line-height:.5rem;
			 background:url(../assets/images/icon_bg.png) repeat-x;
			 text-align:center;
			 font-size:.26rem;}				
</style>

