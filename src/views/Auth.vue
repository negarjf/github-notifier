<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Login form</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form :value="true">
							<v-text-field
									v-model="token"
									label="Personal access tokens"
									prepend-icon="lock"
									hint="Enter your created personal access token."
									required
							></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" @click="login">
							Login
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>

	export default {
		name: "Auth",
		data: () => ({
			token: '',
		}),
		methods: {
			login: function () {
				let personalToken = this.token;


				this.$store.dispatch('auth/login', { token: personalToken })
					.then(() => this.$router.push('/'))
					.catch(err => console.log(err))
			}
		}
	}
</script>

<style scoped>

</style>