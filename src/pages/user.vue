<template>
<div class="wrap_box">
  <div id="layout">
            <span>账号注册</span>
            <form  method="post">
            <ul>
                <p id="err_msg"></p>
                <li><i class="un"><img src="../assets/images/user_name.png"></i><input class="username" type="text" v-model="username" placeholder="请输入用户名" /></li>
                <li><i class="yz"><img src="../assets/images/msg.png"></i><input class="yzm" type="text" placeholder="请输入手机验证码" /><input type="button" id="send" value="获取验证码" /></li>
                <li><i class="pw"><img src="../assets/images/pwd.png"></i><input class="pwd" type="password" placeholder="请输入密码"  v-model="password" /></li>
                <li><i class="pw2"><img src="../assets/images/pwd.png"></i><input class="pwd2" type="password" placeholder="请输入确认密码" /></li>
                <div class="queren"><input class="fx" type="checkbox" checked="checked" /><p>我已阅读并同意《用户协议》</p></div>
            </ul>
                <div class="reg_btn">
                    <div class="submit" @click="reg">注册</div>

                    <!-- <a href="login.html"><div class="reg-login"><p>已有帐号，立即登陆</p></div></a> -->
                    <router-link active-class="" to="login"> <a href=""><div class="reg-login"><p>已有帐号，立即登陆</p></div></a></router-link>
                </div>
            </form>
        </div>
</div>
</template>

<script>
	export default{
		data(){
			return{
                username: '',
                password: '',
                mess: ''
             }
		},
		components:{},
		moundted(){},
		undated(){},
		methods:{

              reg() {

                let formData = new FormData();
                formData.append('username',this.username)
                formData.append('password',this.password)



                axios({
                  url: '/api/reg',
                  method: 'post',
                  data: formData
                }).then(
                  res => {
                    if(res.data.err==0){
                      console.log(res.data);
                      this.$router.push('/success')
                    }else{
                      this.mess=res.data.msg
                    }
                  }
                )

              }

        }
	}
</script>

<style scoped>
#layout{
    padding-top: 0px;
    max-width: 768px;
    margin:0 auto;
    min-width: 320px;
    background: url(../assets/images/reg_bg.png) no-repeat;    filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
    background-size:100% 100%;
    min-height:480px;
}
#layout span{
    display: block;
    position: relative;
    text-align: center;
    height:80px;
    line-height: 80px;
    font-family: "Microsoft YaHei";
    color:#fff;
    font-size: 1.5em;;
}
#layout ul li{
    list-style: none;
    margin-left:11%;
    position: relative;
}
#err_msg{
    height:15px;
    text-align: center;
    color:red;
}
.username,.yzm, .pwd, .pwd2{
    width:70%;
    height:30px;
    border-radius:4px;
    background:#fff;
    filter:alpha(opacity:70);
    opacity: 0.7;
    list-style: none;
    margin:5px 0;
    padding-left:50px;
    border:1px solid #ccc;
}
.un,.yz, .pw, .pw2{
    position: absolute;
    margin-top:7px;
}
.queren{
    list-style: none;
    margin:5px 0;
    width:25%;
    margin-left:10%;
    height:20px;
    position:relative;
}
.fx{
    width:13px;
    height:13px;
    border:1px solid #4f7b9c;
    float: left;
}
.queren p{
    text-align: left;
    margin-top:2px;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    color:#0C0C0C;
    width:180px;
}
.reg-btn{
    width:100%;
    height:30%;
    margin-top:80px;
}
.submit{
    width:70%;
    height:35px;
    background:#f34541;
    border:1px solid #f34541;
    text-align: center;
    margin:30px 0 0 11%;
    color:#fff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
}
.reg-login p{
    width:70%;
    height:35px;
    line-height: 35px;
    background:#989898;
    border:1px solid #989898;
    text-align: center;
    margin:15px 0 0 11%;
    color:#fff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    border-radius: 3px;
    display: block;
}
#send{
    position:absolute;
    margin:5px 0 0 -87px;
    width:87px;
    height:34px;
    border-radius: 3px;
    border:1px solid #79b235;
    background:#79b235;
    font-family:  "Microsoft YaHei";
    font-size: 12px;
    cursor: pointer;
}




</style>
