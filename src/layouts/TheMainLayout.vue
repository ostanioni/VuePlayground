<template>
<div>
  <router-link to='/about'>ABOUT</router-link> |
  <router-link to='/home'>HOME</router-link> |
  <router-link to='/contacts'>CONTACTS</router-link> |
  <router-link to='/404'>404</router-link> 
  <main>
    <router-view></router-view>
  </main>
  
</div>
</template>
<style lang="sass" scoped>

</style>
<script>
import '@/styles/TheMainLayout.css'
export default {
  data(){
    return{
      msg:'mainLayout component'
    }
  }
}
</script>


