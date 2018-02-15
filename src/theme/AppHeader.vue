<template>
  <nav class="nav has-shadow">
        <div class="container">
           <router-link to="/" exact> <img :src="logo" alt="UNC Charlotte" />
          </router-link>
          <router-link to="/" class="nav-item is-tab" exact>
            Home
          </router-link>
          <router-link to="/login" class="nav-item is-tab">
            Login
          </router-link>

        </div>

      </nav>
</template>
<script>
import eventBus from '../event-bus.js';
export default {
  data() {
    return {
      logo: 'https://www.uncc.edu/sites/all/themes/uncctheme/assets/images/logo.png',
       isAuthenticated:false
    }
  },
  created(){
    eventBus.$on('authStatus', isAuthenticated => {this.isAuthenticated = isAuthenticated})
  }
}
</script>
<style scoped>
.nav{
  background: #105236;
  box-shadow: 0px 11px 1px #105236;
}
a{
color:#ffffff;
padding-left: 26px;
}
</style>


