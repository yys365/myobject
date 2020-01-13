<template>
       <div class="login">
            <div class="login-title"><p>欢迎登录</p>
                <i></i>
            </div>
            <form method="post" action="success.html">
            <div class="login-bar">
                <ul>
                    <li><img src="../assets/images/login_user.png"><input v-model="username" type="text" class="text" placeholder="请输入用户名" /></li>
                    <li><img src="../assets/images/login_pwd.png"><input v-model="password" type="password" class="psd" placeholder="请输入确认密码" /></li>
                </ul> 
            </div>
            <div class="login-btn">
                <div class="submit" @click='login'>登陆</div>
               <!-- <a href=""><div class="login-reg"><p>莫有账号，先注册</p></div></a> -->
                
                 <router-link active-class="" to="user"><div class="login-reg"><p>莫有账号，先注册</p></div></router-link>
            </div>
            </form>
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
        beforeRouteEnter(to, from, next) {
          //条件异步
          // 抓取token
          let token = window.localStorage.getItem('token');
          if (token) {
            axios({
              url: '/api/user',
              headers: {
                'token': token
              }
            }).then(
              res => res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login')
            )
          } else {
            next('/login')
          }
        },

		methods:{
            login(){
                let params = new URLSearchParams();
                params.append('username', this.username)
                params.append('password', this.password)
                axios({
                  url: '/api/login',
                  method: 'post',
                  data: params
                }).then(
                  res => {
                    if(res.data.err==0){
                      //种token,跳转user
                      window.localStorage.setItem('token',res.data.token);
                      this.$router.push('/home')
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
	.login{
	    padding-top: 0px; 
	    max-width: 768px;
	    margin:0 auto; 
	    min-width: 320px;
	    background: url(../assets/images/login_bg.png) no-repeat;    filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	   -moz-background-size:100% 100%;
	    background-size:100% 100%;
	    min-height:480px; 
	}
	.login-title{
	    position: relative;
	    width:100%;
	    height:80px;
	    line-height: 80px;
	    text-align: center;
	    font-size: 1.7em;
	    font-family: "Microsoft YaHei";
	    color:#fff;
	}
	.login-title i{
	    position: absolute;
	    top:130px;
	    left:50px;
	    width:230px;
	    height:20px;
	    line-height: 20px;
	    text-align: center;
	    font-size: 14px;
	}
	.login-bar{
	    position: relative;
	    width:100%;
	    height:30%;
	    
	}
	.login-bar ul li{
	    width:70%;
	    height:25px;
	    margin: 30px 0 0 11%;
	    border-bottom:1px solid #fff;
	}
	.login-bar .text{
	    position: absolute;
	    margin-left:3%;
	    width:60%;
	    height:25px;
	    border:none;
	    background:none;
	    color:#fff;
	}
	.login-bar .psd{
	    position: absolute;
	    top:55px;
	    margin-left:3%;
	    width:60%;
	    height:25px;
	    border:none;
	    background:none;
	    color:#fff;
	}
	input:focus {
	    outline:none;
	}
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	    color: #fff;  
	}
	
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	    color: #fff;
	}
	
	input:-ms-input-placeholder,
	textarea:-ms-input-placeholder {
	    color: #fff;
	}
	
	input::-webkit-input-placeholder,
	textarea::-webkit-input-placeholder {
	    color: #fff;
	}
	.login-btn{
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
	    margin-left:11%;
	    color:#fff;
	    font-family: "Microsoft YaHei";
	    font-size: 14px;
	    border-radius: 3px;
	    cursor: pointer;
	}
	.login-reg p{
	    width:70%;
	    height:35px;
	    line-height: 35px;
	    background:#989898;
	    border:1px solid #989898;
	    text-align: center;
	    margin:25px 0 0 11%;
	    color:#fff;
	    font-family: "Microsoft YaHei";
	    font-size: 14px;
	    border-radius: 3px;
	    display: block;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>
