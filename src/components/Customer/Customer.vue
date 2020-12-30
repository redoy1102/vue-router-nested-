<template>
<div>
  <h2>The customer page</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iure nostrum quam saepe sapiente? Adipisci aspernatur atque consectetur consequatur eos error exercitationem fa
  <hr>
  <button class="btn btn-success" @click="navigateToHome" >Go to home</button>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
methods: {
  navigateToHome(){
    this.$router.push('/')
  }
},
  beforeRouteEnter(to,form,next){
  next(true);
  },
  beforeRouteLeave(to,from,next){
  next(true);
  }
}
</script>

<style scoped>

</style>