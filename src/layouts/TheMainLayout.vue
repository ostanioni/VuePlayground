<template>
<div class="xpeH">
  <header>
    <router-link to='/about'>ABOUT</router-link> |
    <router-link to='/home'>HOME</router-link> |
    <router-link to='/contacts'>CONTACTS</router-link> |
    <router-link to='/404'>404</router-link>
  </header>
  <div class="sidebar">SIDEBAR</div>
  <main>
    <router-view></router-view>
  </main>
  <footer class="seriousError">
    It's The Footer
  </footer>
</div>
</template>
<script>
export default {
  data(){
    return{
      msg:'mainLayout component'
    }
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 768px) and (min-width: 0px){
.xpeH {
	grid-kiss:
		"+-------------------------------+--------"
    "|               v               |        "
    "|           > header            |  100px "
    "|                               |        "
		"+-------------------------------+--------"
		"                                   10px  "
		"+----------+  +-----------------+--------"
		"| .sidebar |  |     < main >    |  auto  "
		"+----------+  +-----------------+--------"
		"                                   50px  "
		"+-------------------------------+--------"
		"|             ^                 |        "
    "|         > footer <            |  60px  "
    "|             v                 |        "
    "+-------------------------------+--------"
    "|   20%    |  |      80%        |        "
}
}
header{
  border: 1px solid black;
}
.sidebar{
  border: 1px solid black;
}
main{
  border: 1px solid black;
}
footer{
  border: 1px solid black;
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
