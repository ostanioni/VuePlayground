<template>
<TheLayout/>
</template>
<script>
import TheLayout from '@/layouts/TheLayout';
export default {
  name: 'LayoutDefault',
  components: {
    // TheMainLayout,
    TheLayout
  },
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  border: 3px solid red;
  display: grid;
}
</style>
