<template>
	<div>
		<div v-if="$route.meta.keepAlive">
			<transition name="router-fade" mode="out-in">
				<keep-alive>
				    <router-view ></router-view>
				</keep-alive>
    		</transition>
		</div>
		<div v-if="!$route.meta.keepAlive">
			<transition name="router-fade" mode="out-in">
				<router-view ></router-view>
			</transition>
		</div>
    </div>
</template>

<script>
	export default {
	
	}
</script>


<style lang="less">
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity 0.3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>