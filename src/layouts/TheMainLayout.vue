<template>
<div>
  <router-link to='/about'>ABOUT</router-link> |
  <router-link to='/home'>HOME</router-link> |
  <router-link to='/contacts'>CONTACTS</router-link> |
  <router-link to='/404'>404</router-link> 
  <router-view></router-view>
</div>
</template>
<style lang="sass" scoped>

</style>
<script>
export default {
  data(){
    return{
      msg:'mainLayout component'
    }
  }
}
</script>


