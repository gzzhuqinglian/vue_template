<style lang="less" scoped>
	.login {
		padding: 50px;
		text-align: center;
		.line {
			padding: 5px;
			input {
				padding: 0 10px;
				line-height: 28px;
			}
		}
		button {
			padding: 0 20px;
			margin-top: 20px;
			line-height: 28px;
		}
	}
</style>
<template>
	<div>
		<v-header title="登录">
			<router-link slot="left" to="/">返回</router-link>
		</v-header>
		<form class="login" v-on:submit.prevent="submit">
			<div class="line">	
				<input type="id" placeholder="输入你的id" v-model="form.id">
				<div v-show="btn && !form.id">id不能为空</div>
			</div>
			<div class="line">
				<input type="password" placeholder="输入你的密码" v-model="form.password">
				<div v-show="btn && !form.password">密码不能为空</div>
			</div>
			<button>登录</button>
		</form>
	</div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					id: '',
					password: ''
				}
			}
		},
		methods: {
			submit() {
				this.btn = true
				if(!this.form.id || !this.form.password) return
				this.$store.dispatch('USER_SIGNIN', this.form).then(() => {
					console.log('goood');
					this.$store.dispatch('GET_USERINFOR');
					this.$router.replace({ path: '/home' })
				}).catch(err => {
				 console.log('login error')
				});
			}
		}
    }
</script>