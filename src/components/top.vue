<template>
  <div 
    v-show="isAccessible"
    id = "backToTop"
    @click="backToTopProc"
  >
    <svg style="width:50%;height:50%" viewBox="0 0 124 124">
      <path fill="#070070" d="M13,18V10L16.5,13.5L17.92,12.08L12,6.16L6.08,12.08L7.5,13.5L11,10V18H13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
    </svg>
    <svg style="width:100%;height:100%" viewBox="0 0 300 300">
    <path fill="#000000" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
</svg>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isAccessible: false,
    }
  },
  methods: {
    trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        this.isAccessible = true;
      }
      if (scrolled < coords) {
        this.isAccessible = false;
      }
    },
    backToTopProc() {
    if (window.pageYOffset > 0) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      setTimeout(backToTopProc, 0);
    }
  }
  },
  componentDidMount(){
    
    let goTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTopProc);
  },
  components: {
  }

  
}
</script>
<style lang="scss" scoped>
#backToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>


