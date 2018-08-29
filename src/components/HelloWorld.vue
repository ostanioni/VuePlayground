<template>
  <div>
    {{ $t("message.404") }}
    <list></list>
  </div>
</template>

<style>
</style>

<script>
import List from '@/components/List'
export default {
  name: 'HelloWorld',
  components:{
    List
  }
}
</script>
