<template>
  <div id="app">
      <Header/>
    <!-- <Header v-if="this.$root.bHeader"/> -->
   <!-- <Home/> -->
<!-- 	<Lyb /> -->
<!-- 	<Lxwm /> -->
<!-- 	<Rczp /> -->
	<!-- <router-view></router-view> -->
    
    <RouterView></RouterView>
    <Footer/>
	
  </div>
</template>
<script>
    // 登录注册页面
    import User from '@/pages/user.vue'
    import Login from '@/pages/login.vue'
    import Success from '@/pages/success.vue'
    
    
    // 页面组件
	import Rczp from '@/pages/rczp.vue'
	import Lxwm from '@/pages/lxwm.vue'
	import Home from '@/pages/home.vue'
	import Lyb from '@/pages/lyb.vue'
	import Header from '@/layous/header.vue'
	import Footer from '@/layous/footer.vue'
	export default{
		components:{
			// Home,Header,Footer
			// Lyb,Header,Footer
			Lxwm,Header,Footer,Home,Lyb,Rczp,
            User,Login,Success
			// Rczp,Header,Footer
		},
         // watch:{
         //      $route:{
         //                handler(nextValue,PrevValue){
         //                    let path = nextValue.path;
         //                  if(path.includes('login')){
         //                      this.$root.bHeader=false
         //                  }
         //                  else if(path.includes('success')){
         //                     this.$root.bHeader=false
         //                  }else if(path.includes('user')){
         //                     this.$root.bHeader=false
         //                  }else{
         //                      this.$root.bHeader=true
         //                  }
         //                },
         //                immediate: true
         //            }
         //  }
	}
</script>

<style>

</style>
