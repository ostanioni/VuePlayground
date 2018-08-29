<template>
<div>
  <h1>
    {{ $t("message.about") }}
  </h1>
  <list/>
</div>
</template>
<script>
import List from '@/components/List'
export default {
  components:{
    List
  }
}
</script>
