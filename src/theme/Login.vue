<template>
  <div class="content">
    <div v-if="isAuthenticated">
    <h3>Authenticated User!</h3><hr><br>
    <button v-on:click="logout()" class="button is-primary">
      Logout
    </button>
  </div>
  <div v-else>
<h2>Login</h2>
<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Username</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input class="input" type="text"
			  placeholder="Username" v-model="username">
			</div>
		  </div>
		</div>
	</div>
  <div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Password</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input class="input" type="password"
			  placeholder="Password" v-model="password">
			</div>
		  </div>
		</div>
	</div>
  <div class="field is-horizontal">
		<div class="field-label">
		  <!-- Left empty for spacing -->
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button v-on:click="login()" class="button is-primary">
				Login
			  </button>
			</div>
		  </div>
		</div>
	</div>
  </div>
  </div>
</template>
<script>
import eventBus from '../event-bus.js'
import appService from '../app.service.js'
export default {
  data(){
    return{
      username:'',
      password:'',
      isAuthenticated:false,
      profile:{}
    }
  },
  methods:{
    login(){
      appService.login({username: this.username, password:this.password})
      .then((data) => {
        window.localStorage.setItem('token', data.token)
        window.localStorage.setItem('tokenExpiration', data.expiration)
        this.isAuthenticated = true
        this.username =''
        this.password=''
      })
      .catch(() => window.alert('Could not Login!'))
    }
  },
  logout: function(){
    window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
        this.isAuthenticated = false
  },
watch:{
  isAuthenticated: function(){
    eventBus.$emit('authStatus', this.isAuthenticated)
  }
}
}
</script>
<style scoped>
 .content{
    min-height:475px;
}
</style>


