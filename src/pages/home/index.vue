<style lang="less" scoped>

</style>
<template>
	<div>
		<v-header title="首页">
			<router-link slot="left" to="/">首页</router-link>
			<router-link slot="right" to="/signout">退出</router-link>
		</v-header>
		<div style="padding: 50px;">{{user.user.name}}欢迎回家</div>
		<div v-on:click="loading">loading</div>
		<div v-on:click="toast">toast</div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState({ user: state => state.user }),
		methods: {
			loading() {
				this.$loading.open();
				let that=this;
				setTimeout(function() {
					that.$loading && that.$loading.close()
				},3000)
			},
			toast() {
				this.$toast.open({
					message: '非常好的东东'
				});
			}
		}
    }
</script>