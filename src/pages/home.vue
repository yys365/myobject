<template>

	<div class="home">
		
		<Banner/>
		<uc_cell/>
	</div>  

</template>

<script>
	import Banner from '@/components/banner.vue'
	import UcCell from '@/components/uc_cell.vue'
	export default{
		data(){
			return{}
		},
		components:{
			Banner,
			'uc_cell':UcCell
		},
		moundted(){},
		undated(){},
		methods:{}
	}
</script>
<style scoped>
</style>
