<template>
<div class="xpeH">
  <header>
    <router-link to='/about'>ABOUT</router-link> |
    <router-link to='/home' class="linkRed">HOME</router-link> |
    <router-link to='/contacts'>CONTACTS</router-link> |
    <router-link to='/404' class="linkRed">SEARCH</router-link>
  </header>
  <div class="sidebar">
    SIDEBAR
    SIDEBAR
    SIDEBAR!!!
  </div>
  <main>
    <router-view></router-view>
    <C></C>
  </main>
  <footer class="seriousError">
    It's The Footer
  </footer>
  <back-to-top></back-to-top>
  <cnvs></cnvs>
</div>
</template>
<script>
import backToTop from '@/components/top.vue'
import cnvs from '@/components/Canvas2D/cnvs.vue'
import C from '@/components/Code/C.vue'
export default {
  data(){
    return{
      msg:'mainLayout component'
    }
  },
  components: {
    backToTop,
    cnvs,
    C
  }
}
</script>
<style lang="scss">
canvas {
  border: 1px solid #000;
}
body {
  margin: 7px;
  padding: 0px;
  box-sizing: border-box;
}
.xpeH {
	display: grid;
  grid-template-rows: 60px 3fr 1fr;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100%;
  border: 3px solid red;
}
@media screen and (max-width: 768px) and (min-width: 0px){

}

/*
@media screen and (orientation: landscape) { 
  #logo { background: url(logo1.png) no-repeat; }
}
@media screen and (orientation: portrait) { 
  #logo { background: url(logo2.png) no-repeat; }
}
*/
header main .sidebar footer{
  border: 1px solid black;
}
header {
  grid-row-start: 1; grid-row-end: 2;
  grid-column-start: 1; grid-column-end: 3;
  font-size: 1.157em;
  color: red;
  background-color: darkgrey;

}
main {
  overflow: scroll;
}
footer {
  grid-row-start: 3; grid-row-end: 4;
  grid-column-start: 1; grid-column-end: 4;
}
.linkRed {
 color: red;
}
.sidebar{
  border: 1px solid black;
  margin-right: 26px;
  width: 100%;
}
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
</style>
