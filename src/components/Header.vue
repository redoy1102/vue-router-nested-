<template>
  <ul class="nav nav-pills bg-primary">
    <router-link active-class="active" exact tag="li" style="cursor: pointer" class="nav-item nav-link text-white" to="/">Home</router-link>
    <router-link active-class="active" tag="li" style="cursor: pointer" exact class="nav-item nav-link text-white" to="/customer">Customer</router-link>
    <router-link active-class="active" tag="li" style="cursor: pointer" exact class="nav-item nav-link text-white" to="/about">about</router-link>
  </ul>
</template>

<style scoped >
ul .nav-item{
  color: white;
}
ul .active{
  color: red!important;
}
</style>