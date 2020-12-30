<template>
  <div>
<h1>Hey I am customer detail {{$route.params.id}}</h1>
    <router-link
      tag="button"
      :to="'/customer/'+$route.params.id+'/edit'"
      class="btn btn-primary"
    >Edit User -{{$route.params.id}}</router-link>
  </div>
</template>

<script>
export default {
  name: "CustomerDetail"
}
</script>

<style scoped>

</style>