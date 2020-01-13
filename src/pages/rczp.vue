<template>
<div class="wrap_box">
	<Banner />
	<div class="rczp">
		<!---内容开始-->
		<ul class="rczp_box">
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <!--隐藏部分-->
		   <div class="hidden_box3">
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   <li class="rczp_show"><a href="">文案策划员<span>立即申请</span></a></li>
		   </div>
		   <!--隐藏部分结束-->
		   <li id="more_but" onclick="javascript:this.innerHTML=(this.innerHTML=='显示更多'?'收起':'显示更多');">显示更多</li>

		</ul>
		<!--内容结束-->
	</div>
</div>	
</template>

<script>
	import Banner from '../components/banner.vue'
	export default{
		data(){
			return{}
		},
		components:{
			Banner
		},
		moundted(){
			$("#more_but").click(function(){
							   $(".hidden_box3").slideToggle(1000);
			});
		},
		undated(){},
		methods:{}
	}
</script>

<style scoped>
/********人才招聘开始****/
.rczp_box{ width:90%;
           padding:0 5%;}
.rczp_show{ width:100%;
            overflow:hidden;
			line-height:.8rem;
			border-bottom:1px dashed #cccccc;}
.rczp_show a{overflow:hidden;
			 padding-left:6%;
			 display:block;
			 width:94%;
			 background:url(../assets/images/info_icon2.png) no-repeat left center;}				
.rczp_show span{ float:right;}	
.hidden_box3{ display:none;}		   
/********人才招聘结束****/
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
</style>
