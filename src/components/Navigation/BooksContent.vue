<template>
<!-- 
  Contents
    Parts
      Chapters
        Paragraph  &#167;
-->
<div id="contents-wrapper">
  <p v-for="part in Contents" :key="part.No">
    <img src="/statics/svg/arrowRlS.svg" alt="" class="ar" :class="{'ar-transform': show.trademark}">
    <span @click="showList"> {{ part.header }} </span>
    <transition name="fade" mode="out-in" appear>
    <ul class="trademark list" v-show="show.trademark">
      <li v-for="chapter in "><a href="https://www.berghof-automation.com/">Berghof</a></li>
      <li><span class="ss">
 
</span><a href="https://www.beckhoff.ru/">BECKHOFF</a></li>
      <li><a href="https://www.beckhoff.ru/">Wago</a></li>
      <li><a href="https://www.beckhoff.ru/">Siemens</a></li>
      <li><a href="https://www.beckhoff.ru/">SchneiderElectric</a></li>
      <li><a href="https://www.beckhoff.ru/">ABB</a></li>
    </ul>
    </transition>
  </p>
</div>
</template>
<script>
export default {
  data(){
    return {
      Contents: [],
      loading: true,
      errored: false,
      partIsVisible: [],
    }
  },
  methods: {
    partShow(e){
      e.preventDefault();
      e.stopPropagation();
      //this.
    }
  },
  created(){
    Vue.axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  mounted(){
    
  },
}
</script>
<style lang="postcss">

</style>
