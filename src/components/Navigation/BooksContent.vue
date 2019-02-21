<template>
<!-- 
  Contents
    Part
      Chapter
        Paragraphs (Lazy)  &#167;
      Exercises (Lazy)
-->
<div id="contents-wrapper">
  <p v-for="part in Contents" :key="part.part">
    <img src="/statics/svg/arrowRlS.svg" alt="" class="ar" :class="{'ar-transform': true}">
    <span> {{ part.part }} </span>
    <transition name="fade" mode="out-in" appear>
    <ul class="trademark list" v-show="true">
      <li v-for="chapter in part.chapters" :key="chapter.caption">{{chapter.caption}}
        <ul>
          <li v-for="name in chapter.paragraphs" :key="name.paragraphs">{{name}}</li>
        </ul>
      </li>
    </ul>
    </transition>
  </p>
</div>
</template>
<script>
import {ContentsRus} from '@/i18n/content.js'
export default {
  data(){
    return {
      Contents: ContentsRus,
      loading: true,
      errored: false,
      partIsVisible: [],
      // info:
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
    /*
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
      */
  },
  mounted(){
    console.table(this.Contents)
  },
}
</script>
<style lang="postcss">

</style>
