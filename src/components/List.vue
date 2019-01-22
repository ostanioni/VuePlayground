<template>
<div class="lists-wrapper">
  <br>
  <transition-group
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <p key="trademark">
    <img src="/statics/svg/arrowRlS.svg" alt="" class="ar" :class="{'ar-transform':show.trademark}">
    <span @click="show.trademark=!show.trademark"> Manufacturers</span>
    <transition name="fade" mode="out-in" appear>
    <ul class="trademark list" v-show="show.trademark">
      <li><a href="https://www.berghof-automation.com/">Berghof</a></li>
      <li><a href="https://www.beckhoff.ru/">BECKHOFF</a></li>
      <li><a href="https://www.beckhoff.ru/">Wago</a></li>
      <li><a href="https://www.beckhoff.ru/">Siemens</a></li>
      <li><a href="https://www.beckhoff.ru/">SchneiderElectric</a></li>
      <li><a href="https://www.beckhoff.ru/">ABB</a></li>
    </ul>
    </transition>
  </p>
  <p key="softwareLow"> 
    <img src="/statics/svg/arrowRlS.svg" alt="" class="ar" :class="{'ar-transform':show.softwareLow}">
    <span @click="show.softwareLow=!show.softwareLow"> Software (IDE & CAD)</span>
    <transition name="fade" mode="out-in" appear>
    <ul class="code list" v-show="show.softwareLow">
      <li><a href="https://www.autodesk.ru/products/autocad/included-toolsets/autocad-electrical">AutoCAD Electrical</a></li>
      <li><a href="https://www.codesys.com/">CODESYS</a></li>
    </ul>
    </transition>
  </p>
  <p key="scada">
    <img src="/statics/svg/arrowRlS.svg" alt="" width="22px" class="ar" :class="{'ar-transform':show.scada}">
    <span @click="show.scada=!show.scada"> Software (SCADA)</span>
    <transition name="fade" mode="out-in" appear>
    <ul class="scada list" v-show="show.scada">
      <li><a href="https://www.wonderware.ru/hmi-scada/intouch/">InTouch</a></li>
      <li><a href="https://www.beckhoff.ru/">TAC Vista</a></li>
      <li><a href="https://www.beckhoff.ru/">Citect</a></li>
      <li><a href="https://www.beckhoff.ru/">Siemens Desigo</a></li>
    </ul>
    </transition>
  </p>
  <p key="protocol">
    <img src="/statics/svg/arrowRlS.svg" alt="" class="ar" :class="{'ar-transform':show.protocol}">
    <span @click="show.protocol=!show.protocol"> Protocols</span>
    <transition name="fade" mode="out-in" appear>
    <ul class="protocol list" v-show="show.protocol">
      <li><a href="https://en.wikipedia.org/wiki/Modbus">ModBus TCP/RTU</a></li>
      <li><a href="http://www.lonmark.org/">LON</a></li>
      <li><a href="https://en.wikipedia.org/wiki/KNX_(standard)">KNX</a></li>
      <li><a href="https://www.ethercat.org/default.htm">EtherCAT</a></li>
      <li><a href="https://www.can-cia.org/canopen/">CANOpen</a></li>
    </ul>
    </transition>
  </p>
  <p key="systems">
    <img src="/statics/svg/arrowRlS.svg" alt="" class="ar" :class="{'ar-transform':show.systems}">
    <span @click="show.systems=!show.systems"> Instalations</span>
    <transition name="fade" mode="out-in" appear>
    <ul class="systems list" v-show="show.systems">
      <li> <span>АСКУЭ </span> </li>
      <li><span>АТМ </span></li>
      <li><span>АОВ </span></li>
      <li><span>АУПС</span></li>
      <li><span>АУПТ</span></li>
      <li><span>ОП</span></li>
      <li><span>СКУД</span></li>
      <li><span>прочие...</span></li>

    </ul>
    </transition>
  </p>
  </transition-group>
</div>
</template>
<script>
export default {
  data(){
    return{
      msg:'I\'m the lists',
      show: {
        softwareLow: false,
        trademark: false,
        scada: false,
        protocol: false,
        systems: false
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.systems
  font-weight: bold
  &>li
    cursor: help
</style>

<style lang="stylus" scoped>
.ar-transition
  transition-property: transform, color
  transition-duration: 50ms
  transition-timing-function: ease-in
  transition-delay: 50ms  
@media screen and (max-width: 768px) and (min-width: 0px)
  .list-wrapper
    margin-left: 40px
  .ar
    position: relative
    top: 0.5em
    @extend .ar-transition
  a
    position: relative
    top: -0.5em
  .systems
    &>li>span
      position: relative
      top: -0.3em
  .list
    margin-left: 15px
@media screen and (max-width: 992px) and (min-width: 769px)
  .list-wrapper
    margin-left: 140px
  .ar
    position: relative
    top: 0.3em
    @extend .ar-transition
  a
    position: relative
    top: -0.3em
  .list
    margin-left: 20px
  .systems
    &>li>span
      position: relative
      top: -0.3em  
@media screen and (max-width: 1200px) and (min-width: 993px)
  .list-wrapper
    margin-left: 140px
  .ar
    position: relative
    top: 0.3em
    @extend .ar-transition
  a
    position: relative
    top: -0.3em
  .list
    margin-left: 20px
  .systems
    &>li>span
      position: relative
      top: -0.3em  
@media screen and (min-width: 1201px)
  .list-wrapper
    margin-left: 240px
  .ar
    position: relative
    top: 0.3em
    @extend .ar-transition
  a
    position: relative;
    top: -0.3em;  
  .list
    margin-left: 20px
  .systems
    &>li>span
      position: relative
      top: -0.3em  

.ar-transform
  transform: rotate(90deg)
p>span
  cursor: pointer
ul.code
  list-style-image: url('/statics/svg/code.svg')
ul.trademark
  list-style-image: url('/statics/svg/trademark.svg')
ul.scada
  list-style-image: url('/statics/svg/tv.svg')
ul.protocol
  list-style-image: url('/statics/svg/protocol.svg')
ul.systems
  list-style-image: url('/statics/svg/develop.svg')  
</style>
<style>
/*
p>span{
  font-size: 14px;
  color: #319999;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: bold;
}

p::first-letter{
  font-size: 130%;
  color: red;
  font-weight: bold;
}
*/
p::first-letter{
  font-size: 130%;
  color: #319999;
  font-weight: bold;
}
p>span{
  text-transform: uppercase;
  font-weight: bold;
}
</style>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
<style lang="scss" scoped>
p>span{
  cursor: pointer;
}
ul.code{
  list-style-image: url('/statics/svg/code.svg');
}
ul.trademark{
  list-style-image: url('/statics/svg/trademark.svg');
}
ul.scada{
  list-style-image: url('/statics/svg/tv.svg');
}
ul.protocol{
  list-style-image: url('/statics/svg/protocol.svg');
}
ul.systems{
  list-style-image: url('/statics/svg/develop.svg');
}
</style>



