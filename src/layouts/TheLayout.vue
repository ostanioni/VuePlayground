<script>
import backToTop from '@/components/top.vue'
import cnvs from '@/components/Canvas2D/cnvs.vue'
import BooksContent from '@/components/Navigation/BooksContent.vue'
// import C from '@/components/Code/C.vue'
// import TheTable from '@/components/TheTable.vue'
export default {
  data(){
    return{
      msg:'Layout component'
    }
  },
  components: {
    backToTop,
    cnvs,
    BooksContent
    // C,
    // TheTable
  }
}
</script>
<template>
  <div id="app">
    <header></header>
    <main>
      <BooksContent/>
    </main>
    <footer></footer>

  </div>
</template>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster|Roboto');
#app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 90px auto auto;
  grid-template-rows: ;
  font-family: 'Roboto', sans-serif;
  font-size: 2vw;
}
.cc {
  font-family: 'Lobster', cursive;
}


@media screen and (max-width: 768px) and (min-width: 0px){
  #app {

  }
}
</style>

<style lang="postcss" scoped>

</style>
<style lang="postcss" scoped>

</style>

<style lang="postcss">

@media screen and (max-width: 768px) and (min-width: 0px){

}
@media screen and (max-width: 768px) and (min-width: 0px){

}
@media screen and (max-width: 768px) and (min-width: 0px){

}
</style>