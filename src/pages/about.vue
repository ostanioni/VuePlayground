<template>
<div>
  <h1>
    {{ $t("message.about") }}
  </h1>
  <list/>
</div>
</template>
<script>
import List from '@/components/List';
import map from "lodash/fp/map";
import flatten from "lodash/fp/flatten";
import sortBy from "lodash/fp/sortBy";
import flow from "lodash/fp/flow";

const run = flow(map(x => [x,x*2]), flatten, sortBy(x=>x));
console.log(run([1,2,3]));

export default {
  components:{
    List
  }
}
</script>
