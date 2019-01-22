<template>
<the-main-layout></the-main-layout>
</template>
<script>
import TheMainLayout from '@/layouts/TheMainLayout';
export default {
  name: 'LayoutDefault',
  components: {
    TheMainLayout
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
