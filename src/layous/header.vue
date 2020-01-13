<template>
<div class="wrap_box">
<!--头部部分开始-->
<a class="logo" href=""><img src="../assets/images/logo.png"/></a>
<div class="nav_box">
    <!-- <router-link active-class="back_but" to="login"><img src="../assets/images/home_icon.png"/></router-link> -->
    <router-link active-class="" to="login"><a class="back_but" href=""><img src="../assets/images/home_icon.png"/></a></router-link>
     <!-- <a class="back_but" href=""><img src="../assets/images/home_icon.png"/></a> -->
     <p class="nav_title">首页</P>
     <div class="menu">
          <img class="menu_but" src="../assets/images/menu_icon.png"/>
<!--         <div id="dl-menu" class="dl-menuwrapper">
                <button id="dl-menu-button">Open Menu</button>
                <ul class="dl-menu">
                    <li><a href="">网站首页</a></li>
                    <li><a class="sub_menu" href="">关于华企</a>
                        <ul class="dl-submenu">
                            <li class="dl-back"><a href="#">返回上一级</a></li>
                            <li><a href="">公司简介</a></li>
                            <li><a href="">企业文化</a></li>
                            <li><a href="">未来发展</a></li>
                        </ul>
                    </li>
                    <li><a class="sub_menu" href="">业务介绍</a>
                        <ul class="dl-submenu">
                            <li class="dl-back"><a href="#">返回上一级</a></li>
                            <li><a href="">公司简介</a></li>
                            <li><a href="">企业文化</a></li>
                            <li><a href="">未来发展</a></li>
                        </ul>
                    </li>
                    <li><a class="sub_menu" href="">新闻中心</a>
                        <ul class="dl-submenu">
                            <li class="dl-back"><a href="#">返回上一级</a></li>
                            <li><a href="">公司简介</a></li>
                            <li><a href="">企业文化</a></li>
                            <li><a href="">未来发展</a></li>
                        </ul>
                    </li>
                    <li><a class="sub_menu" href="">成功案例</a>
                        <ul class="dl-submenu">
                            <li class="dl-back"><a href="#">返回上一级</a></li>
                            <li><a href="">公司简介</a></li>
                            <li><a href="">企业文化</a></li>
                            <li><a href="">未来发展</a></li>
                        </ul>  
                    </li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">人才招聘</a></li>
                    <li><a href="">留言板</a></li>
                </ul>
	    </div> -->
		</div>
     </div>
</div>
<!--头部部分结束--> 
</template>
  
<script>
	// import JqueryDlmenu from '../assets/js/jquery.dlmenu.js'
	export default{
		data(){
			return{}
		},
		components:{
			// 'jquery.dlmenu':JqueryDlmenu
		},
		moundted(){},
		undated(){},
		methods:{}
	}
</script>

<style>
.wrap_box {
	max-width:640px;
	margin: 0 auto;
	height:auto;
	position:relative;
	background:#eeeeee;
	overflow:hidden;
}
.logo{ display:block;
       width:100%;}
.logo img{ display:block;
           width:40%;
		   margin:.2rem auto;}
.nav_box{ width:90%;
          height:.7rem;
		  padding:0 5%;
		  overflow:hidden;
		  background:#005e11;
		  box-shadow:0 2px 4px #999;
		  margin-bottom:.06rem;
		  z-index:100;}
.back_but{ display:block;
           width:10%;
		   height:.26rem;
		   float:left;
		   margin-top:.12rem;}
.back_but img{ width:100%;
                display:block;}
.nav_title{ float:left;
            color:white;
			width:80%;
			text-align:center;
			line-height:.7rem;
			font-size:.35rem;}
.menu{ width:10%;
       float:right;
	   margin-top:.12rem;}	
.menu_but{ display:block;
           width:100%;}
</style>

