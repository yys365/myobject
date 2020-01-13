<template>
<div class="wrap_box">
	<div class="lyb">
		<!---内容开始-->
		<ul class="ly_box">
		    <div class="ly_text">
		         <p>公司名称：</p>
		         <p>联系人姓名：</p>
		         <p>公司地址：</p>
		         <p>公司电话：</p>
		         <P>传真：</p>
		         <P>邮箱：</P>
		         <p>留言内容：</p>
		    </div>
		    <div class="ly_input">
		       <input type="text">
		       <input type="text">
		       <input type="text">
		       <input type="text">
		       <input type="text">
		       <input type="text">
		       <textarea class="ly_content"></textarea>
		       <button type="submit">提交</button> 
		    </div>
		</ul>
		<!--内容结束-->
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
/********留言开始******/
.ly_box{ width:90%;
         padding:0 5%;
		 margin:.4rem;
		 overflow:hidden;}
.ly_text{ width:30%;
          float:left;
		  text-align:right;}
.ly_text p{ margin:.2rem 0;
            line-height:.6rem;}		  
.ly_input{ width:68%;
          float:right; 
          }
.ly_input input{ height:.6rem;
                 display:block;
				 width:80%;
                 margin:.2rem 0;
                 background:#fff;}
.ly_input button{ height:.6rem;
                  display:block;
				  width:80%;
				  background:#005e11;
				  color:white;
				  border:none;
				  border-radius:4px;
                  margin:.2rem 0;}				 		  
.ly_content{ width:80%;
             height:1.8rem;}		  
/********留言结束******/
</style>
