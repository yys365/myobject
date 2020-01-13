<template>
<div class="success">
            <img src="../assets/images/success.png" />
            <p>恭喜您注册成功！</p>
            <router-link active-class="" to="login"> <button class="submit" type="submit">登陆</button></router-link>
               <!-- <button class="submit" type="submit">登陆</button> -->
            
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
.success{
    padding-top: 0px; 
    max-width: 768px;
    margin:0 auto; 
    min-width: 320px;
    background: url(../assets/images/success_bg.png) no-repeat;    filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
    background-size:100% 100%;
    min-height:480px; 
}
.success img {
    margin:45px 0 0 50%;
}
.success p{
    display: block;
    margin:20px 0 0 11%;
    font-family: "Microsoft YaHei";
    font-size: 24px;
    color:#fff;
    text-align: center;
}

.submit{
	    width:70%;
	    height:35px;
	    background:#f34541;
	    border:2px solid #f34541;
	    text-align: center;
	    margin-left:11%;
	    color:#fff;
	    font-family: "Microsoft YaHei";
	    font-size: 14px;
	    border-radius: 3px;
	    cursor: pointer;
        margin-top: 1.5rem;
	}


</style>
